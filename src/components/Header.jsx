import React, { useState } from 'react';
import { BurgerMenu } from './BurgerMenu';

export const Header = () => {
  const [activeLink, setActiveLink] = useState(1);
  const navArr = [
    { id: 1, title: 'бизнес' },
    { id: 2, title: 'о нас' },
    { id: 3, title: 'цены' },
    { id: 4, title: 'оформить заказ' },
  ];

  const activeNavHandle = (id) => {
    setActiveLink(id);
  };

  return (
    <header className='header container'>
      <h3 className='header__title'>
        LoremIpsum.<span>Net</span>
      </h3>
      <nav className='header__nav'>
        <ul className='header__list'>
          {navArr.map((item) => (
            <li key={item.id} className='header__item'>
              <a
                onClick={() => activeNavHandle(item.id)}
                className={
                  activeLink === item.id
                    ? 'header__link header__link_active '
                    : 'header__link'
                }
                href='#'
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <BurgerMenu />
    </header>
  );
};
