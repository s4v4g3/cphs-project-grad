<template>
    <v-container>
        <v-row class="text-center">
                <v-col class="mb-4" cols="12">
                    <h2 class="display-2  mb-2">Store will be online soon!</h2>
                    <h3>  (pending district approval)</h3>
                </v-col>
            </v-row>
        <v-row>
            <v-col v-for="(item,i) in items" :key="i">
                <v-card class="mx-auto" max-width="500">
                    <v-img :src="item.src" ></v-img>

                    <v-card-title>{{item.name}}</v-card-title>

                    <v-card-subtitle>{{item.subtitle}}</v-card-subtitle>

                    <v-card-actions>
                        <v-btn text>{{item.price}}</v-btn>

                        <v-btn color="purple" text>Add to Cart</v-btn>

                        <v-spacer></v-spacer>

                        <v-btn icon @click="show = !show">
                            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    name: "store",
    components: {},
    data: () => ({
        items: [
            {
                name: "T-Shirts",
                subtitle: "Sizes: S, M, L, XL, XXL, and XXXL",
                src: require("../assets/t_shirt.jpg"),
                price: "$19.99"
            },
            {
                name: "Yard Signs",
                subtitle: "Toilet Paper Not Included",
                src: require("../assets/yard_sign.jpg"),
                price: "$39.99"
            }
            ,
            {
                name: "Bricks",
                subtitle: "Build yourself a brick house",
                src: require("../assets/brick.jpg"),
                price: "$39.99"
            },
            {
                name: "Face Masks",
                subtitle: "Protect yourself from COVID",
                src: require("../assets/facemask.jpg"),
                price: "$39.99"
            }
        ]
    })
};
</script>