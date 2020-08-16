<template>
    <div>
        <v-dialog v-model="productPopup" max-width="500" >
            <v-card v-if="productPopup">
                <product :item="currentProduct" dialog @closeDialog="closeModal()" />
                <v-btn v-if="false" color="green darken-1" text @click="closeModal()">Close</v-btn>
            </v-card>
            
        </v-dialog>

        <v-carousel
            :cycle="true"
            :height="height"
            :hide-delimiter-background="true"
            show-arrows-on-hover
        >
            <div v-for="(item,i) in items" :key="i">
                <v-carousel-item
                    v-if="item.hasOwnProperty('link')"
                    :src="item.image"
                    :to="item.link"
                    :height="height"
                    contain
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                ></v-carousel-item>
                <v-carousel-item
                    v-else
                    :src="item.image"
                    :height="height"
                    to="/"
                    @click="productClick(item)"
                    contain
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                ></v-carousel-item>
            </div>
        </v-carousel>
    </div>
</template>
<script>
//import { mapGetters, mapActions } from "vuex";
import product from "../components/Product";
export default {
    name: "mainCarousel",
    components: {
        product
    },
    props: {
        height: Number,
        items: Array
    },
    data: () => ({
        productPopup: false,
        currentProduct: null
    }),
    created() {
        window.console.log(this.items);
    },
    methods: {
        closeModal() {
            this.productPopup = false;
            this.currentProduct = null;
        },
        productClick(item) {
            window.console.log(`item: ${item.product.id}`);
            this.currentProduct = item.product;
            this.productPopup = true;
        }
    },
    computed: {}
};
</script>