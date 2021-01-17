import React, { Component } from 'react';
import NavbarThree from '../components/Layouts/NavbarThree';
import MainBanner from '../components/HomeTwo/MainBanner';
import OurFeaturedSolutions from '../components/HomeTwo/OurFeaturedSolutions';
import AboutUs from '../components/HomeTwo/AboutUs';
import Footer from '../components/Layouts/Footer';

class Index2 extends Component {
    render() {
        return (
            <React.Fragment>
                <NavbarThree />
                <MainBanner />
                <OurFeaturedSolutions />
                <AboutUs />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index2;