import {Link} from "react-router-dom";
import ProductsList from "../components/ProductsList/ProductsList.jsx";

export default function HomePage() {
    return (
        <>
            <h1>HOME PAGE</h1>
            <Link to="/cart">Go to cart</Link>
            <ProductsList></ProductsList>
        </>
    )
}