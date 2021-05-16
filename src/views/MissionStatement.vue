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
                    <h1 class="display-2 mb-3">Mission Statement</h1>
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
    name: "MissionStatement",
    components: {},
    data: () => ({
        statements: [
            "Cedar Park High School Project Graduation is a program that  offers adult-supervised and alcohol-free activities for Senior students to celebrate graduation, as an alternative to student-run events involving alcoholic beverages or drugs. The Senior Sunset Celebration offers free food, music and door prizes for our 2021 Seniors.  The event concludes with a firework show.",
            "Project Graduation is a nationally recognized alcohol and drug free party sponsored by Proud Timberwolf  Parents, a non-profit, 501(c)3 tax exempt organization.  We do not receive any funding from the school or district’s budget. This event is dependent upon a strong partnership between business and community leaders, parents, law enforcement, and school officials for fundraising, volunteerism, and logistical support and is 100% donation and volunteer based.",
            "Project Graduation is designed to give high school graduates a safe alternative to celebrating their special accomplishment.  Statistics have shown that students celebrating graduation can experience one of the most dangerous nights of their young lives.",
        ],
    }),
};
</script>