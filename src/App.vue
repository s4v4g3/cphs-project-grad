<template>
    <v-app>
        <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app>
            <v-list dense nav class="py-0">
                <v-list-item two-line :class="miniVariant && 'px-0'">
                    <v-list-item-avatar>
                        <img :src="require('./assets/logo.png')" />
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title>Cedar Park High School</v-list-item-title>
                        <v-list-item-subtitle>Project Graduation</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>

                <v-list-item link to="/">
                    <v-list-item-icon>
                        <v-icon>mdi-home</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>Home</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item link to="/about">
                    <v-list-item-icon>
                        <v-icon>mdi-help-circle</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>About Us</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item link to="/store">
                    <v-list-item-icon>
                        <v-icon>mdi-cart</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>Store</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item link to="/MissionStatement">
                    <v-list-item-icon>
                        <v-icon>mdi-file-document</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>Mission Statement</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item link to="/History">
                    <v-list-item-icon>
                        <v-icon>mdi-history</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>History</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item link to="/2021Sponsors">
                    <v-list-item-icon>
                        <v-icon>mdi-account-heart</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>2021 Sponsors</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item link to="/becomeASponsor">
                    <v-list-item-icon>
                        <v-icon>mdi-charity</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>Become a Sponsor</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                

                
            </v-list>
        </v-navigation-drawer>

        <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="#215027" dark>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
            <div class="d-flex align-center">
                <v-img
                    alt="Vuetify Logo"
                    class="shrink mr-2"
                    contain
                    :src="require('./assets/logo.png')"
                    transition="scale-transition"
                    width="40"
                />CPHS Project Graduation
            </div>

            <v-spacer></v-spacer>

            <btn
                btnColor="btn btn-small btn-info btn-popup"
                :cartIcon="true"
                @click.native="showPopupCart()"
            >
                Cart
                <span class="btn-circle" v-if="hasProduct()">{{ getProductsInCart.length }}</span>
            </btn>
        </v-app-bar>

        <v-content>
            <v-snackbar
                color="success"
                v-model="snackbar"
                :timeout="4000"
                :top="true"
            >{{nameOfLastProductAdded}} Added to Cart!</v-snackbar>
            <router-view></router-view>
        </v-content>

        <v-footer app>
            <span>&copy; 2020</span>
        </v-footer>

        <cart v-model="showCart" />
    </v-app>
</template>
<script>
import btn from "./components/Btn";
import cart from "./components/Cart";
import { mapGetters, mapActions } from "vuex";
export default {
    name: "App",

    components: { btn, cart },

    data: () => ({
        drawer: null,
        miniVariant: false,
        showCart: false,
        snackbar: false,
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
    watch: {
        productAdded: function(newValue) {
            window.console.log("watch productAdded!");
            if (newValue) {
                this.snackbar = true;
                this.acknowledgeProductAdded();
            }
        }
    },
    methods: {
        ...mapActions(["acknowledgeProductAdded"]),
        hasProduct() {
            return this.getProductsInCart.length > 0;
        },
        showPopupCart() {
            window.console.log("showPopupCart!");
            this.showCart = true;
            this.getProductsInCart.forEach(item => {
                let product = this.getProducts.find(
                    product => product.id == item.id
                );
                window.console.log(product.name);
                item.selectedOptions.forEach(opt => {
                    window.console.log(`${opt.name}: ${opt.value}`);
                });
            });
        }
    },
    computed: {
        ...mapGetters([
            "getProductsInCart",
            "getPopupCart",
            "getProducts",
            "onProductAdded",
            "getNameOfLastProductAdded"
        ]),
        productAdded: function() {
            return this.onProductAdded;
        },
        nameOfLastProductAdded: function() {
            return this.getNameOfLastProductAdded;
        }
    }
};
</script>
<style lang="scss">
.btn-circle {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: #fff;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
