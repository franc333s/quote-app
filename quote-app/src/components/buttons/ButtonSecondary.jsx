import { Link } from "react-router-dom";

import './Buttons.scss'

const ButtonSecondary = ({ to, text, onClick }) => {
	
	
	return (
		<>
            <Link className='btn btn--secondary' to={to} onClick={onClick}>{text}</Link>
        </>

	);
  };

export default ButtonSecondary;