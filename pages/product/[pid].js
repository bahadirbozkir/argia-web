import { useRouter } from 'next/router'
import React, { Component } from 'react';
import NavbarTwo from '../..//components/Layouts/NavbarTwo';
import PageBanner from '../../components/Common/PageBanner';
import Footer from '../../components/Layouts/Footer';
import ProductsDetailsTab from '../../components/SingleProducts/ProductsDetailsTab';

const Post = () => {
  const router = useRouter()
  const { pid } = router.query

  return (
    <React.Fragment>
      <NavbarTwo />
      <PageBanner
        pageTitle="Ürünler"
        homePageUrl="/"
        homePageText="Ana Sayfa"
        activePageText="Ürünler"
        bgImgClass="item-bg1"
      />

      <section className="product-details-area ptb-110">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="product-details-image">
                <img src="/images/shop/havuz-lambasi.jpg" alt="image" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="product-details-desc">
                <h3>72 LED 2835</h3>

                <div className="price">
                  <span className="new-price">$14.00</span>
                  <span className="old-price">$20.00</span>
                </div>

                <p>0,5W AC&DC / 10,7 - 24V / 15W</p>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <ProductsDetailsTab />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </React.Fragment>
  );
}

export default Post