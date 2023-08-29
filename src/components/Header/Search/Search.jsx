import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import "./Search.scss";
// import useFetch from "../../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
const hideSearchModal = document.querySelector(".search-modal")
const Search = ({ setSearchModal }) => {

    return (
        <div className="search-modal">
            <div className="form-field">
                <input
                    autoFocus
                    type="text"
                    placeholder="Search for products"

                />
                <MdClose
                    className="close-btn" onClick={()=>{hideSearchModal.style.animation = "hideSearch 0.5s ease"; setSearchModal(false)}}
                />
            </div>
            <div className="search-result-content">

                <div className="start-msg">
                    Start typing to see products you are looking for.
                </div>
                <div className="search-results">

                    <div
                        className="search-result-item"
                    >
                        <div className="image-container">
                            <img src="" />
                        </div>
                        <div className="prod-details">
                            <span className="name">
                                Headphone
                            </span>
                            <span className="desc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni alias commodi autem similique, beatae voluptatem assumenda veniam quia ab atque.
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Search;