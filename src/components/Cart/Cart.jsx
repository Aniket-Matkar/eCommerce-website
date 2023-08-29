import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import Cartitem from "./CartItem/CartItem"
import "./Cart.scss";
const Cart = ({setShowCart}) => (
    <div className="cart-panel">
        <div className="opac-layer" onClick={() => setShowCart(false)}></div>
        <div className="cart-content">

            <div className="cart-header">
                <span className="heading">Shopping Cart</span>
                <span className="close-btn"></span>
                <MdClose />
                <span className="text" onClick={() => setShowCart(false)}>Close</span>
            </div>

            {/* <div className="empty-cart">
                <BsCartX />
                <span>No products in the Cart.</span>
                <button className="return-cta" onClick={() => setShowCart(false)}>RETURN TO SHOP</button>
            </div> */}

            <>
                <Cartitem/>
                <div className="cart-footer">
                    <div className="subtotal">
                        <span className="text">Subtotal:</span>
                        <span className="text total">&#8377;2999</span>
                    </div>
                    <div className="button">
                        <button className="checkout-cta">Checkout</button>
                    </div>
                </div>
                
            </>
        </div>

    </div>
);

export default Cart;
