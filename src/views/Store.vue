<template>
    <v-container fluid>
        <v-row class="text-center">
            <v-col class="mb-4" cols="12">
                <v-container>
                    <v-card>
                        <v-app-bar large dark color="success">Bundle Savings</v-app-bar>
                        <v-card class="px-6" >
                        <v-row class="text-center">
                            <v-col cols="12">
                                <v-card  :elevation="10" >
                                    <v-card-title  class="headline">Senior Bundle</v-card-title>

                                    <h3 >Get a T-Shirt, Yard Sign, Face Mask, and Gaiter for $50!</h3>

                                    <v-card-actions>
                                        <v-btn text>$20 Savings!</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-col>
                            <v-col cols="12">
                                <v-card  :elevation="10" >
                                    <v-card-title class="headline">Super Senior Bundle</v-card-title>

                                    <h3> Get a T-Shirt, Yard Sign, Face Mask, Gaiter, and Commemorative Brick for $100 </h3>
                                    <h3> and get a Free Granite Coaster! </h3>

                                    <v-card-actions>
                                        <v-btn text>$20 Savings + Bonus Coaster</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-col>
                        </v-row>
                        </v-card>
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