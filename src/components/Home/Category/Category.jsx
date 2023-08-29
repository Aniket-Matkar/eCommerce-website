// import "./Category.scss";

// // import cat1 from "../../../assets/category/cat-1.jpg";

// const Category = ({ category }) => {
//     return <div className="shop-by-category">
//         <div className="categories">
//             {category?.data?.map((item) => {
//                 <div key={item.id} className="category">
//                     <img src={"http://localhost:1337"+ item?.attributes?.image?.data[0]?.attributes?.url} alt="Category" />
//                 </div>
//             })}
//         </div>
//     </div>
// };

// export default Category;

import React from "react";
import "./Category.scss";
import { getCategoriesData } from './CategoryAPI';

const Category = () => {
  const categories = getCategoriesData();

  return (
    <div className="shop-by-category">
      <div className="categories">
        {categories.map((category, index) => (
          <div key={index} className="category">
            <img src={category.image} alt={category.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
