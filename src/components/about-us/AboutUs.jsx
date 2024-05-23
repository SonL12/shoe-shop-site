import React from 'react'
import Logo1 from '../../assets/logo/logo-shoe.jfif'
import Logo2 from '../../assets/icon/right-arrow.svg'
import { useNavigate } from 'react-router-dom';
import './about-us.css'

const AboutUs = () => {
    const navigate = useNavigate();
    const teamMembers = [
        { id: 1, name: 'Ahmad Lekha Reza', role: 'Lekha' },
        { id: 2, name: 'Barriq Kaykaus Mujau', role: 'Barriq' },
        { id: 3, name: 'Agustia Selsa Maharani', role: 'Selsa' },
        { id: 4, name: 'Nur Azizah Aurelia', role: 'Aurel' },
        { id: 5, name: 'Naufal Falahul Zulfa', role: 'Naufal' },
        { id: 6, name: 'Siti Nur Fadilah', role: 'Fadilah' },
        { id: 7, name: 'Adrian Bagas Pradana', role: 'Bagas' },
        { id: 8, name: 'Gustin Maulana Fatah', role: 'Gustin' },
    ];

    const navigateHome = () => {
        navigate('/home');
    };

    return (
        <section className='about-us'>
            <section className='container'>
                <h1 className='us'>Us</h1>
                <div className="container-row">
                    <section className='container-team'>
                        <header className='header-wrapper'>
                            <h2>Meet Our Team</h2>
                            <hr className='section-divider'/>
                        </header>
                        <div className='team-list'>
                            {teamMembers.map(member => (
                                <div key={member.id} className='team-member'>
                                    <h3>{member.name}</h3>
                                    <p>{member.role}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                    <section className='container-shop'>
                        <header className="header-wrapper">
                            <h2>Shoeshoeshoe</h2>
                            <hr className='section-divider'/>
                        </header>
                        <div className="shoe">
                            <img src={Logo1} alt="Logo Shoe" />
                            <button className='home-button' onClick={navigateHome}>
                                More about Shoeshoeshoe
                            </button>
                            <img src={Logo2} alt="Arrow Icon" className='arrow'/>
                        </div>
                    </section>
                </div>
                <section className='about-history'>
                    <div className='header-wrapper'>
                        <h2>About Us</h2>
                        <hr className='section-divider' />
                    </div>
                    <p className='history-text'>
                        Shoeshoeshoe didirikan pada tahun 2000 dengan tujuan untuk menyediakan sepatu berkualitas tinggi kepada pelanggan di seluruh dunia. Kami berkomitmen untuk inovasi dan kepuasan pelanggan, dengan berbagai produk yang dirancang untuk memenuhi kebutuhan dan gaya hidup modern.
                    </p>
                </section>
            </section>
        </section>
    )
}

export default AboutUs