import { Link } from 'react-router-dom';
import './Topbar.scss';

function Topbar() {

    return (
        <>
            <div className='topbar'>
                <Link to='/' className='btn--effect'>QuoteApp</Link>
                <Link to='/about'>About</Link>
            </div>
        </>
    )
  }
  
  export default Topbar