import {Link} from "react-router-dom";
import CartList from "../components/CartList/CartList.jsx";

export default function CartPage() {
    return (
        <>
            <h1>CART PAGE</h1>
            <Link to="/">Go home</Link>
            <CartList/>
        </>
    )
}