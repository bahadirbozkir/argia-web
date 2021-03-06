import React from 'react';
import Link from 'next/link';
import ReactWOW from 'react-wow';

const MainBanner = () => {
    return (
        <div className="banner-section">
            <div className="container">
                <div className="row" >
                    <div className="col-lg-6">
                        <div className="banner-content">
                            <h1>Siz Hayal Edebilirseniz,</h1>
                            <h1>Biz Yapabiliriz!</h1>
                            <h2>Sualtı Aydınlatma Lambaları</h2>

                            <div className="btn-box">
                                <Link href="/shop">
                                    <a className="btn btn-info">Ürünler</a>
                                </Link>
                                <Link href="/contact">
                                    <a className="optional-btn">Bize Ulaşın</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Shape Images */}
            <div className="shape-img2"><img src="/images/shape/shape2.svg" alt="image" /></div>
            <div className="shape-img3"><img src="/images/shape/shape3.png" alt="image" /></div>
            <div className="shape-img5"><img src="/images/shape/shape5.svg" alt="image" /></div>
            <div className="dot-shape1"><img src="/images/shape/dot1.png" alt="image" /></div>
            <div className="dot-shape2"><img src="/images/shape/dot3.png" alt="image" /></div>
        </div>
    )
}

export default MainBanner;