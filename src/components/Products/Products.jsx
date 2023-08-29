import "./Products.scss";
import Product from "./Product/Product";
import {getProductsData} from "./ProductAPI"

const Products = ({ innerPage, HeadingText,rProduct }) => {
    var products = getProductsData();
    // if (!innerPage) {
    //     products = rProduct;
    // }
  
    return (
      <div className="products-container">
        {!innerPage && <div className="sec-heading">{HeadingText}</div>}
        <div className="products">
          {products.map((product) => (
            <Product
              id={product.id}
              rProduct={rProduct}
              title={product.title}
              description={product.description}
              price={product.price}
              image={product.image}
              type={product.type}
            />
          ))}
        </div>
      </div>
    );
  };
  
export default Products;







// import "./Products.scss";
// import Product from "./Product/Product";
// import {getProductsData} from "./ProductAPI"

// const Products = ({ innerPage, HeadingText, product }) => {
//     const products = getProductsData();

//     return (
//         <div className="products-container">
//             {!innerPage && <div className="sec-heading">{HeadingText}</div>}
//             {/* {console.log(product?.data)} */}
//             <div className="products">
//                 { products.map((prod,item) => {
//                     <Product key={item.id} prod={prod}/>
//                 })}
//             </div>
//         </div>
//     );
// };

// export default Products;
