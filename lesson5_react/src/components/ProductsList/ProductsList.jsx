import './index.css';
import {useGetProducts} from "../../hooks/useGetProducts.js";
import ProductCard from "../ProductCard/ProductCard.jsx";

export default function ProductsList() {
    const {data, isSuccess} = useGetProducts()

    return (
        <div className="products-list-container">
            {isSuccess ? data.map(({id, title, price, image, rating}, index) => {
                return <ProductCard key={index} productId={id} title={title} price={price} imageSrc={image}
                                    count={rating.count}/>
            }) : []}
        </div>
    )
}