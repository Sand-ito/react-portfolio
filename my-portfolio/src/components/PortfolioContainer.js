import React, { useState } from 'react';
import Header from './Header';
import NavTabs from './NavTabs';
import Footer from './Footer';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';

const styles = {
    main: {
        backgroundColor: 'Spanish Violet',
    },
};

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Works') {
            return <Works />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <>
        <div style={styles.background}>
            <Header style={styles.background} />

            <div className="container">
                <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} style={styles.background} />
                {renderPage()}
            </div>

        </div>
        <Footer/>
        </>
    );
}
