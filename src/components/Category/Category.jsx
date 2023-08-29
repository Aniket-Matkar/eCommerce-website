import "./Category.scss";
import Products from "../Products/Products";

const Category = () => {
    return <div className="catogery-main-content">
        <div className="layout">
            <div className="category-title"> Catogery Title</div>
            <Products innerPage={true}/>
        </div>
    </div>
};

export default Category;
