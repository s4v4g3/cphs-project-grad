<template>
    <v-container fluid class="text-center">
        <v-snackbar
            color="red"
            v-model="failedCredentialsAlert"
            :timeout="4000"
            :top="true"
        >Invalid Credentials!</v-snackbar>
        <v-snackbar
            color="success"
            v-model="credentialsVerifiedAlert"
            :timeout="4000"
            :top="true"
        >Credentials Verified!</v-snackbar>
        <div v-if="!credentialsVerified">
            <v-row>
                <v-col cols="4" offset="3">
                    <v-text-field label="Username" v-model="credentials.username"></v-text-field>
                    <v-text-field label="Password" v-model="credentials.password"></v-text-field>
                    <v-btn @click="setCredentials()">Set Credentials</v-btn>
                </v-col>
            </v-row>
        </div>
        <div v-else>
            <v-tabs fixed-tabs v-model="tab" background-color="green" dark>
                <v-tab>Orders by Customer</v-tab>
                <v-tab>Transactions</v-tab>
                <v-tab>Reports</v-tab>
            </v-tabs>
            <v-tabs-items v-model="tab">
                <div v-if="tab==0">
                    <customers />
                </div>
                <div v-if="tab==1">
                </div>
                <div v-if="tab==2">
                </div>
            </v-tabs-items>
        </div>
    </v-container>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { queryDb } from "../backend";
import customers from "../components/reports/Customers"

export default {
    name: "Reports",
    components: { customers},
    data: () => ({
        credentialsVerified: false,
        credentials: {
            username: "",
            password: ""
        },
        failedCredentialsAlert: false,
        credentialsVerifiedAlert: false,
        tab: null
    }),
    created() {
        this.credentials.username = this.$route.query.username
        this.credentials.password = this.$route.query.password
        let credentials = this.getReportCredentials;
        if (credentials != null) {
            this.credentials = credentials;
            this.credentialsVerified = true;
        }
    },
    methods: {
        ...mapActions(["setReportCredentials"]),
        setCredentials() {
            window.console.log(this.username);
            window.console.log(this.password);
            // do a fake query to test credentials
            queryDb("reports", this.credentials, { id: "1234567" })
                .then(results => {
                    window.console.log(results);
                    this.credentialsVerified = true;
                    this.credentialsVerifiedAlert = true;
                    this.setReportCredentials(this.credentials);
                })
                .catch(err => {
                    window.console.log(err);
                    this.failedCredentialsAlert = true;
                });
        }
    },
    computed: {
        ...mapGetters(["getReportCredentials"])
    }
};
</script>