<template>
    <v-container>
        <v-btn @click="refresh()">Refresh Data</v-btn>
        <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
        ></v-text-field>
        <v-data-table
            :headers="headers"
            :items="customers"
            :search="search"
            show-expand
            class="elevation-1"
        >
            <template v-slot:item.orders="{ item }">{{ item.orders.length }}</template>
            <template v-slot:expanded-item="{ headers, item }">
                <td :colspan="headers.length">
                    <v-card class="ma-4" v-for="(order,i) in item.orders" :key="i">
                        <v-card-title>Order on {{(new Date(order.closed_at)).toString('en-US')}}</v-card-title>
                        <v-simple-table>
                            <template v-slot:default>
                                <thead>
                                    <tr>
                                        <th class="text-left">Name</th>
                                        <th class="text-left">Quantity</th>
                                        <th class="text-left">Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="text-left" v-for="(lineItem,j) in order.items" :key="j">
                                        <td>{{ lineItem.name }}</td>
                                        <td>1</td>
                                        <td><div v-for="(option,k) in lineItem.options" :key="k">{{option.option}}: {{option.value}}<br></div></td>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </v-card>
                </td>
            </template>
        </v-data-table>
    </v-container>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { queryDb } from "../../backend";
export default {
    name: "customers",
    components: {},
    data: () => ({
        credentials: null,
        customers: [],
        search: null,
        headers: [
            { text: "E-mail", value: "email_address" },
            { text: "Last Name", value: "family_name" },
            { text: "First Name", value: "given_name" },
            { text: "Phone", value: "phone_number" },
            { text: "Number of Orders", value: "orders" }
        ]
    }),
    created() {
        this.credentials = this.getReportCredentials;
        this.linkOrdersToCustomers();
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
                    this.linkOrdersToCustomers();
                });
            });
        },
        linkOrdersToCustomers() {
            let reportCollections = this.getReportCollections;
            this.customers = [];
            reportCollections.customers.forEach(customer => {
                let record = { ...customer };
                record.orders = reportCollections.orders.filter(order =>
                    customer.order_ids.includes(order.id)
                );
                this.customers.push(record);
            });
            window.console.log(this.customers);
        },
        getCustomerOrders(customer) {
            window.console.log(customer);
            return customer.orders;
        }
    },
    computed: {
        ...mapGetters(["getReportCollections", "getReportCredentials"])
    }
};
</script>
