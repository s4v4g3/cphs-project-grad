<template>
    <v-container>
        <v-btn @click="refresh()">Refresh Data</v-btn>
        <br />
        <v-data-table
            :headers="headers"
            :items="orders"
            :search="search"
            show-expand
            sort-by="date"
            sort-desc
            class="elevation-1 ma-2"
        >
            <template v-slot:top>
                <v-toolbar flat>
                    <v-toolbar-title>Transactions</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="Search"
                        single-line
                        hide-details
                    ></v-text-field>
                </v-toolbar>
            </template>
            <template v-slot:item.amount="{ item }">${{ item.amount / 100 }}.00</template>
            <template v-slot:item.items="{ item }">{{ item.items.length }}</template>
            <template v-slot:expanded-item="{ headers, item }">
                <td :colspan="headers.length">
                    <v-row>
                        <v-col cols="4" v-for="(lineItem, i) in item.line_items" :key="i">
                            <v-list-item two-line >
                                <v-list-item-content>
                                    <v-list-item-title>{{ lineItem.name }}</v-list-item-title>
                                    <v-list-item-subtitle>{{ lineItem.note }}</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-col>
                    </v-row>
                    
                </td>
            </template>
        </v-data-table>
    </v-container>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { queryDb } from "../../backend";
export default {
    name: "orders",
    components: {},
    data: () => ({
        credentials: null,
        customers_by_id: {},
        search: null,
        headers: [
            { text: "Date", value: "date" },
            { text: "Amount", value: "amount" },
            { text: "Customer E-mail", value: "customerEmailAddress" },
            { text: "Number of Items", value: "items" }
        ]
    }),
    created() {
        this.credentials = this.getReportCredentials;
        this.makeCustomerMap();
    },
    methods: {
        ...mapActions(["setReportCollections"]),
        refresh() {
            window.console.log(this.credentials);
            queryDb("customers", this.credentials, {}).then(customerResults => {
                queryDb("orders", this.credentials, {}).then(orderResults => {
                    let reportCollections = this.getReportCollections;
                    reportCollections.customers = customerResults.customers;
                    reportCollections.orders = orderResults.orders;
                    this.setReportCollections(reportCollections);
                    this.makeCustomerMap();
                });
            });
        },
        makeCustomerMap() {
            this.getReportCollections.customers.forEach(customer => {
                this.customers_by_id[customer.id] = customer;
            });
        }
    },
    computed: {
        ...mapGetters(["getReportCollections", "getReportCredentials"]),
        customersById() {
            let map = {};
            this.getReportCollections.customers.forEach(customer => {
                map[customer.id] = customer;
            });
            return map;
        },
        orders() {
            let orders = [];
            this.getReportCollections.orders.forEach(order => {
                let thisOrder = { ...order };
                thisOrder.date = new Date(order.closed_at).toLocaleString();
                thisOrder.customerEmailAddress = this.customersById[
                    order.customer_id
                ].email_address;
                thisOrder.amount = order.net_amounts.total_money.amount;
                orders.push(thisOrder);
            });
            return orders;
        }
    }
};
</script>
