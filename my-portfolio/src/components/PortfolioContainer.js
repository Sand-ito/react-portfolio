import React, { useState } from 'react';
import Header from './Header';
import NavTabs from './NavTabs';
import Footer from './Footer';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';



export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');

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
            <div>
                <Header />

                <div className="container">
                    <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
                    {renderPage()}
                </div>

            </div>
            <Footer />
        </>
    );
}
