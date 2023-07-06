import { Link } from 'react-router-dom'
import './Topbar.scss'

function Topbar() {

    return (
      <>
              <div className='topbar'>This is Topbar.jsx</div>
              <Link to='/'>QuoteApp</Link>
              <Link to='/about'>About</Link>
      </>
    )
  }
  
  export default Topbar