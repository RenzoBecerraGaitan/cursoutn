import React, { useEffect, useState } from "react";
import "./Products.css";
import { getProducts } from "../../services/FakeStoreAPI";


let Products = () => {

    let [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then((products) => setProducts(products));
    }, [])

    return (
        <>
            <div className="container">
                <section id="products" className="container mt-5">
                    <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
                        {
                            products.slice(7, 19).map((product) => {
                                return (
                                    <div className="col">
                                        <div className="card h-100 penguin-card-border shadow rounded">
                                            <img
                                                src={product.images[0]}
                                                className="card-img-top penguin-card-img w-100"
                                                alt={product.title}
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title text-center">{product.title}</h5>

                                                <p className="card-text text-center">
                                                    {product.description}
                                                </p>
                                            </div>
                                            <div
                                                className="card-footer d-flex justify-content-between align-items-center penguin-card-footer">
                                                <div>
                                                    <h3 className="price-text-style">$ {product.price}</h3>
                                                </div>
                                                <div>
                                                    <button type="button" className="btn penguin-btn">
                                                        <i className="bi bi-basket2"></i> Stock : {product.id + Math.floor(Math.random() * 10) + 14}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
            </div>
        </>)
};


export default Products;