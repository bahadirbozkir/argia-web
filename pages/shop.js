import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layouts/Footer';

export async function getServerSideProps(context) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`)
    console.log(res);
    const datas = await res.json()

    if (!datas) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    return {
        props: { datas }, // will be passed to the page component as props
    }
}

const Shop = ({ datas }) => {
    console.log(datas);
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

                        {datas.map((data) => (
                            <div className="col-lg-4 col-md-6 col-sm-6" key={data.id}>
                                <div className="single-product-box">
                                    <div className="product-image">
                                        <a href={'/product/' + data.id}>
                                            <img src="/images/shop/havuz-lambasi.jpg" alt="image" />
                                            <img src="/images/shop/havuz-lambasi.jpg" alt="image" />
                                        </a>

                                        <a href={'/product/' + data.id} className="add-to-cart-btn">Ürün Detayı <i className="fas fa-cart-plus"></i></a>
                                    </div>

                                    <div className="product-content">
                                        <h3><a href={'/product/' + data.Id}>{data.Name}</a></h3>
                                        <h5><a href={'/product/' + data.Id}>{data.ShortDescription}</a></h5>
                                        <div className="price">
                                            <span className="new">{data.Price} ₺</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </React.Fragment>
    );
}

export default Shop;