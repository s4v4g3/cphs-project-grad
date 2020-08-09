<template>
  <v-container>
    <v-card>
      <v-row class="text-center">
        <v-col cols="12">
          <v-img :src="require('../assets/CPHS_PG2021.png')" class="my-3" contain height="400" />
        </v-col>

        <v-col class="mb-4">
          <h1 class="display-2 font-weight-bold mb-3">Welcome to Project Grad 2021!</h1>
          <h2>Celebrating and Honoring CPHS Seniors in the class of 2021</h2>

            <router-link to="/DonateNow">
    <v-img :src="require('../assets/Donate_Button_Transparent3.jpg')" class="my-3" contain height="400" />
</router-link>
            

          <p class="subheading font-weight-regular">
            
            
          </p>
        </v-col>

        <v-col class="mb-5" cols="12">
          <h2 class="headline font-weight-bold mb-3">Links</h2>

          <v-row justify="center">
            <a
              v-for="(next, i) in links"
              :key="i"
              :href="next.href"
              class="subheading mx-3"
              target="_blank"
            >{{ next.text }}</a>
          </v-row>
        </v-col>

        
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    
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
  })
};
</script>
