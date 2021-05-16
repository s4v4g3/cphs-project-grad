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
                    <h1 class="display-2 mb-3">A Little History...</h1>
                    <br />
                    <p
                        class="text-left"
                        v-for="(statement, index) in statements"
                        :key="index"
                    >
                        {{ statement }}
                    </p>
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>
<script>
export default {
    name: "History",
    components: {},
    data: () => ({
        statements: [
            "Project Celebration began as Project Graduation, originating in Maine during the 1970s in response to twelve teens who were killed in alcohol-related traffic crashes. Seven of those teens were from the same community. A group of parents, determined not to let alcohol ruin more lives, organized and hosted the original chemical-free alternative to the late- night partying that often accompanies senior celebrations. But the idea of all-night, chemical- free parties was not new—Oregon schools had been hosting parties like this for decades."],
    }),
};
</script>