import React, { Component } from 'react';

class AboutContact extends Component {
    render() {
        return (
            <section className="about-area ptb-110">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-image">
                                <img src="/images/about/about1.jpg" alt="image" />
                                <img src="/images/about/about2.jpg" alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <h2>Biz Kimiz?</h2>
                                <p>ÖZÇAĞ YAYINCILIK VE HAVUZ ÜRÜNLERİ SAN. TİC.LTD. ŞTİ. olarak sektöre 2004 yılında havuz malzeme satışı ve taahhüt işleri ile başlayan şirketimiz aynı zamanda 2020 yılına kadar sektörün tek yayını HAVUZ & SAUNA DERGİSİ’ ninde sahibidir. 2015 yılında ARGİA markası ile Türkiye’nin en kaliteli yerli su altı lambası üretimine büyük bir titizlik ile başlamıştır.</p>
                                <p>Hedef kitlemiz olan siz değerli tüketicilerimizin sorunlarına, istek ve ihtiyaçlarınıza AR-GE çalışmalarımızla fark yarattığımıza inanıyoruz. Dürüst, gerçek, samimi bir şekilde sizlere hizmet sunmayı şirket kültürümüzle birlikte ilke edindik. Beklentilerinizi sağlamak için ve hep birlikte gelişme ve büyüme göstererek ödüller ve başarılar almak istiyoruz. Öyleyse ARGİA POOL olarak biz varız… </p>
                                <p>2021 yılı itibariyle şirketimiz Handan Bayır ve Gökhan Bayır ortaklığında ARGİA POOL VE ELEKTRONİK LTD. ŞTİ. olarak havuz sektöründe üretime devam etmektedir.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="shape-img1">
                    <img src="/images/shape/shape1.png" alt="image" />
                </div>
                <div className="shape-img2">
                    <img src="/images/shape/shape2.svg" alt="image" />
                </div>
                <div className="shape-img3">
                    <img src="/images/shape/shape3.png" alt="image" />
                </div>
                <div className="shape-img4">
                    <img src="/images/shape/shape4.svg" alt="image" />
                </div>
                <div className="shape-img5">
                    <img src="/images/shape/shape5.svg" alt="image" />
                </div>
                <div className="shape-img6">
                    <img src="/images/shape/shape6.png" alt="image" />
                </div>
                <div className="dot-shape1">
                    <img src="/images/shape/dot1.png" alt="image" />
                </div>
                <div className="dot-shape2">
                    <img src="/images/shape/dot2.png" alt="image" />
                </div>
            </section>
        );
    }
}

export default AboutContact;