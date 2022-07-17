import React from 'react';
import cla from './Footer.module.css'


const Footer = () => {
    return (
        <div className={ cla.contain }>
            <div className={cla.info}>
                <div className={cla.item}>
                    <div>icon</div>
                    <div>Today 10:00 am - 7:00 pm</div>
                    <div>Working hours</div>
                </div>
                <div className={cla.item}>
                    <div>icon</div>
                    <div>Velyka Vasylkivska 100</div>
                    <div>Get Directions</div>
                </div>
                <div className={cla.item}>
                    <div>icon</div>
                    <div>+38 (063)833 24 15</div>
                    <div>Call Online</div>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Footer;