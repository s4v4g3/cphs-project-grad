<template>
    <v-row justify="center">
        <v-dialog v-model="displayed" max-width="700" @input="displayedChanged">
            <v-card>
                <v-card-title v-if="!hasProduct()" class="headline">Your Cart is Empty!</v-card-title>
                <div v-else>
                    <v-card-title>
                        <span class="headline">Shopping Cart</span>
                    </v-card-title>
                    <v-container>
                        <div v-for="(item, index) in cartContents" :key="index" class="box-item">
                            <v-card>
                                <v-row>
                                    <v-col :cols="2">
                                        <v-img
                                            :src="item.product.images[0]"
                                            max-height="100"
                                            max-width="100"
                                            contain
                                        />
                                    </v-col>
                                    <v-col :cols="5">
                                        <h3 class="item-name">{{ item.product.displayName }}</h3>
                                        <p
                                            v-for="(option,i) in item.selectedOptions"
                                            :key="i"
                                        >{{ option.name }}: {{ option.value }}</p>
                                    </v-col>
                                    <v-col :cols="3">
                                        <span class="item-price">$ {{ getItemPrice(item) }}.00</span>
                                    </v-col>
                                    <v-col :cols="1">
                                        <v-btn
                                            color="red darken-1"
                                            @click="removeItem(index)"
                                            text
                                        >Remove</v-btn>
                                    </v-col>
                                </v-row>
                            </v-card>
                            <br />
                        </div>
                    </v-container>
                    <v-list-item v-if="showDiscount">
                        <v-row v-if="showDiscount">
                            <v-col :cols="5">
                                <span>Subtotal</span>
                            </v-col>
                            <v-col :cols="2" :offset="5">
                                <span>{{subtotal()}}</span>
                            </v-col>
                        </v-row>
                    </v-list-item>
                    <v-list-item v-if="showDiscount">
                        <v-row v-if="showDiscount">
                            <v-col :cols="5">
                                <span>Bundle Discount</span>
                            </v-col>
                            <v-col :cols="2" :offset="5" color="red">
                                ({{bundleDiscount()}})
                                <span color="red"></span>
                            </v-col>
                        </v-row>
                    </v-list-item>
                    <v-list-item v-if="showBonusItems">
                        <v-row>
                            <v-col :cols="5">
                                <span>Bonus Items</span>
                            </v-col>
                            <v-col :cols="2" :offset="5">
                                <span>{{getBonusItemText()}}</span>
                            </v-col>
                        </v-row>
                    </v-list-item>
                    <v-card-title>
                        <v-row>
                            <v-col :cols="5">
                                <span>Total Price:</span>
                            </v-col>
                            <v-col :cols="2" :offset="5">
                                <span>{{totalPrice()}}</span>
                            </v-col>
                        </v-row>
                    </v-card-title>
                </div>
                <v-card-actions>
                    <v-btn
                        v-if="hasProduct()"
                        color="green darken-1"
                        text
                        @click="checkout()"
                    >Go To Checkout</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn color="green darken-1" text @click="close()">Continue Shopping</v-btn>
                </v-card-actions>
            </v-card>
            <v-overlay :absolute="true" :value="showOverlay">
                <v-btn color="success">
                    Taking you to the Secure Checkout Page...
                    <v-progress-circular indeterminate color="red"></v-progress-circular>
                </v-btn>
            </v-overlay>
        </v-dialog>
        <v-dialog v-model="showCheckoutDisabledMessage" max-width="320">
            <v-card>
                <v-card-title class="headline">Sorry, we're not open yet!</v-card-title>
                <v-card-text>We're not quite ready to sell you anything just yet. Please check back with us in a bit!</v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="green darken-1"
                        text
                        @click="showCheckoutDisabledMessage = false"
                    >Okay</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import doCheckout from "../checkout";
