import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layouts/Footer';

class Shop extends Component {
    render() {
        return (
            <React.Fragment>
                <NavbarTwo />
                <PageBanner 
                    pageTitle="Ürünler" 
                    homePageUrl="/" 
                    homePageText="Ana Sayfa" 
                    activePageText="Ürünler" 
                    bgImgClass="item-bg2" 
                />  

                <div className="shop-area ptb-110">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-product-box">
                                    <div className="product-image">
                                        <a href="/product/1">
                                            <img src="/images/shop/havuz-lambasi.jpg" alt="image" />
                                            <img src="/images/shop/havuz-lambasi.jpg" alt="image" />
                                        </a>   

                                        <a href="/product/1" className="add-to-cart-btn">Ürün Detayı <i className="fas fa-cart-plus"></i></a>                                     
                                    </div>

                                    <div className="product-content">
                                        <h3><a href="/product/1">72 LED 2835</a></h3>
                                        <h5><a href="/product/1">0,5W AC&DC / 10,7 - 24V / 15W</a></h5>
                                        <div className="price">
                                            <span className="new">8.50₺</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-product-box">
                                    <div className="product-image">
                                        <a href="/product/1">
                                            <img src="/images/shop/havuz-lambasi.jpg" alt="image" />
                                            <img src="/images/shop/havuz-lambasi.jpg" alt="image" />
                                        </a>

                                        <a href="/product/1" className="add-to-cart-btn">Ürün Detayı <i className="fas fa-cart-plus"></i></a>

                                        <div className="sale-btn">Sale!</div>
                                    </div>

                                    <div className="product-content">
                                        <h3><a href="/product/1">96 LED</a></h3>
                                        <h5><a href="/product/1">2835-0,5W AC&DC / 10,7 - 17V / 25W</a></h5>
                                        <div className="price">
                                            <span className="new">12.50₺</span>
                                            <span className="old">20.50₺</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-product-box">
                                    <div className="product-image">
                                        <a href="/product/1">
                                            <img src="/images/shop/havuz-lambasi.jpg" alt="image" />
                                            <img src="/images/shop/havuz-lambasi.jpg" alt="image" />
                                        </a>

                                        <a href="/product/1" className="add-to-cart-btn">Ürün Detayı <i className="fas fa-cart-plus"></i></a>
                                    </div>

                                    <div className="product-content">
                                        <h3><a href="/product/1">45 LED</a></h3>
                                        <h5><a href="/product/1">3030-1,5W AC&DC / 10,7 - 17V / 35W</a></h5>
                                        <div className="price">
                                            <span className="new">8.50₺</span>
                                            <span className="old">12.50₺</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </React.Fragment>
        );
    }
}

export default Shop;