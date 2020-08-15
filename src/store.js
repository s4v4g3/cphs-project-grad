import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        products: [
            {
                id: 1000,
                name: 't-shirt',
                displayName: "T-Shirt",
                caption: "Available in White, Teal, Grey, Pink, and Timberwolf Green",
                price: '25',
                images: [
                    require("./assets/white_t_shirt.png"),
                    require("./assets/pink_t_shirt.png"),
                    require("./assets/grey_t_shirt.png"),
                    require("./assets/green_t_shirt.png"),
                    require("./assets/teal_t_shirt.png")
                ],
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
                displayName: "Commemorative Bricks",
                caption: "Secure your place in history",
                price: '50',
                images: [require("./assets/brick.jpg")],
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
                displayName: "Yard Signs",
                caption: "Show off your school spirit to your neighbors",
                price: '25',
                images: [require("./assets/yard_sign_2021.jpg")],
                availableOptions: []
            },
            {
                id: 1004,
                name: 'flag',
                displayName: "Timberwolf Flag",
                caption: "Pool not included",
                price: '20',
                images: [require("./assets/flag.jpg")],
                availableOptions: []
            },
            {
                id: 1005,
                name: 'facemask',
                displayName: "Timberwolf Face Mask",
                caption: "Available with large or small logo",
                price: '10',
                images: [require("./assets/face_mask_1.png"),
                require("./assets/face_mask_2.png")],
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
                price: '10',
                images: [require("./assets/gator_1.png"),
                require("./assets/gator_2.png")],
                availableOptions: [{
                    name: "Color",
                    type: "Selection",
                    options: ["Green", "Camo"]
                }]
            },
        ],

        cartProducts: [],
        currentProduct: {},
        showModal: false,
        showPopupCart: false,
    },

    getters: {
        getProducts: state => state.products,
        getSmartphones: state => state.smartphones,
        getAllProducts: state => state.notebooks.concat(state.smartphones),
        getProductsInCart: state => state.cartProducts,
        getCurrentProduct: state => state.currentProduct,
        getShowModal: state => state.showModal,
        getPopupCart: state => state.showPopupCart,
    },

    mutations: {
        ADD_PRODUCT: (state, product) => {
            state.cartProducts.push(product);
        },
        REMOVE_PRODUCT: (state, index) => {
            state.cartProducts.splice(index, 1);
        },
        CURRENT_PRODUCT: (state, product) => {
            state.currentProduct = product;
        },
        SHOW_MODAL: (state) => {
            state.showModal = !state.showModal;
        },
        SHOW_POPUP_CART: (state) => {
            state.showPopupCart = !state.showPopupCart;
        },
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
        showOrHiddenModal: (context) => {
            context.commit('SHOW_MODAL');
        },
        showOrHidePopupCart: (context) => {
            context.commit('SHOW_POPUP_CART');
        },
    },
});