export default {
    name: "cart",
    props: ["value"],
    components: {},
    data: () => ({
        displayed: false,
        showCheckoutDisabledMessage: false,
        showOverlay: false
    }),
    created() {},
    mounted() {
        window.console.log("Cart mounted!");
        this.displayed = this.value;
        window.console.log(this.$router);
    },
    watch: {
        value: function(newValue) {
            window.console.log("value changed: " + newValue.toString());
            this.displayed = newValue;
        }
    },
    methods: {
        ...mapActions(["addProduct", "removeProduct", "setPendingCheckout"]),
        checkout() {
            if (this.getEndpoint == "disabled") {
                this.showCheckoutDisabledMessage = true;
                return;
            }
            let checkoutPayload = this.getCheckoutPayload;
            // replace redirect_url in checkout payload
            let currentUrl = window.location.href;
            let routerPath = this.$router.currentRoute.fullPath;
            let redirectUrlBase = currentUrl.substring(
                0,
                currentUrl.length - routerPath.length
            );
            let redirectUrl =
                redirectUrlBase + "/paymentConfirmation/" + this.getOrderKey;
            checkoutPayload.body.redirect_url = redirectUrl;

            window.console.log("checkout!");
            window.console.log(checkoutPayload);
            window.console.log(checkoutPayload.body.order.order.id);
            window.console.log(checkoutPayload.body.redirect_url);

            doCheckout(checkoutPayload)
                .then(checkoutResult => {
                    window.console.log("Received Server Result from checkout");
                    window.console.log(checkoutResult);

                    this.setPendingCheckout(checkoutResult);

                    window.console.log(checkoutResult.checkout_page_url);

                    this.showOverlay = true;

                    setTimeout(() => {
                        this.showOverlay = false;
                        // Navigate to checkout URL
                        window.location = checkoutResult.checkout_page_url;
                    }, 2500);
                })
                .catch(err => {
                    // TODO: handle error
                    window.console.log(err);
                });
        },
        close() {
            this.displayed = false;
            this.$emit("input", false);
        },
        hasProduct() {
            return this.cartContents.length > 0;
        },
        subtotal() {
            let price = this.getSubtotal;
            return "$" + `${price}`;
        },
        bundleDiscount() {
            let award = this.getBundleDiscountAndBonus;
            return "$" + `${award.discount}`;
        },
        totalPrice() {
            let price = this.getTotalPrice;
            window.console.log(price);
            return "$" + `${price}`;
        },
        getBonusItemText() {
            let award = this.getBundleDiscountAndBonus;
            window.console.log(award);
            let text = "";
            let items = {};
            award.bonuses.forEach(bonus => {
                if (!(bonus in items)) {
                    items[bonus] = 0;
                }
                items[bonus] += 1;
            });
            for (let item in items) {
                if (text != "") {
                    text += ", ";
                }
                text = text + `${item} (${items[item]})`;
            }
            return text;
        },
        removeItem(index) {
            // index is the index into cartContents, which is sorted by name.
            // to get the index into the products in the vuex store, get the 'index'
            // property
            let realIndex = this.cartContents[index].index;
            this.removeProduct(realIndex);
        },
        displayedChanged(value) {
            window.console.log("displayedChanged: " + value.toString());
            if (value == false) this.close();
        },
        getItemPrice(item) {
            return this.$store.getters.getItemPrice(item);
        }
    },
    computed: {
        ...mapGetters([
            "getProductsInCart",
            "getProducts",
            "getTotalPrice",
            "getSubtotal",
            "getBundleDiscountAndBonus",
            "getLineItemsForCheckout",
            "getCheckoutPayload",
            "getEndpoint",
            "getOrderKey"
        ]),
        showDiscount: function() {
            return this.getBundleDiscountAndBonus.awards.length > 0;
        },
        showBonusItems: function() {
            return this.getBundleDiscountAndBonus.bonuses.length > 0;
        },
        cartContents: function() {
            return this.getProductsInCart
                .map((item, i) => ({
                    product: this.getProducts.find(
                        product => product.id == item.id
                    ),
                    id: item.id,
                    selectedOptions: item.selectedOptions,
                    index: i
                }))
                .sort((a, b) => a.product.id - b.product.id);
        }
    }
};
</script>