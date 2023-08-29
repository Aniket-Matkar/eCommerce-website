import { useNavigate } from "react-router-dom"
import "./Product.scss";


const Product = ({ id, title, price, image }) => {
    const Navigate = useNavigate();
    return (
        <div className="product-card" onClick={()=>{ Navigate("/product/"+id) }}>
            <div className="thumbnail">
                <img src={image} alt={title} />
            </div>
            <div className="prod-details">
                <span className="name">{title}</span>
                <span className="price">&#8377;{price}</span>
            </div>
        </div>
    );
};

export default Product;








// import "./Product.scss";

// const Product = ({key,prod}) => {
//     // const { product, setproduct } = useContext(Context);

//     return <div className="product-card">
//         <div className="thumbnail">
//             <img src={prod.image} alt="" />
//         </div>
//         <div className="prod-details">
//             <span className="name">{prod.title}</span>
//             {console.log(prod.title)}
//             <span className="price">&#8377;{prod.price}</span>
//         </div>
//     </div>
// };

// export default Product;
