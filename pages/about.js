import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import AboutContact from '../components/About/AboutContent';
import Footer from '../components/Layouts/Footer';

class About extends Component {
    render() {
        return (
            <React.Fragment>
                <NavbarTwo />
                <PageBanner 
                    pageTitle="Hakkımızda" 
                    homePageUrl="/" 
                    homePageText="Ana Sayfa" 
                    activePageText="Hakkımızda" 
                    bgImgClass="item-bg1" 
                />  
                <AboutContact />
                <Footer/>
            </React.Fragment>
        );
    }
}

export default About;