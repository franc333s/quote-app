import { Link } from "react-router-dom";



const ButtonSecondary = ({ to, text, openInNewTab }) => {
	
	const linkProps = openInNewTab ? { target: '_blank', rel: 'noopener noreferrer' } : {};
	
	return (
		<>
            <Link className="" to={to} {...linkProps}>{text}</Link>
        </>

	);
  };

export default ButtonSecondary;