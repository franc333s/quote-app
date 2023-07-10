import { Link } from 'react-router-dom';
import ButtonSecondary from '../buttons/ButtonSecondary';

import './Footer.scss';

function Footer() {

    return (
      <>
        <div className='footer'>
            <ButtonSecondary className='btn btn--secondary' text='CHANGE THEME'/>
            <Link to='/about'>Contact</Link>
        </div>
      </>
    )
  }
  
  export default Footer