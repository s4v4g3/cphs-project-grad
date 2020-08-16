import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

function getProductPrice(state, cartItem) {
    window.console.log("state")
    window.console.log(state)
    window.console.log("cartItem:")
    window.console.log(cartItem)
    let price = state.products.find(item => item.id == cartItem.id).price
    if (price == 0) {
        // assume first option is price
        price = cartItem.selectedOptions[0].value
    }
    return price
}

function getProductName(state, pid) {
    return state.products.find(item => item.id == pid).displayName
}

function getSubtotal(state) {
    let subtotal = state.cartProducts.reduce(
        (current, next) => current + getProductPrice(state, next),
        0
    );
    return subtotal
}

function getTotalPrice(state) {
    let subtotal = getSubtotal(state)
    let discount = getBundleDiscountAndBonus(state).discount
    return subtotal - discount
}

function getBundleDiscountAndBonus(state) {
    
    let discount = 0
    let bonuses = []
    let awards = []
    let cartItemIds = state.cartProducts.map(item => item.id)
    let bundleFound = true
    while(bundleFound) {
        bundleFound = false

        for (let i=0; i<state.bundles.length; ++i) {
            let bundle = state.bundles[i];
            if (bundle.items.every(elem => cartItemIds.indexOf(elem) > -1)) {
                bundleFound = true
                awards.push({
                    discount: bundle.discount,
                    bonus: bundle.bonus,
                    name: bundle.name
                })
                discount += bundle.discount
                if (bundle.bonus != null)  bonuses.push(bundle.bonus)
                // remove items from cartItemIds
                bundle.items.forEach(item => {
                    const index = cartItemIds.indexOf(item)
                    cartItemIds.splice(index, 1)
                })
                break 
            }
        }
        if (!bundleFound) { break }
    }
    let award = {
        discount: discount,
        bonuses: bonuses,
        awards: awards
    }
    return award
}

export default new Vuex.Store({
    plugins: [createPersistedState(
        {paths:["cartProducts"]}
    )],
    state: {
        bundles: [
            {
                name: "Super Senior Tile Bonus",
                items: [1000, 1003, 1005, 1006, 1001],
                discount: 20,
                bonus: 'Granite Coaster'
            },
            {
                name: "Senior Bundle",
                items: [1000, 1003, 1005, 1006],
                discount: 20,
                bonus: null
            }
            
        ],
        products: [
            {
                id: 1000,
                name: 't-shirt',
                displayName: "Senior T-Shirt",
                caption: "Available in White, Teal, Grey, Pink, and Timberwolf Green",
                price: 25,
                images: [
                    require("./assets/white_t_shirt.png"),
                    require("./assets/pink_t_shirt.png"),
                    require("./assets/grey_t_shirt.png"),
                    require("./assets/green_t_shirt.png"),
                    require("./assets/teal_t_shirt.png")
                ],
                imageHeight: 800,
                availableOptions: [
                    {
                        name: "Color",
                        type: "Selection",
                        options: ["Green", "Pink", "Grey", "White", "Teal"]
                    },
                    {
                        name: "Size",
                        type: "Selection",
                        options: ["S", "M", "L", "XL", "XXL", "XXXL"]
                    }
                ]
            },
            {
                id: 1001,
                name: 'brick',
                displayName: "Commemorative Brick",
                caption: "Secure your place in history",
                price: 50,
                images: [require("./assets/brick.jpg")],
                imageHeight: 800,
                availableOptions: [
                    {
                        name: "Text Line 1",
                        type: "Text",
                        charLimit: 20
                    },
                    {
                        name: "Text Line 2",
                        type: "Text",
                        charLimit: 20
                    }
                    ,
                    {
                        name: "Text Line 3",
                        type: "Text",
                        charLimit: 20
                    }
                ]
            },
            {
                id: 1003,
                name: 'yardsign',
                displayName: "Yard Sign",
                caption: "Show off your school spirit to your neighbors",
                price: 25,
                images: [require("./assets/yard_sign_2021.jpg")],
                imageHeight: 400,
                availableOptions: []
            },
            {
                id: 1004,
                name: 'flag',
                displayName: "Timberwolf Flag",
                caption: "Pool not included",
                price: 20,
                images: [require("./assets/flag.jpg")],
                imageHeight: 400,
                availableOptions: []
            },
            {
                id: 1005,
                name: 'facemask',
                displayName: "Timberwolf Face Mask",
                caption: "Available with large or small logo",
                price: 10,
                images: [require("./assets/face_mask_1.png"),
                require("./assets/face_mask_2.png")],
                imageHeight: 400,
                availableOptions: [{
                    name: "Style",
                    type: "Selection",
                    options: ["Large Logo", "Small Logo"]
                }]
            },
            {
                id: 1006,
                name: 'gaiter',
                displayName: "Timberwolf Gaiter",
                caption: "Available in Green or Camo",
                price: 10,
                images: [require("./assets/gator_1.png"),
                require("./assets/gator_2.png")],
                imageHeight: 400,
                availableOptions: [{
                    name: "Color",
                    type: "Selection",
                    options: ["Green", "Camo"]
                }]
            },
            {
                id: 1007,
                name: 'jersey',
                displayName: "Senior Jersey",
                caption: "Only available until 8/25/2020!",
                price: 25,
                images: [require("./assets/jersey.jpg")],
                imageHeight: 400,
                availableOptions: []
            },
            {
                id: 1008,
                name: 'donation',
                displayName: "Sponsor a Senior",
                caption: "Make a donation to Project Graduation",
                price: 0,
                images: [require("./assets/Donate_Button_Transparent3.jpg")],
                imageHeight: 400,
                availableOptions: [{
                    name: "Donation Amount",
                    type: "NumericSlider",
                    min: 5,
                    max: 5000,
                    options: [20,50,100,250,500,1000]
                }]
            },
        ],

        cartProducts: [],
        currentProduct: {},
        triggerProductAdded: false,
        nameOfLastProductAdded: ''
    },

    getters: {
        getProducts: state => state.products,
        getProductsInCart: state => state.cartProducts,
        getCurrentProduct: state => state.currentProduct,
        getItemPrice: state => (item) => { return getProductPrice(state, item) },
        getTotalPrice: state => getTotalPrice(state),
        getSubtotal: state => getSubtotal(state),
        getBundleDiscountAndBonus: state => getBundleDiscountAndBonus(state),
        onProductAdded: state => state.triggerProductAdded,
        getNameOfLastProductAdded: state => state.nameOfLastProductAdded
    },

    mutations: {
        ADD_PRODUCT: (state, product) => {
            state.cartProducts.push(product);
            state.triggerProductAdded = true
            state.nameOfLastProductAdded = getProductName(state, product.id)
        },
        REMOVE_PRODUCT: (state, index) => {
            state.cartProducts.splice(index, 1);
        },
        CURRENT_PRODUCT: (state, product) => {
            state.currentProduct = product;
        },
        ACKNOWLEDGE_PRODUCT_ADDED: (state) => {
            state.triggerProductAdded = false
        }
    },

    actions: {
        addProduct: (context, product) => {
            context.commit('ADD_PRODUCT', product);
        },
        removeProduct: (context, index) => {
            context.commit('REMOVE_PRODUCT', index);
        },
        currentProduct: (context, product) => {
            context.commit('CURRENT_PRODUCT', product);
        },
        acknowledgeProductAdded: (context) => {
            context.commit('ACKNOWLEDGE_PRODUCT_ADDED');
        },
    },
});
