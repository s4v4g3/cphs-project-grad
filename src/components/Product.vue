<template>
    <div>
        
        <productOptions :item="item" v-model="optionsDialog" @productAdded="closeDialog()" />

        <v-card class="mx-auto" max-width="500">
            <v-img
                v-if="item.images.length == 1"
                :src="item.images[0]"
                :height="item.imageHeight"
                @click="imageClick(item)"
            ></v-img>
            <v-carousel
                v-else
                :cycle="false"
                :height="item.imageHeight"
                :hide-delimiter-background="true"
                show-arrows-on-hover
            >
                <v-carousel-item
                    v-for="(image,i) in item.images"
                    :key="i"
                    :src="image"
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                    @click="imageClick(item)"
                ></v-carousel-item>
            </v-carousel>

            <v-card-title>{{item.displayName}}</v-card-title>

            <v-card-subtitle>{{item.caption}}</v-card-subtitle>

            <v-card-actions>
                <v-btn text>${{item.price}}</v-btn>

                <v-btn
                    v-if="item.availableOptions.length"
                    color="purple"
                    text
                    @click.native="optionsDialog = true"
                >Select Options</v-btn>
                <v-btn
                    v-else
                    color="red"
                    text
                    @click.native="addProductToCart({id: item.id, selectedOptions: []})"
                >Add to Cart</v-btn>

                <v-spacer></v-spacer>

                <v-btn
                    v-if="dialog"
                    color="green"
                    text
                    @click.native="closeDialog()"
                >Close</v-btn>

                <v-btn v-if="false" icon @click="show = !show">
                    <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import productOptions from "./ProductOptions";

export default {
    name: "product",
    props: {
        item: Object,
        dialog: {
            type: Boolean,
            default: false
        }
    },
    components: { productOptions },
    data: () => ({
        optionsDialog: false,
    }),
    created() {
        window.console.log("Product created!")
        window.console.log("Item: " + this.item.id.toString())
    },
    methods: {
        ...mapActions(["addProduct", "showOrHiddenModal"]),
        addProductToCart(product) {
            this.addProduct(product);
            this.closeDialog()
        },
        getProductByName(name) {
            return this.getProducts.find(product => product.name == name);
        },
        getSelectionLabel(optionName) {
            return `Select a ${optionName}`;
        },
        imageClick(item) {
            if (item.availableOptions.length > 0) {
                this.optionsDialog = true
            }
        },
        closeDialog() {
            if (this.dialog)  this.$emit('closeDialog', true)
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