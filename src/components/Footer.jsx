import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return (
<div className="footer">
                <a href="https://github.com/warrenwest" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faGithub} size="2xl" />
                </a>
                <a href="https://www.linkedin.com/in/warren0west/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faLinkedin} size="2xl" />
                </a>
                <a href="https://stackoverflow.com/users/30316253/warren" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faStackOverflow} size="2xl" />
                </a>

        </div>
    )
}
export default Footer;