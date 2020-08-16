<template>
    <v-dialog v-model="displayed" max-width="500" @input="displayedChanged">
        <v-card>
            <v-card-title class="headline">{{item.displayName}} Options</v-card-title>

            <v-card-text>
                <div v-for="(option,i) in item.availableOptions" :key="i">
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
        displayed: false,
        selectedOptions: []
    }),
    created() {
        this.initializeOptions();
    },
    mounted() {},
    watch: {
        value: function(newValue) {
            window.console.log("value changed: " + newValue.toString());
            this.displayed = newValue;
        }
    },
    methods: {
        ...mapActions(["addProduct", "showOrHiddenModal"]),
        addProductToCart() {
            if (!this.allOptionsSelected) {
                return;
            }

            this.addProduct({
                id: this.item.id,
                selectedOptions: this.selectedOptions
            });
            this.$emit("productAdded", true);
            this.close();
        },
        getSelectionLabel(optionName) {
            return `Select a ${optionName}`;
        },
        getTextOptionLabel(option) {
            return `${option.name} (${option.charLimit} chars max)`;
        },
        close() {
            this.$emit("input", false);
            this.initializeOptions();
        },
        displayedChanged(value) {
            window.console.log("displayedChanged: " + value.toString());
            if (value == false) this.close();
        },
        initializeOptions() {
            this.selectedOptions = this.item.availableOptions.map(option => ({
                name: option.name,
                value: null
            }));
        }
    },
    computed: {
        allOptionsSelected() {
            let allSelected = true;
            this.selectedOptions.forEach((opt, i) => {
                if (opt.value === null || opt.value === "") {
                    allSelected = false;
                } else if (
                    this.item.availableOptions[i].type === "Text" &&
                    opt.value.length > this.item.availableOptions[i].charLimit
                ) {
                    allSelected = false;
                }
            });
            return allSelected;
        }
    }
};
</script>