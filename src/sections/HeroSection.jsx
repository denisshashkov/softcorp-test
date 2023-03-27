import React from 'react';
import { Button } from '../components/ui/Button';

export const HeroSection = () => {
  return (
    <section className='hero container'>
      <div className='hero__content'>
        <h1 className='hero__title'>
          <span>Lorem ipsum</span> dolor sit <br /> amet consectetur
          <span> adipiscing</span>
        </h1>
        <article className='hero__testimonials'>
          <h6 className='hero__testimonials-title'>
            At vero eos et accusamus et iusto odio dignissimos ducimus!
          </h6>
          <ul className='hero__testimonials-list'>
            <li className='hero__testimonials-item'>
              <span>Totam rem aperiam eaque ipsa</span>
            </li>
            <li className='hero__testimonials-item'>
              <span>Sit voluptatem accusantium doloremque laudantium</span>
            </li>
            <li className='hero__testimonials-item'>
              <span>Sed ut perspiciatis, unde omnis iste natus error</span>
            </li>
          </ul>
        </article>
        <div className='hero__order'>
          <Button className='btn primary'>заказать</Button>
          <Button className='btn light'>подробнее</Button>
        </div>
      </div>
    </section>
  );
};
