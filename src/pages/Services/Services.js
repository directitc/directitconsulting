import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Header from '../../components/Sections/Header/Header';
import DataMigration from '../../components/Sections/DataMigration/DataMigration';
import DataAnalytics from '../../components/Sections/DataAnalytics/DataAnalytics';
import SystemIntegration from '../../components/Sections/SystemIntegration/SystemIntegration';
import Footer from '../../components/Sections/Footer/Footer';
import FooterLogo from '../../assets/images/full-logo-black.png';
import './Services.css';

const Services = () => {
    const servicesTitle = 'Our Services';
    const servicesSubtitle = 'Consult with IT experts';

    return (
        <div className="about">
            <div className="about-navigation">
                <Navigation />
            </div>
            <div className="about-content">
                <Header
                    classStyle="w3-container about-header"
                    title={servicesTitle}
                    subtitle={servicesSubtitle}
                />
                <DataMigration />
                <DataAnalytics />
                <SystemIntegration />
                <Footer
                    classStyle="w3-padding-64 w3-container services-footer"
                    image={FooterLogo}
                />
            </div>
        </div>
    );
};

export default Services;
