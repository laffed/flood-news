import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookF, faInstagram, faTwitter, faLinkedinIn, faYoutube} from '@fortawesome/free-brands-svg-icons';


function Footer() {

  return (
    <footer>
      <div className="containerLarge dFlex">
        <div className="copy centerText">
          <p className="small">© 2021 Copyright CNC Catastrophe &amp; National Claims | <a href="https://adjustingexpectations.com">Visit our website</a>.</p>
        </div>
        <ul className="socialNav dFlex">
          <li>
            <a href="https://www.facebook.com/cnccatastrophe" target="_blank" rel='noreferrer'>
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/cnccatastrophe/" target="_blank" rel='noreferrer'>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/cnccatastrophe" target="_blank" rel='noreferrer'>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/cnccatastrophe/" target="_blank" rel='noreferrer'>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCbrRJiOjGx-3Us5iZhUuaTg" target="_blank" rel='noreferrer' >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
