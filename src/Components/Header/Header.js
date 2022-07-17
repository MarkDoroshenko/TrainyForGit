import React from 'react';
import cla from './Header.module.css' ;


const Header = () => {
    return (
        <div className={cla.contain}>
            <div className={ cla.logo }>
                <img className={ cla.logoImg } src="https://png.pngtree.com/template/20200207/ourmid/pngtree-logo-design-food-and-drink-image_349877.jpg" alt="hoho"/>
            </div>
            <nav className={ cla.menu }>
                <ul className={ cla.menuList }>
                    <li className={ cla.item }>
                        <a className={ cla.link } href="#">Menu</a>
                    </li>
                    <li className={ cla.item }>
                        <a className={ cla.link } href="#">Recipes</a>
                    </li>
                    <li className={ cla.item }>
                        <a className={ cla.link } href="#">Menu</a>
                    </li>
                    <li className={ cla.item }>
                        <a className={ cla.link } href="#">Contacts</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;