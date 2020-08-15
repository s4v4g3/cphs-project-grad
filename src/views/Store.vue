<template>
    <v-container fluid>
        <v-row class="text-center">
                <v-col class="mb-4" cols="12">
                    <h2 class="display-2  mb-2">Store will be online soon!</h2>
                    <h3>  (pending district approval)</h3>
                </v-col>
            </v-row>
        <v-row>
            <v-col v-for="(item,i) in items" :key="i" :cols="12/itemsPerRow">
                <v-card class="mx-auto" max-width="500">
                    <v-img v-if="item.src.length == 1" :src="item.src[0]" :height="item.height"></v-img>
                    <v-carousel v-else
                        :cycle="false"
                        :height="item.height"
                        :hide-delimiter-background="true"
                        show-arrows-on-hover
                    >
                    <v-carousel-item
                        v-for="(image,i) in item.src"
                        :key="i"
                        :src="image"
                        reverse-transition="fade-transition"
                        transition="fade-transition"
                        ></v-carousel-item>
                    </v-carousel>

                    <v-card-title>{{item.name}}</v-card-title>

                    <v-card-subtitle>{{item.subtitle}}</v-card-subtitle>

                    <v-card-actions>
                        <v-btn text>{{item.price}}</v-btn>

                        <v-btn color="purple" text @click.stop="dialog = true">Add to Cart</v-btn>

                        <v-spacer></v-spacer>

                        <v-btn v-if="false" icon @click="show = !show">
                            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        <v-dialog
      v-model="dialog"
      max-width="320"
    >
      <v-card>
        <v-card-title class="headline">Sorry, we're not open yet!</v-card-title>

        <v-card-text>
          We're not quite ready to sell you anything just yet.  Please check back with us in a bit!
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Okay
          </v-btn>

          
        </v-card-actions>
      </v-card>
        </v-dialog>
    </v-container>
</template>
<script>
export default {
    name: "store",
    components: {},
    data: () => ({
        dialog: false,
        show: false,
        items: [
            {
                name: "T-Shirts",
                subtitle: "Available in White, Teal, Grey, Pink, and Timberwolf Green",
                src: [require("../assets/white_t_shirt.png"), 
                    require("../assets/pink_t_shirt.png"),
                    require("../assets/grey_t_shirt.png"),
                    require("../assets/green_t_shirt.png"),
                    require("../assets/teal_t_shirt.png")
                    ],
                height: 800,
                price: "$19.99"
            },
            {
                name: "Bricks",
                subtitle: "Secure your place in history",
                src: [require("../assets/brick.jpg")],
                height: 800,
                price: "$39.99"
            },
            {
                name: "Yard Signs",
                subtitle: "Show off your school spirit to your neighbors",
                src: [require("../assets/yard_sign_2021.jpg")],
                height: 400,
                price: "$39.99"
            },
            {
                name: "Timberwolf Flag",
                subtitle: "Pool not included",
                src: [require("../assets/flag.jpg")],
                height: 400,
                price: "$39.99"
            },
            {
                name: "Timberwolf Face Masks",
                subtitle: "Available with large or small logo",
                src: [require("../assets/face_mask_1.png"), require("../assets/face_mask_2.png")],
                height: 400,
                price: "$39.99"
            },
            {
                name: "Timberwolf Gator",
                subtitle: "Available in Green or Camo",
                src: [require("../assets/gator_1.png"), require("../assets/gator_2.png")],
                height: 400,
                price: "$39.99"
            }
        ]
    }),
    computed: {
        itemsPerRow: function() {
            return this.$vuetify.breakpoint.width > 1000 ? 2 : 1
        }
    }
};
</script>
<style lang="scss">
</style>