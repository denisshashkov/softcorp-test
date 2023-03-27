import React from 'react';
import {
  FooterLetter,
  QiwiWallet,
  VKontakte,
  WebMoney,
  YandexMoney,
} from '../assets';
export const Footer = () => {
  return (
    <footer className='footer container'>
      <div className='footer__rights'>
        <p>
          © 2018 <span className='footer__rights_title'> «LoremIpsum.net»</span>
          Все права защищены.
        </p>
      </div>
      <div className='footer__payments'>
        <ul className='footer__payments-list'>
          <li className='footer__payments-item'>
            <QiwiWallet className='footer__icon' />
            <span>Qiwi wallet</span>
          </li>
          <li className='footer__payments-item'>
            <YandexMoney className='footer__icon' />
            <span>Yandex Money</span>
          </li>
          <li className='footer__payments-item'>
            <WebMoney className='footer__icon' />
            <span>Web Money</span>
          </li>
        </ul>
      </div>
      <div className='footer__links'>
        <ul className='footer__links-list'>
          <li className='footer__links-item'>
            <FooterLetter className='footer__icon' />
            <a href='#'>info@ipsum228.com</a>
          </li>
          <li className='footer__links-item'>
            <VKontakte className='footer__icon' />
            <a href='#'>Мы вконтакте</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
