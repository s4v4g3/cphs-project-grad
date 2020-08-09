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
                    <h1 class="display-2 mb-3">Donations Link Coming Soon!</h1>
                    <h2>  (pending district approval)</h2>
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>
<script>
export default {
    name: "Donate",
    components: {},
    data: () => ({})
};
</script>