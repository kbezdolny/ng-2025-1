import './index.css'

export default function CartItem({quantity, imageSrc, title, price}) {

    return (
        <>
            <div className="cart-item">
                <img src={imageSrc} alt="product image"/>
                <h4 className="cart-item__title">{title}</h4>
                <div className="cart-item__info">
                    <p>{price}$</p>
                    <p>quantity: {quantity}</p>
                </div>
            </div>
        </>
    )
}