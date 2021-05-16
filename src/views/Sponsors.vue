<template>
    <v-container fluid class="text-center">
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
            </v-row>
            <v-row>
                <v-col class="mb-4">
                    <h1 class="display-2 mb-3">Sponsors</h1>
                    <br />
                    <v-row>
                        <v-col
                            v-for="(sponsor, index) in sponsors"
                            :cols="2"
                            :key="index"
                        >
                            <v-card :href="sponsor.link" target="_blank">
                                <v-img
                                    :src="sponsor.image"
                                    class="white--text align-end"
                                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                                    height="200px"
                                >
                                    <v-card-title v-text="sponsor.name">
                                        
                                    </v-card-title>
                                </v-img>
                            </v-card>
                        </v-col>
                        <!--
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>{{sponsor.name}}</v-list-item-title>
                                </v-list-item-content>

                                <v-list-item-avatar>
                                    <v-img :src="sponsor.image"></v-img>
                                </v-list-item-avatar>
                            </v-list-item>
                            -->
                    </v-row>
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>
<script>
export default {
    name: "Sponsors",
    components: {},
    data: () => ({
        sponsors: [
            {
                name: "Nicole Beailieu",
                image: require("@/assets/nicole_bjpg.jpg"),
            },
            {
                name: "The Bealle Family",
                image: require("@/assets/gary_guynes.gif"),
            },
            {
                name: "Marc Digby",
                image: require("@/assets/marc_digby.jpg"),
            },
            {
                name: "Gary Guynes",
                image: require("@/assets/gary_guynes.gif"),
            },
            {
                name: "Dale McPherson",
                image: require("@/assets/dale_mcpherson.jpg"),
            },
            {
                name: "Mungia Real Estate",
                image: require("@/assets/mungia_real_estate.jpg"),
                link: "https://www.mungiarealestate.com/",
            },
            {
                name:
                    "Cedar Park High School PTSA",
                image: require("@/assets/ptsa_logo.jpg"),
                link: "http://cphs.my-pta.org/"
            },
        ],
    }),
};
</script>