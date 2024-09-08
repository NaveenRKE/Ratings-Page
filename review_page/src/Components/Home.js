import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Home.css';

function Home() {
    const navigate = useNavigate();

    const handleTokenClick = (token) => {
        // Navigate to the Rating page
        navigate('/rating');
    };

    const generateRandomNumber = () => {
        return Math.floor(Math.random() * 900) + 100; // Random number between 100 and 999
    };
    let token = generateRandomNumber()
    return (
        <>
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={`./download.png`} alt="logo" className="logo-img" />
                <span className="logo-name">DOMINO'S</span>
            </div>
            

        </nav>

        <div className='App'>

<div className='container'>
    <div className='text'><span>Drop Your Star, Taste The Change!</span></div>
    <div className="home">
<p className='choosetakentext'>Choose Your Token Number</p>
<div className="tokens">
    {[...Array(10).keys()].map((_, index) => {
        
        return (
            <div
                key={token}
                className="token"
                onClick={() => handleTokenClick(token)}
            >
                <p>{token++}</p>
            </div>
        );
    })}
</div>
</div>
</div>


</div>


        </>
        



    );
}

export default Home;
