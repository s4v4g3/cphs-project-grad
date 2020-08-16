<template>
    <v-container>
        <v-card>
            <v-row class="text-center">
                <v-col cols="12">
                    <v-img
                        :src="require('../assets/CPHS_PG2021.png')"
                        class="my-3"
                        contain
                        height="400"
                    />
                </v-col>

                <v-col class="mb-4">
                    <h1 class="display-2 font-weight-bold mb-3">Welcome to Project Grad 2021!</h1>
                    <h2>Celebrating and Honoring CPHS Seniors in the class of 2021</h2>
                </v-col>
                <v-col cols="12">
                    <mainCarousel :height="400" :items="carouselItems" />
                </v-col>
                
                

                <v-col class="mb-5" cols="12">
                    <h2 class="headline font-weight-bold mb-3">Links</h2>

                    <v-row justify="center">
                        <a
                            v-for="(next, i) in links"
                            :key="i"
                            :href="next.href"
                            class="subheading mx-3"
                        >{{ next.text }}</a>
                    </v-row>
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>

<script>
import mainCarousel from "../components/Carousel";
import { mapGetters } from "vuex";
export default {
    name: "Home",
    components: { mainCarousel },
    data: () => ({
        carouselItems: [],
        images: [
        ],
        links: [
            {
                text: "About Us",
                href: "/about"
            },
            {
                text: "Become a Sponsor",
                href: "/becomeASponsor"
            },
            {
                text: "2021 Sponsors",
                href: "/2021Sponsors"
            }
        ]
    }),
    created() {
        let products = this.getProducts
        this.carouselItems = [
            {
                image: require("../assets/Donate_Button_Transparent3.jpg"),
                link: "/DonateNow"
            }
        ];
        products.forEach((product) => {
            this.carouselItems.push({
                image: product.images[0],
                product: product
            })
        })
    },
    computed: {
        ...mapGetters(["getProducts"]),
    }
};
</script>
