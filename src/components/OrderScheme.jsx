import React from 'react';
import { Banknote, File, Letter, Loupe, Percent } from '../assets';

export const OrderScheme = () => {
  const orderShemeArr = [
    { id: 1, title: 'Lorem ipsum dolor sit amet', icon: <Loupe /> },
    { id: 2, title: 'Сonsecteturadipiscing elit', icon: <Percent /> },
    { id: 3, title: 'Sed do eiusmod tempor', icon: <File /> },
    { id: 4, title: 'Esse cillum dolore eu fugiat', icon: <Letter /> },
    {
      id: 5,
      title: 'Excepteur sint occaecat cupidatat non proident',
      icon: <Banknote />,
    },
  ];
  return (
    <div className='order-scheme'>
      <ul className='order-scheme__list'>
        {orderShemeArr.map((item) => (
          <li key={item.id} className='order-scheme__item'>
            <div className='order-scheme__circle'>{item.icon}</div>
            <span className='order-scheme__description'>{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
