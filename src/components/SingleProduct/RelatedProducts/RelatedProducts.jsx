import Product from "../../Products/Products";
import { useEffect, useState } from "react";
import { getProductsData } from "../../Products/ProductAPI"
const RelatedProducts = ({type}) => {
    const product = getProductsData();
    const[rProduct,setrProduct] = useState(null);

    useEffect(()=>{
        const relatedProduct = product.find((p)=>p.type===type);
        setrProduct(relatedProduct);
    },[type])
    return(
        <div className="related-producted">
            <Product rProduct={rProduct} HeadingText="Related Products"/>
        </div>
    );
};

export default RelatedProducts;
