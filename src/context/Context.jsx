import { createContext, useContext, useReducer } from "react"
import { faker } from '@faker-js/faker';
import { cartReducer, productReducer } from './Reducers';
import { data } from "../assets/Data"
const Cart = createContext()
const Context = ({ children }) => {
    const products = data.map((value, index) => ({
        id: value.id,
        name: value.title,
        price: value.price,
        image: value.image,
        inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings: value.rating,
    }))

    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: []
    });
    const [productState, productDispatch] = useReducer(productReducer, {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: "",
    });

    return <Cart.Provider value={{ state, dispatch, productState, productDispatch }}> {children}</Cart.Provider >
}

export default Context

export const CartState = () => {
    return useContext(Cart)
}