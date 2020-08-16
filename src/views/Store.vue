<template>
    <v-container fluid>
        <v-row class="text-center">
            <v-col class="mb-4" cols="12">
                <v-container>
                    <v-card>
                        <h2 class="display-2 mb-2">Bundles</h2>
                        <v-row class="text-center">
                            <v-col class="mb-4"  offset="1" cols="4">
                                <v-card>
                                    <v-card-title>
                                        <span class="headline">Senior Bundle - $50</span>
                                    </v-card-title>
                                    <v-card-text>Get a T-Shirt, Yard Sign, Face Mask, and Gaiter and Save $20! <br> (discount applied at checkout)</v-card-text>
                                </v-card>
                            </v-col>
                            <v-col class="mb-4" offset="2" cols="4">
                                <v-card>
                                    <v-card-title>
                                        <span class="headline">Super Senior Bundle - $100</span>
                                    </v-card-title>
                                    <v-card-text>Get a T-Shirt, Yard Sign, Face Mask, Gaiter, and Commemorative Brick -- Save $20 and get a free replica coaster made of granite!<br> (discount applied at checkout)</v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-container>
            </v-col>
        </v-row>
        <v-row>
            <v-col v-for="(item,i) in items" :key="i" :cols="12/itemsPerRow">
                <product :item="item.product" />
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import product from "../components/Product";
export default {
    name: "store",
    components: { product },
    data: () => ({
        dialog: false,
        show: false,
        items: []
    }),
    created() {
        this.items = [
            {
                product: this.getProductByName("t-shirt")
            },
            {
                product: this.getProductByName("brick")
            },
            {
                product: this.getProductByName("yardsign")
            },
            {
                product: this.getProductByName("flag")
            },
            {
                product: this.getProductByName("facemask")
            },
            {
                product: this.getProductByName("gaiter")
            },
            {
                product: this.getProductByName("jersey")
            },
            {
                product: this.getProductByName("donation")
            }
        ];
    },
    methods: {
        ...mapActions(["addProduct", "showOrHiddenModal"]),
        addProductToCart(product) {
            this.addProduct(product);
        },
        getProductByName(name) {
            return this.getProducts.find(product => product.name == name);
        }
    },
    computed: {
        ...mapGetters(["getProducts"]),
        itemsPerRow: function() {
            return this.$vuetify.breakpoint.width > 1000 ? 2 : 1;
        }
    }
};
</script>
<style lang="scss">
</style>