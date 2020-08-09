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
                    <h1 class="display-2 font-weight-bold mb-3">Officers</h1>
                    <p
                        v-for="officer in officers"
                        :key="officer"
                        style="text-align: center;"
                        data-mce-style="text-align: center;"
                    >
                        <span
                            style="color: rgb(102, 102, 153); font-size: 18pt; line-height: normal;"
                        >
                            <strong>{{ officer}}</strong>
                        </span>
                    </p>
                </v-col>
                <v-col class="mb-4">
                    <h1>Email</h1>
                    <h2>
                        <a href="mailto:CPHSProjGrad2021@gmail.com">CPHSProjGrad2021@gmail.com</a>
                    </h2>
                    <br/>
                    <h1>Facebook</h1>
                    <h2>
                        <a href="https://www.facebook.com/CPHSprojectgraduation2021/">@cphsprojectgraduation2021</a>
                    </h2>
                    </v-col>
                <v-col class="mb-4">
                    <h1>Instagram</h1>
                    <h2>
                        <a href="https://www.instagram.com/cphsprojgrad2021/">@cphsprojectgrad2021</a>
                    </h2>
                    <br/>
                    <h1>Mailing Address</h1>
                    <h3>
                        <p>CPHS Project Graduation<br/>
                        1841 S. Lakeline Blvd., Ste.101, Box 201<br/>
                        Cedar Park, TX 78613</p>
                    </h3>
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>
<script>
// @ is an alias to /src

export default {
    name: "About",
    components: {},
    data: () => ({
        officers: [
            "Darren McDaniel",
            "Katie Cole",
            "Debi Adamski",
            "Ray Mungia",
            "Nikki Cheek",
            "Renee Savage",
            "Travis Williamson",
            "Dawn Pannell",
            "Heather Claybrook",
            "Tracy Smith",
            "Erica Hynds",
            "Brianna Darcey",
            "Tricia Motz"
        ]
    })
};
</script>
