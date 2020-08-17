<template>
    <v-container fluid class="text-center">
        <v-card>
            <v-row  class="text-center">
                <v-col offset="4" cols="3">
                <v-select label="Endpoint" :items="endpoints" v-model="endpoint" />
                </v-col>
            </v-row>
            <v-row>
                <v-col class="mb-4"></v-col>
                <v-col class="mb-4"></v-col>
                <v-col class="mb-4"></v-col>
            </v-row>
        </v-card>
    </v-container>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
    name: "Configuration",
    components: {},
    data: () => ({
        endpoints: ['disabled', 'sandbox', 'production' ],
        endpoint: null
    }),
    created() {
        this.endpoint = this.getEndpoint
    },
    watch: {
        endpoint: function(newValue) {
            window.console.log("endpoint set to " + newValue)
            this.setEndpoint(newValue)
        }
    },
    methods: {
        ...mapActions(["setEndpoint", "setPendingCheckout"])
    },
    computed: {
        ...mapGetters(["getEndpoint", "getPendingCheckout"])
    }
};
</script>
