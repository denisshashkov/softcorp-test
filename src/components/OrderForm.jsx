import React from 'react';
import { Input } from './ui/Input';
import { RangeInput } from './ui/RangeInput';
import { OrderFile } from '../assets';
import { Button } from './ui/Button';
import { CustomSelect } from './ui/CustomSelect';

export const OrderForm = () => {
  return (
    <form typeof='submit' className='form'>
      <div className='form__input-wrap'>
        <CustomSelect className='form__select' />
        <Input
          placeholder='Ваш e-mail'
          type='email'
          name='email'
          className='form__input'
        />
        <Input
          placeholder='Ваше имя'
          name='name'
          type='text'
          className='form__input'
        />
      </div>
      <div className='form__input-wrap'>
        <RangeInput />
        <label htmlFor='file' className='form__input-label'>
          <OrderFile />
          <span>Прикрепить файл</span>
          <Input name='file' type='file' className='form__input-file' />
        </label>
      </div>
      <div className='form__button-wrap'>
        <Button disabled className='btn primary'>
          отправить
        </Button>
      </div>
    </form>
  );
};
