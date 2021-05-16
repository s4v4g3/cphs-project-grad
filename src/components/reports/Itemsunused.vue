<template>
    <v-container>
        <v-btn @click="refresh()">Refresh Data</v-btn>
        <br />

        <v-simple-table>
            <template v-slot:default>
                <thead>
                    <tr>
                        <th v-for="header in headers" :key="header">{{header.text}}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in items" :key="item.email">
                        <td v-for="header in headers" :key="header.text">{{item[header.value]}}</td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>

        <v-data-table
            :headers="headers"
            :items="items"
            :search="search"
            sort-desc
            class="elevation-1 ma-2"
        >
            <template v-slot:top>
                <v-toolbar flat>
                    <v-toolbar-title>Items</v-toolbar-title>
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
        </v-data-table>
    </v-container>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { queryDb } from "../../backend";
export default {
    name: "items",
    components: {},
    data: () => ({
        credentials: null,
        search: null,
        headers: [],
        items: []
    }),
    created() {
        this.credentials = this.getReportCredentials;
        this.makeTable();
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
                    this.makeTable();
                });
            });
        },
        makeTable() {
            let customerMap = {};
            let itemNames = new Set();
            let customers = this.getReportCollections.customers;
            let orders = this.getReportCollections.orders;
            customers.forEach(customer => {
                let customerOrders = orders.filter(order =>
                    customer.order_ids.includes(order.id)
                );
                let customerItems = {};
                customerOrders.forEach(order => {
                    order.line_items.forEach(lineItem => {
                        itemNames.add(lineItem.name);
                        if (
                            !Object.prototype.hasOwnProperty.call(
                                customerItems,
                                lineItem.name
                            )
                        ) {
                            customerItems[lineItem.name] = {
                                quantity: 0,
                                options: []
                            };
                        }
                        customerItems[lineItem.name].quantity += 1;
                        customerItems[lineItem.name].options.push(
                            lineItem.note
                        );
                    });
                });
                customerMap[customer.email_address] = customerItems;
            });
            this.headers = [{ text: "Customer Email", value: "email" }];
            itemNames.forEach(itemName => {
                this.headers.push({ text: itemName, value: itemName });
            });
            this.items = [];
            for (let email in customerMap) {
                let itemDetails = customerMap[email];
                let itemText = {};
                for (let key in itemDetails) {
                    let item = itemDetails[key];
                    itemText[key] =
                        `Quantity: ${item.quantity}\n` +
                        item.options.join("\n");
                }
                this.items.push({ email: email, ...itemText });
            }
        }
    },
    computed: {
        ...mapGetters(["getReportCollections", "getReportCredentials"])
    }
};
</script>
