import React from 'react';
import Link from 'next/link';

const OurFeaturedSolutions = () => {
    return (
        <div className="featured-solutions-area ptb-110">
            <div className="container">
                <div className="section-title">
                    <h2>Çözümlerimiz</h2>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-featured-solutions-box">
                            <div className="icon">
                                <img src="/images/icon1.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/index-2/#">
                                    <a>LED sürücü kullanmak neden önemlidir?</a>
                                </Link>
                            </h3>
                            <p>Öncelikle enerji tasarrufu sağlıyor olması önemli bir sebeptir. Güç dayanıklılığı ve ömrüyle
                            eşleşmeyen sistemde risk ve tehlike oluşabilir. Ancak uzun ömürlü ve kaliteli elektrolitik
                            kapasitörler kullanarak tehlikeyi önlemek mümkün. Uzun ömürlü sürücüler led aydınlatma
                            sisteminin de dayanıklı olmasını sağlayacaktır. ARGIA marka tüm aydınlatma ürünlerinde
                            Step-down High Brightness LED Driver kullanılmaktadır.</p>
                            {/* <Link href="/index-2/#">
                                <a className="learn-more-btn">Read More</a>
                            </Link> */}
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-featured-solutions-box">
                            <div className="icon">
                                <img src="/images/icon2.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/index-2/#">
                                    <a>LED’lerde Fosfor Kullanılmasının Avantajları</a>
                                </Link>
                            </h3>
                            <p>Yüksek CRI elde edilmesini sağlar. Böylece insan gözü nesneleri asıl renklerine en yakın
                            şekilde algılar. Ayrıca fosfor miktarı ile beyaz LED’in renk sıcaklığı belirlenir. ARGIA
                            aydınlatma ürünlerinde 80 CRI değerinin altında LED çipi kullanılmamaktadır.</p>
                            {/* <Link href="/index-2/#">
                                <a className="learn-more-btn">Read More</a>
                            </Link> */}
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                        <div className="single-featured-solutions-box">
                            <div className="icon">
                                <img src="/images/icon3.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/index-2/#">
                                    <a>ARGIA – UNIQUE</a>
                                </Link>
                            </h3>
                            <p>Klasik LED’li aydınlatma ürünleri ortalama 120o
                            açı ile ışık yayar.
                            Yüzme havuzlarında lambalar havuzun bitiş kotuna 65 cm
                            mesafede montaj edildiğinden ışık dağılımının %40’ı havuz
                            dışını aydınlatır. Argia - Unique model ürünümüz özel
                            tasarım LED kartı ve kullanılan lens özelliği ile tamamen
                            havuzu aydınlatmaya yönelik tasarlanmıştır. Bu ürün ile daha
estetik aydınlatma ve %40 enerji tasarrufu sağlarsınız.</p>
                            {/* <Link href="/index-2/#">
                                <a className="learn-more-btn">Read More</a>
                            </Link> */}
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

export default OurFeaturedSolutions;