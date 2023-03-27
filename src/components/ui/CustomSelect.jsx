import React, { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

export const CustomSelect = ({ className }) => {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState('Выбирете тип системы');

  const labels = [
    { id: 1, label: 'Sed ut perspiciatis' },
    { id: 2, label: 'Nemo enim ipsam' },
    { id: 3, label: 'Et harum quidem' },
    { id: 4, label: 'Temporibus autem' },
    { id: 5, label: 'Itaque earum rerum' },
    { id: 6, label: 'Itaque earum rerum' },
    { id: 7, label: 'Itaque earum rerum' },
    { id: 8, label: 'Itaque earum rerum' },
    { id: 9, label: 'Itaque earum rerum' },
  ];

  const nodeRef = useRef(null);

  const selectedHandler = (e) => {
    setSelected(e.target.textContent);
    setVisible(false);
  };

  const visibleHandler = () => {
    setVisible(!visible);
  };

  return (
    <div className={className}>
      <div className='select'>
        <div
          onClick={visibleHandler}
          className={
            visible ? 'select__title select__title_active' : 'select__title'
          }
        >
          <span>{selected}</span>
        </div>
        <CSSTransition
          nodeRef={nodeRef}
          in={visible}
          timeout={500}
          classNames='menu'
          mountOnEnter
          unmountOnExit
        >
          <div ref={nodeRef} className='select__content'>
            {labels.map((item) => (
              <div key={item.id}>
                <input className='select__input' type='checkbox' />
                <label onClick={selectedHandler} className='select__label'>
                  {item.label}
                </label>
              </div>
            ))}
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};
