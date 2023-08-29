import RelatedProducts from "./RelatedProducts/RelatedProducts";
import { getProductsData } from "../Products/ProductAPI"
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus,
} from "react-icons/fa";
import "./SingleProduct.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";



const SingleProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
  
    useEffect(() => {
      const products = getProductsData();
      const selectedProduct = products.find((p) => p.id === parseInt(id));
      setProduct(selectedProduct);
    }, [id]);
  
    if (!product) {
      return <div>!!! Product bethet nahi aahe !!!</div>;
    }

    const type = product.type;

    return (
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page" >
                    <div className="left">
                        <img src={product.image} alt="" />
                    </div>
                    <div className="right">
                        <span className="name">{product.title}</span>
                        <span className="price">"{product.price}</span>
                        <span className="desc">{product.description}</span>

                        <div className="cart-buttons">
                            <div className="quantity-buttons">
                                <span >-</span>
                                <span>1</span>
                                <span>+</span>
                            </div>
                            <button className="add-to-cart-button">
                                <FaCartPlus size={20} />
                                ADD TO CART
                            </button>
                        </div>

                        <span className="divider" />
                        <div className="info-item">
                            <span className="text-bold">
                                Category:
                                <span>
                                    Gadgets
                                </span>
                            </span>
                            <span className="text-bold">
                                Share:
                                <span className="social-icons">
                                    <FaFacebookF size={16} />
                                    <FaTwitter size={16} />
                                    <FaInstagram size={16} />
                                    <FaLinkedinIn size={16} />
                                    <FaPinterest size={16} />
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <RelatedProducts Type = {type}/>
            </div>
        </div>
    );
};

export default SingleProduct;