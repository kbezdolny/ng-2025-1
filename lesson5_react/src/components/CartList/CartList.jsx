import './index.css'
import {useSelector} from "react-redux";
import CartItem from "../CartItem/CartItem.jsx";
import {useGetProducts} from "../../hooks/useGetProducts.js";

export default function CartList() {
    const cart = useSelector(state => state.cart);
    const {data, isSuccess} = useGetProducts();

    return (
        <>
            <h2>Items: {cart.productsQuantity}</h2>
            <h2>Total price: {cart.totalPrice}</h2>
            <div className="cart-container">
                {isSuccess ?
                    Object.keys(cart.products).map(index => {
                        const item = cart.products[index]
                        const dataItem = data[index - 1]
                        return (
                            <CartItem key={index} quantity={item.quantity} title={dataItem.title}
                                      price={dataItem.price} imageSrc={dataItem.image}/>
                        )
                    }) : []
                }
            </div>
        </>
    )
}