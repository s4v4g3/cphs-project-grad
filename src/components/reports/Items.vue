<template>
    <v-container>
        <v-btn @click="refresh()">Refresh Data</v-btn>
        <br />

        <v-data-table
            :headers="headers"
            :items="items"
            :search="search"
            item-key="name"
            sort-desc
            show-expand
            single-expand
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
            <template v-slot:expanded-item="{ headers, item }">
                <td :colspan="headers.length">
                    <v-simple-table class="text-left ma-2">
                        <template v-slot:default>
                            <thead>
                                <tr>
                                    <th>Customer</th>
                                    <th>Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(detail,i) in item.details" :key="i">
                                    <td>{{detail.customerEmail}}</td>
                                    <td><div v-for="(option,j) in splitOptions(detail.options)" :key="j">{{option}}<br></div></td>
                                </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                </td>
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
            let customers = this.getReportCollections.customers;
            let orders = this.getReportCollections.orders;

            let itemMap = {};
            let itemTable = [];

            let customersById = {};
            customers.forEach(customer => {
                customersById[customer.id] = customer;
            });
            window.console.log(customersById);
            orders.forEach(order => {
                window.console.log(order.customer_id);

                order.line_items.forEach(lineItem => {
                    let itemName = lineItem.name;
                    if (
                        !Object.prototype.hasOwnProperty.call(itemMap, itemName)
                    ) {
                        itemMap[itemName] = [];
                    }
                    itemMap[itemName].push({
                        options: lineItem.note,
                        customerId: order.customer_id,
                        customer: customersById[order.customer_id],
                        customerEmail:
                            customersById[order.customer_id].email_address
                    });
                });
            });
            for (var itemName in itemMap) {
                let itemEntry = itemMap[itemName];
                itemTable.push({
                    name: itemName,
                    count: itemEntry.length,
                    details: itemEntry
                });
            }
            this.items = itemTable;
            this.headers = [
                { text: "Item", value: "name" },
                { text: "Count", value: "count" }
            ];
        },
        splitOptions(optString) {
            if (optString.includes("Text Line 1")) {
                let re = /Text Line 1: (.*), Text Line 2: (.*), Text Line 3: (.*)/g
                let res = re.exec(optString)
                window.console.log(res)
                return [res[1], res[2], res[3]]
            } else {
                return optString.split(',')
            }
        }
    },
    computed: {
        ...mapGetters(["getReportCollections", "getReportCredentials"])
    }
};
</script>
