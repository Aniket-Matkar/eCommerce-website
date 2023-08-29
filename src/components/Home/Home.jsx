import React, { useEffect, useContext } from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";

const Home = () => {

    const { category, setcategory, product, setproduct } = useContext(Context);

    useEffect(() => {
        getcategories();
        getproducts();
    }, [])

    const getcategories = () => {
        fetchDataFromApi("/api/categories?populate=*").then(res => {
            setcategory(res);
        })
    }

    const getproducts = () => {
        fetchDataFromApi("/api/products?populate=*").then(res => {
            setproduct(res)
        })
    }

    return (
        <div>
            <Banner />
            <div className="main-content">
                <div className="layout">
                    <Category category={category} />
                    <Products product={product} HeadingText="Popular Products" />
                </div>
            </div>
        </div>
    );
};

export default Home;