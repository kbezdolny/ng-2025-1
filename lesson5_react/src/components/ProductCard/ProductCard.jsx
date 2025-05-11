import './index.css';
import {useActions} from "../../hooks/useActions.js";

export default function ProductCard({ productId, imageSrc, title, price, count }) {
    const actions = useActions();

    const handleAddProduct = () => {
        actions.addProduct({id: productId, quantity: 1, price: price});
    }

    return (
        <div className="product-card">
            <img src={imageSrc} alt="product image" />
            <h4 className="product-card__title">{title}</h4>
            <div className="product-card__info">
                <p>{price}$</p>
                <p>quantity: {count}</p>
            </div>
            <button className="product-card__button" onClick={handleAddProduct}>Add to cart</button>
        </div>
    )
}