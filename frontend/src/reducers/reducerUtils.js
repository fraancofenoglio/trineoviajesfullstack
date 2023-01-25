export const addItem = (cartItems, product) => {

    const present = cartItems.some(pres => pres.id === product.id);

    if (present) {

        cartItems.map((trip) => {
            if (trip.id === product.id) {
                trip.quantity++;
                
            } return cartItems = [...cartItems] // me daba error si no lo ponia
        })

    } else {
        cartItems = [...cartItems, product];
    }
    return cartItems = [...cartItems]
}

export const removeItem = (cartItems, id) => {

    return cartItems = cartItems.filter(cart => cart.id !== id)

}





