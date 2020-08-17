<template>
    <v-container fluid class="text-center">
        <v-card v-if="transactionSuccess">
            <v-row  class="text-center">
                <v-col cols="12">
                    <h1>
                        <v-icon large>mdi-check-circle</v-icon>Your Order was Placed Successfully
                    </h1>
                </v-col>
                <v-col offset="2" cols="8">
                    <p>
                        Thank you for your order. An email confirmation will be sent to the address specified at checkout.
                        If you have questions about your order, please contact us at
                        <a href="mailto:cphsprojgrad2021@gmail.com">cphsprojgrad2021@gmail.com</a>
                    </p>
                </v-col>
                <v-col offset="2" cols="8">
                    <v-btn to="/">Back to Home</v-btn>
                </v-col>
            </v-row>
            <br />
            <br />
            <br />
            <br />
            <v-row>
                <v-col offset="2" cols="8">
                    Your transaction ID is
                    <code>{{this.transactionId}}</code>
                </v-col>
            </v-row>
        </v-card>
        <v-card v-else>
        <v-col offset="2" cols="8">
                    <v-btn to="/">Back to Home</v-btn>
                </v-col></v-card>
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

            this.clearCart();
            this.setPendingCheckout(null);
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
