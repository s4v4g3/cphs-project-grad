<template>
    <v-card class="mx-auto" max-width="500">
        <v-img
            v-if="item.product.images.length == 1"
            :src="item.product.images[0]"
            :height="item.height"
        ></v-img>
        <v-carousel
            v-else
            :cycle="false"
            :height="item.height"
            :hide-delimiter-background="true"
            show-arrows-on-hover
        >
            <v-carousel-item
                v-for="(image,i) in item.product.images"
                :key="i"
                :src="image"
                reverse-transition="fade-transition"
                transition="fade-transition"
            ></v-carousel-item>
        </v-carousel>

        <v-card-title>{{item.product.displayName}}</v-card-title>

        <v-card-subtitle>{{item.product.caption}}</v-card-subtitle>

        <v-card-actions>
            <v-btn text>${{item.product.price}}</v-btn>

            <v-btn color="purple" text @click.native="addProductToCart(item.product)">Add to Cart</v-btn>

            <v-spacer></v-spacer>

            <v-btn v-if="false" icon @click="show = !show">
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: "product",
    props: ["item"],
    data: () => ({}),
    created() {},
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