import { useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonSecondary from '../buttons/ButtonSecondary';

import './Footer.scss';

function Footer({ onThemeChange }) {


    return (
      <>
        <div className='footer'>
            <ButtonSecondary className='btn btn--secondary' text='CHANGE THEME' onClick={onThemeChange}/>
            <Link className='footer__contact' to='mailto:apellidofrances@gmail.com'>Contact</Link>
        </div>
      </>
    )
  }
  
  export default Footer