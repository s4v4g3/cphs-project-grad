<template>
    <v-container fluid class="text-center">
        <v-card>
            <v-row v-if="transactionSuccess" class="text-center">
                <v-col cols="12">
                    <h1>Order Key</h1>
                    {{this.orderKey}}
                </v-col>
                <v-col cols="12">
                    <h1>Checkout Id</h1>
                    {{this.checkoutId}}
                </v-col>
                <v-col cols="12">
                    <h1>Transaction Id</h1>
                    {{this.transactionId}}
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
    name: "PaymentConfirmation",
    components: {},
    data: () => ({
        orderKey: null,
        checkoutId: null,
        transactionId: null,
        transactionSuccess: false
    }),
    created() {
        this.orderKey = this.$route.params.orderKey;
        this.checkoutId = this.$route.query.checkoutId;
        this.transactionId = this.$route.query.transactionId;
        let pendingCheckout = this.getPendingCheckout;
        if (
            this.orderKey == this.getOrderKey &&
            pendingCheckout.id == this.checkoutId
        ) {
            this.transactionSuccess = true;

            this.clearCart()
            this.setPendingCheckout(null)

        } else {
            this.transactionSuccess = false;
        }
    },
    methods: {
        ...mapActions(["clearCart", "setPendingCheckout"])
    },
    computed: {
        ...mapGetters(["getOrderKey", "getPendingCheckout"])
    }
};
</script>
