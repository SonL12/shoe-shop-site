import React from 'react'
import Gopay from '../../assets/payment/gopay.png'
import Dana from '../../assets/payment/dana.png'
import Shopeepay from '../../assets/payment/shopeepay.png'
import Ovo from '../../assets/payment/ovo.png'
import Seabank from '../../assets/payment/seabank.png'
import Bca from '../../assets/payment/bca.png'
import Bni from '../../assets/payment/bni.png'
import Bri from '../../assets/payment/bri.png'
import Mandiri from '../../assets/payment/mandiri.avif'
import Bsi from '../../assets/payment/bsi.png'
import './payment.css';

const images = [
    { src: Bca, link: 'https://www.klikbca.com/' },
    { src: Bni, link: 'https://www.bni.co.id/id-id/' },
    { src: Bri, link: 'https://bri.co.id/' },
    { src: Mandiri, link: 'https://bankmandiri.co.id/' },
    { src: Bsi, link: 'https://www.bankbsi.co.id/' },
];

const images2 = [
    { src: Gopay, link: 'https://gopay.co.id' },
    { src: Dana, link: 'https://www.dana.id/' },
    { src: Shopeepay, link: 'https://shopeepay.co.id/' },
    { src: Ovo, link: 'https://www.ovo.id/' },
    { src: Seabank, link: 'https://www.seabank.co.id/' },
];

const Payment = () => {
    return(
        <section className='payment'>
            <div className='container-payment'>
                <h3 id='payment-h3'>Payment</h3>
                <div className='img-payment'>
                    {images.map((image, index) => (
                    <a key={index} href={image.link} target="_blank" rel="noopener noreferrer">
                        <img src={image.src} alt={image.name} className="payment-image" />
                        {image.name}
                    </a>
                    ))}
                </div>
                <div className='img-payment'>
                    {images2.map((image, index) => (
                    <a key={index} href={image.link} target="_blank" rel="noopener noreferrer">
                        <img src={image.src} alt={image.name} className="payment-image" />
                        {image.name}
                    </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Payment