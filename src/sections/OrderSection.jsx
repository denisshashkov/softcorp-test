import React from 'react';
import { OrderForm } from '../components/OrderForm';
import { OrderScheme } from '../components/OrderScheme';

export const OrderSection = () => {
  return (
    <section className='order container'>
      <div className='order__content'>
        <div className='order__title'>
          <h1>
            Оформление <span>Заказа</span>
          </h1>
          <p>Перед заполнением формы ознакомьтесь с нашей схемой работы!</p>
        </div>
        <OrderScheme />
        <OrderForm />
      </div>
    </section>
  );
};
