import React, { Component } from 'react';
import NavbarFive from '../components/Layouts/NavbarFive';
import ProfessionalSolutions from '../components/HomeFive/ProfessionalSolutions';
import MainBanner from '../components/HomeFive/MainBanner';
import AboutUs from '../components/HomeTwo/AboutUs';
import Footer from '../components/Layouts/Footer';

class Index2 extends Component {
    render() {
        return (
            <React.Fragment>
                <NavbarFive />
                <MainBanner />
                <ProfessionalSolutions />
                <AboutUs />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index2;