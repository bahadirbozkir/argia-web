import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {

        let currentYear = new Date().getFullYear();

        return (
            <footer className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <a href="/">
                                        <img src="/images/argia-logo-transparent.png" alt="image"  width="149" height="37"/>
                                    </a>
                                    <p>ÖZÇAĞ YAYINCILIK VE HAVUZ ÜRÜNLERİ SAN. TİC.LTD. ŞTİ. olarak sektöre 2004 yılında havuz malzeme satışı ve taahhüt işleri ile başlayan şirketimiz aynı zamanda 2020 yılına kadar sektörün tek yayını HAVUZ & SAUNA DERGİSİ’ ninde sahibidir. 2015 yılında ARGİA markası ile Türkiye’nin en kaliteli yerli su altı lambası üretimine büyük bir titizlik ile başlamıştır.</p>
                                </div>

                                <ul className="social">
                                    <li>
                                        <Link href="/#">
                                            <a target="_blank">
                                                <i className="flaticon-facebook-letter-logo"></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/#">
                                            <a target="_blank">
                                                <i className="flaticon-twitter"></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/#">
                                            <a target="_blank">
                                                <i className="flaticon-instagram-logo"></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/#">
                                            <a target="_blank">
                                                <i className="flaticon-youtube-play-button"></i>
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Hızlı Navigasyon</h3>

                                <ul className="quick-links-list">
                                    <li>
                                        <Link href="/about">
                                            <a>Hakkımızda</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            <a>Bize Ulaşın</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>İletişim</h3>

                                <ul className="footer-contact-list">
                                    <li>
                                        <span>Adres:</span> 
                                        ARGİA POOL ELEKTRONİK LTD. ŞTİ. <br /> İSTANBUL / TÜRKİYE
                                    </li>
                                    <li>
                                        <span>Email:</span>
                                        info@argiapool.com
                                    </li>
                                    <li>
                                        <span>Telefon:</span>  <br />
                                        0 212 222 53 40 <br /> 0 533 491 46 51 <br /> 0 506 021 53 28

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <p>Copyright &copy;{currentYear} Argia. All Rights Reserved </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="circle-map">
                    <img src="/images/circle-map.png" alt="image" />
                </div>

                <div className="lines">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </footer>
        );
    }
}

export default Footer;