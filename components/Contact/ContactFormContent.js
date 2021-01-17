import React, { Component } from 'react';
import Link from 'next/link';
import ContactForm from './ContactForm';

class ContactFormContent extends Component {
    render() {
        return (
            <section className="contact-area ptb-110">
                <div className="container">
                    <div className="section-title">
                        <span>Bize Yazın</span>
                        <h2>Her Sorunuz İçin Bize Ulaşabilirsiniz</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="contact-form">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-md-12">
                                <div className="contact-image">
                                    <img src="/images/contact.png"  alt="image" />
                                </div>
                            </div>

                            <div className="col-lg-7 col-md-12">
                                <ContactForm />
                            </div>
                        </div>
                    </div>

                    {/* Contact info */}
                    <div className="contact-info">
                        <div className="contact-info-content">
                            <h3>Bize Telefon veya Email Üzerinden Ulaşın</h3>
                            <h2>
                                <span className="number">+090 232 222 1100</span>
                                <span className="or">VEYA</span>
                                <span className="email">info@argia.com</span>
                            </h2>

                            <ul className="social">
                                <li>
                                    <a href="#" target="_blank">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactFormContent;