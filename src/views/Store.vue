<template>
    <v-container fluid>
        <v-row class="text-center">
            <v-col class="mb-4" cols="12">
                <h2 class="display-2 mb-2">Store will be online soon!</h2>
                <h3>(pending district approval)</h3>
            </v-col>
        </v-row>
        <v-row>
            
            <v-col v-for="(item,i) in items" :key="i" :cols="12/itemsPerRow">
                <product :item="item" />
                
            </v-col>
        </v-row>
        
    </v-container>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import product from '../components/Product'
export default {
    name: "store",
    components: {product},
    data: () => ({
        dialog: false,
        show: false,
        items: []
    }),
    created() {
        this.items = [
            {
                product: this.getProductByName("t-shirt"),
                height: 800
            },
            {
                product: this.getProductByName("brick"),
                height: 800
            },
            {
                product: this.getProductByName("yardsign"),
                height: 400
            },
            {
                product: this.getProductByName("flag"),
                height: 400
            },
            {
                product: this.getProductByName("facemask"),
                height: 400
            },
            {
                product: this.getProductByName("gaiter"),
                height: 400
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