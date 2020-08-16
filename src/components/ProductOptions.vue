<template>
    <v-dialog v-model="displayed" max-width="500" @input="displayedChanged">
        <v-card>
            <v-card-title class="headline">{{item.displayName}} Options</v-card-title>

            <v-card-text>
                <div v-for="(option,i) in item.availableOptions" :key="i">
                    <v-select
                        v-if="option.type=='Selection'"
                        :label="getSelectionLabel(option.name)"
                        :items="option.options"
                        v-model="selectedOptions[i].value"
                    ></v-select>
                    <v-text-field
                        v-if="option.type=='Text'"
                        v-bind:label="getTextOptionLabel(option)"
                        v-model="selectedOptions[i].value"
                        :counter="option.charLimit"
                    ></v-text-field>

                    <v-select
                        v-if="option.type=='NumericSelection'"
                        :label="getSelectionLabel(option.name)"
                        :items="getPriceLabels(option.options)"
                        v-model="selectedOptions[i].value"
                    ></v-select>
                    <div v-if="option.type=='NumericSlider'">
                        <v-subheader class="pl-0">{{option.name}}</v-subheader>
                        <v-btn-toggle>
                            <v-btn
                                v-for="(amount, j) in option.options"
                                :key="j"
                                @click="selectNumericAmount(amount, i)"
                            >${{amount}}</v-btn>
                        </v-btn-toggle>
                        <br />
                        <br />
                        <br />
                        <v-slider
                            v-model="selectedOptions[i].value"
                            :thumb-size="24"
                            thumb-label="always"
                            :min="option.min"
                            :max="option.max"
                        >
                            <template
                                v-slot:thumb-label="{ value }"
                            >{{ getEmoji(value, option.min, option.max) }}</template>
                            <template v-slot:append>
                                <v-text-field
                                    v-model="selectedOptions[i].value"
                                    class="mt-0 pt-0"
                                    hide-details
                                    single-line
                                    type="number"
                                    style="width: 80px"
                                    prefix="$"
                                ></v-text-field>
                            </template>
                        </v-slider>
                    </div>
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
        selectedOptions: [],
        satisfactionEmojis: [
            "😭",
            "😢",
            "☹️",
            "🙁",
            "😐",
            "🙂",
            "😊",
            "😁",
            "😄",
            "😍"
        ]
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
        getEmoji(value) {
            const emojiMap = {
                0: "😐",
                20: "🙂",
                50: "😊",
                100: "😁",
                500: "😄",
                1000: "😍"
            };
            for (let key in emojiMap) {
                if (value < key) return emojiMap[key];
            }
            return emojiMap[1000];
            //return this.satisfactionEmojis[Math.min(Math.floor(value / 10), 9)]
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
        },
        getPriceLabels(options) {
            return options.map(opt => "$" + `${opt}`);
        },
        selectNumericAmount(amount, optionIndex) {
            window.console.log(this.selectedOptions);
            window.console.log(amount);
            window.console.log(optionIndex);
            this.selectedOptions[optionIndex].value = amount;
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