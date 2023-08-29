import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import "./Header.scss";
import Search from "./Search/Search";
import { Context } from "../../utils/context";
import Cart from "../Cart/Cart";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [searchModal, setSearchModal] = useState(false);
    const [cart, setShowCart] = useState(false);
    
    const navigate = useNavigate();

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    // const { cartCount, showCart, setShowCart } = useContext(Context);

    return (
        <>
            <header
                className={`main-header ${scrolled ? "sticky-header" : ""}`}
            >
                <div className="header-content">
                    <ul className="left">
                        <li onClick={()=>{navigate("/")}} >Home</li>
                        <li>About</li>
                        <li>Categories</li>
                    </ul>
                    <div className="center">
                        <p onClick={()=>{navigate("/")}} >GODSON</p>
                    </div>
                    <div className="right">
                        <TbSearch  onClick={()=>setSearchModal(true)}/>
                        <AiOutlineHeart />
                        <span className="cart-icon" onClick={()=>setShowCart(true)}>
                            <CgShoppingCart />
                        </span>
                    </div>
                </div>
            </header>
            {cart && <Cart setShowCart={setShowCart} />}
            { searchModal && <Search setSearchModal={setSearchModal}/>}
        </>
    );
};

export default Header;