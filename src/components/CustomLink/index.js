import { Link } from 'react-router-dom';

const CustomLink = ({ icon, link, newTab, className, title }) => {
	return newTab ? (
		<a
			className={`fa ${icon}${className ? ` ${className}` : ''}`}
			href={link}
			target="_blank"
		/>
	) : (
		<Link className={`${className ? ` ${className}` : ''}`} to={link}>
			{title}
		</Link>
	);
};

export default CustomLink;
