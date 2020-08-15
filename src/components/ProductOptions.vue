<template>
    <v-dialog v-model="value" max-width="500">
        <v-card>
            <v-card-title class="headline">{{item.product.displayName}} Options</v-card-title>

            <v-card-text>
                <div v-for="(option,i) in item.product.availableOptions" :key="i">
                    <v-combobox
                        v-if="option.type=='Selection'"
                        :label="getSelectionLabel(option.name)"
                        :items="option.options"
                        v-model="selectedOptions[i].value"
                    ></v-combobox>
                    <v-text-field
                    v-if="option.type=='Text'"
                        v-bind:label="getTextOptionLabel(option)"
                        v-model="selectedOptions[i].value"
          ></v-text-field>
                </div>
            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="green darken-1"
                    text
                    @click="addProductToCart()"
                    :disabled="!allOptionsSelected"
                >Add to Cart</v-btn>
                <v-btn color="green darken-1" text @click="close()">Cancel</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script>
import { mapActions } from "vuex";

export default {
    name: "productOptions",
    props: ["item", "value"],
    data: () => ({
        selectedOptions: []
    }),
    created() {
        this.initializeOptions();
    },
    mounted() {},
    methods: {
        ...mapActions(["addProduct", "showOrHiddenModal"]),
        addProductToCart() {
            if (!this.allOptionsSelected) {
                return;
            }

            this.addProduct({id: this.item.product.id, selectedOptions: this.selectedOptions});
            this.close();
        },
        getSelectionLabel(optionName) {
            return `Select a ${optionName}`;
        },
        getTextOptionLabel(option) {
            return `${option.name} (${option.charLimit} chars max)`
        },
        close() {
            this.$emit("input", false);
            this.initializeOptions();
        },
        initializeOptions() {
            this.selectedOptions = this.item.product.availableOptions.map(
                (option) => ({ name: option.name, value: null})
            );
        }
    },
    computed: {
        allOptionsSelected() {
            let allSelected = true;
            this.selectedOptions.forEach((opt,i) => {
                if (opt.value === null || opt.value === '') {
                    allSelected = false;
                } else if (this.item.product.availableOptions[i].type === 'Text' && opt.value.length > this.item.product.availableOptions[i].charLimit) {
                    allSelected = false;
                }
            });
            return allSelected;
        }
    }
};
</script>