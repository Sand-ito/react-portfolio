import React from 'react';

const styles = {
    headerStyle: {
        fontSize: '100px',
        textAlign: 'center',
        color: 'Spanish Violet',
    },
    headingStyle: {
        background: 'Spanish Violet',
    },
};

export default function Header() {
    return (
        <header style={styles.headingStyle}>
            <h1 style={styles.headerStyle}>Joshua Livak</h1>

        </header>
    );
}