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
                    <h1 class="display-2 mb-3">Become a Sponsor</h1>
                    <br />
                    <p
                        class="text-left"
                    >
                        Project Grad does reach out for corporate donations to help fill the gap however this year has been very challenging obtaining Corporate Sponsors. If you, your family, or your family would like to donate, here are the different levels.
<br/>
<br/>
<b>Levels of Sponsorships:</b>
        <ul>
            <li>Platinum Level ($1000 and above)</li>

          <li>Gold Level ($500-$999)</li>

           <li>Silver Level ($250-$499) </li>

           <li>Bronze Level ($100-$249)</li>

           <li>Green Level (up to $100)</li>
        </ul>
<br/>
You can donate right from our website by clicking the GIANT RED DONATION BUTTON <v-btn
                    color="purple"
                    text
                    to="/store"
                >Donate Now!</v-btn>
<br/>
<br/>
Those donating $250 or more will be honored on our Facebook page as soon as the donation is received & listed on our website.  If we can, we will feature Platinum, Gold, & Silver sponsors at the Cedar Park graduation on the Jumbotron.  With COVID we may be restricted from recognizing sponsors.
<br/>
<br/>
<i>
All sponsors, naming, and logos must adhere to LISD Board Policy and should not include the promotion of alcohol, tobacco, firearms, religious nor political organizations.</i>
<br/>

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
    data: () => ({}),
};
</script>