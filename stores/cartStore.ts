export const useCartStore = defineStore('cart', {
    state: () => ({ 
        items: [],
    }),
    getters: {
        getCartCount(state){
            return state.items.length;
        },
        getCartItems(state){
            return state.items;
        },
        getCartTotal(state){
            let itemPrices = [];
            state.items.forEach(item => {
                itemPrices.push(item.unit_amount);
            });
            let sum = itemPrices.reduce((a, b) => a + b, 0);
            return (sum / 100).toFixed(2);
        }
    },
    actions: {
        addItemToCart(value){
            this.items.push(value);
        },
        removeItemFromCart(value){
            console.log(value);
        },
    },
  })
  