import React from 'react';
import Link from 'next/link';

const AboutUs = () => {
    return (
        <div className="about-area pt-0 ptb-110">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-img">
                            <img src="/images/about/about3.png" alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                            <h2>Yeni Ürün ARGIA COOLING</h2>
                            <p>Argia COOLING serisi sualtı aydınlatma ampülü</p>

                            <ul className="features-list">
                                <li><span><i className="flaticon-tick"></i> Uzun ömürlü aydınlatma</span></li>
                                <li><span><i className="flaticon-tick"></i> Isı transferli fiziki yapı</span></li>
                                <li><span><i className="flaticon-tick"></i> Paslanmaz ve plastik her kasaya uyumlu</span></li>
                                {/* <li><span><i className="flaticon-tick"></i> Extraction</span></li>
                                <li><span><i className="flaticon-tick"></i> Selection</span></li> */}
                            </ul>

                            <Link href="/shop">
                                <a className="btn btn-primary">Daha Fazla Keşfet</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Shape Images */}
            <div className="shape-img1"><img src="/images/shape/shape1.png" alt="image" /></div>
            <div className="shape-img3"><img src="/images/shape/shape3.png" alt="image" /></div>
            <div className="shape-img4"><img src="/images/shape/shape4.svg" alt="image" /></div>
        </div>
    )
}

export default AboutUs;