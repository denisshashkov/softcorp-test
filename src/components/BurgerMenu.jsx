import React, { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

export const BurgerMenu = () => {
  const [visible, setVisible] = useState(false);
  const navArr = [
    { id: 1, title: 'бизнес' },
    { id: 2, title: 'о нас' },
    { id: 3, title: 'цены' },
    { id: 4, title: 'оформить заказ' },
  ];

  const nodeRef = useRef(null);

  return (
    <>
      <div
        onClick={() => setVisible(!visible)}
        className='menu-button-container'
      >
        <div
          className={visible ? 'menu-button menu-button_active' : 'menu-button'}
        ></div>
      </div>

      <CSSTransition
        nodeRef={nodeRef}
        in={visible}
        timeout={500}
        classNames='menu'
        mountOnEnter
        unmountOnExit
      >
        <ul ref={nodeRef} className='menu'>
          {navArr.map((item) => (
            <li
              onClick={() => setVisible(false)}
              key={item.id}
              className='header__item'
            >
              <a href='#'>{item.title}</a>
            </li>
          ))}
        </ul>
      </CSSTransition>
    </>
  );
};
