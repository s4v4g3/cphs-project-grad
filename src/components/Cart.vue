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
                                        <span class="item-price">$ {{ item.product.price }}.00</span>
                                    </v-col>
                                    <v-col :cols="1">
                                        <v-btn color="red darken-1" @click="removeItem(index)" text>Remove</v-btn>
                                    </v-col>
                                </v-row>
                            </v-card>
                            <br />
                        </div>
                    </v-container>
                    <v-card-title v-if="showBonus">
                        <v-container>
                            <v-row>
                               <v-col :cols="5">
                                    <span class="headline">Bundle Discount</span>
                                </v-col>
                                <v-col :cols="2" :offset="5">
                                    <span class="headline">{{bundleDiscount()}}</span>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-title>
                    <v-card-title>
                        <v-container>
                            <v-row>
                                <v-col :cols="5">
                                    <span class="headline">Total Price:</span>
                                </v-col>
                                <v-col :cols="2" :offset="5">
                                    <span class="headline">{{totalPrice()}}</span>
                                </v-col>
                            </v-row>
                        </v-container>
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
        </v-dialog>
        <v-dialog v-model="showCheckoutMessage" max-width="320">
            <v-card>
                <v-card-title class="headline">Sorry, we're not open yet!</v-card-title>

                <v-card-text>We're not quite ready to sell you anything just yet. Please check back with us in a bit!</v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn color="green darken-1" text @click="showCheckoutMessage = false">Okay</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
    name: "cart",
    props: ["value"],
    data: () => ({
        displayed: false,
        showCheckoutMessage: false
    }),
    created() {},
    mounted() {
        window.console.log("Cart mounted!");
        this.displayed = this.value;
    },
    watch: {
        value: function(newValue) {
            window.console.log("value changed: " + newValue.toString());
            this.displayed = newValue;
        }
    },
    methods: {
        ...mapActions(["addProduct", "showOrHiddenModal", "removeProduct"]),
        checkout() {
            this.showCheckoutMessage = true
        },
        close() {
            this.displayed = false;
            this.$emit("input", false);
        },
        hasProduct() {
            return this.cartContents.length > 0;
        },
        
        bundleDiscount () {
            let award = this.getBundleDiscountAndBonus
            return '$' + `${award.discount}`
        },
        totalPrice() {
            let price = this.getTotalPrice
            window.console.log(price)
            return '$' + `${price}`
        },
        removeItem(index) {
            // index is the index into cartContents, which is sorted by name.
            // to get the index into the products in the vuex store, get the 'index'
            // property
            let realIndex = this.cartContents[index].index
            this.removeProduct(realIndex)
        },
        displayedChanged(value) {
            window.console.log("displayedChanged: " + value.toString());
            if (value == false) this.close();
        }
    },
    computed: {
        ...mapGetters(["getProductsInCart", "getProducts", "getTotalPrice", "getSubtotal", "getBundleDiscountAndBonus"]),
        showBonus: function() {
            return this.getBundleDiscountAndBonus.awards.length > 0
        },
        cartContents: function() {
            return this.getProductsInCart
                .map((item,i) => ({
                    product: this.getProducts.find(
                        product => product.id == item.id
                    ),
                    selectedOptions: item.selectedOptions,
                    index: i
                }))
                .sort((a, b) => a.product.id - b.product.id);
        }    }
};
</script>