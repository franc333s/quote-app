import { Link } from "react-router-dom";

import './Buttons.scss'

const ButtonPrimary = ({ to, text, onClick }) => {
	
	return (
		<>
            <Link className='btn btn--primary' to={to} onClick={onClick}>{text}</Link>
        </>

	);
  };

export default ButtonPrimary;