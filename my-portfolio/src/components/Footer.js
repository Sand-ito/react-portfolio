import React from 'react';

const styles = {
    footerStyle: {
        textAlign: 'center',
        listStyleType: 'none',
        display: 'inline'
    },
    inline:{
        display: 'flex',
        justifyContent: "center",
    },
    li: {
        textDecoration: 'none',
        padding: '20px',
    }
};

export default function Footer() {
    return (
        <>
        <div style={styles.style}>

        <footer style={styles.footerStyle} className="navbar">

            <h4 className="h4">Contact Me:</h4>
            <ul style={styles.inline}>
                <li style={styles.li}><a href="https://docs.google.com/document/d/1QCibeCIaZpUVQRTgMvX1gYfubYMptitYyRJH5xCQ5VU/edit?usp=sharing" >Resume</a></li>
                <li style={styles.li}><a href="mailto: joshualivak1@gmail.com">Email</a></li>
                <li style={styles.li}>(803)493-7892</li>
                <li style={styles.li}><a href="https://github.com/Sand-ito" >Github</a></li>
                <li style={styles.li}><a href="https://www.linkedin.com/in/joshua-livak-53066420a/" >Linkedin</a></li>
            </ul>
        </footer>
        </div>
        </>
    );
}