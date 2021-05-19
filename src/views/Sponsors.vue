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
                <v-col class="ma-4">
                    <h1 class="display-2 mb-3">Sponsors</h1>
                    <br />
                    <v-row>
                        <v-col
                            v-for="(sponsor, index) in sponsors"
                            :cols="2"
                            :key="index"
                        >
                            <v-card :href="sponsor.link" target="_blank">
                                <v-img :contain="sponsor.containImage"
                                    :src="sponsor.image"
                                    class="white--text align-end"
                                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                                    height="200px"
                                >
                                    <v-card-title v-text="sponsor.name">
                                    </v-card-title>
                                    <v-card-subtitle class="white--text text-left" v-text="sponsor.subtitle" />
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
                subtitle: "",
                image: require("@/assets/nicole_bjpg.jpg"),
                containImage: false
            },
            {
                name: "Mr. B Tutoring",
                subtitle: "512-971-1141 rhois.002378@sbcglobal.net",
                image: require("@/assets/mr_b_tutoring.png"),
                link: "mailto:rhois.002378@sbcglobal.net",
                containImage: true
            },
            {
                name: "Marc Digby",
                subtitle: "",
                image: require("@/assets/marc_digby.jpg"),
                containImage: false
            },
            {
                name: "Gary Guynes",
                subtitle: "",
                image: require("@/assets/gary_guynes.gif"),
                containImage: true
            },
            {
                name: "Dale McPherson",
                subtitle: "",
                image: require("@/assets/dale_mcpherson.jpg"),
                containImage: false
            },
            {
                name: "Mungia Real Estate",
                subtitle: "mungiarealestate.com",
                image: require("@/assets/mungia_real_estate.jpg"),
                link: "https://www.mungiarealestate.com/",
                containImage: false
            },
            {
                name:
                    "Cedar Park HS PTSA",
                    subtitle: "cphs.my-pta.org",
                image: require("@/assets/ptsa_logo.jpg"),
                link: "http://cphs.my-pta.org/",
                containImage: true
            },
            {
                name:
                    "Rudy's Country Store & BBQ",
                    subtitle: "rudysbbq.com",
                image: require("@/assets/rudys.png"),
                link: "https://rudysbbq.com/",
                containImage: true
            },
        ],
    }),
};
</script>