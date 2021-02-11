import React from 'react'

function Footer() {

  return (
    <div className="footer-wrapper">
      <div className="containerLarge dFlex">
        <div className="copy centerText">
          <p className="small">© 2021 Copyright CNC Catastrophe &amp; National Claims | <a href="https://adjustingexpectations.com">Visit our website</a>.</p>
        </div>
        <ul className="socialNav dFlex">
          <li><a href="https://www.facebook.com/cnccatastrophe" target="_blank" rel='noreferrer'><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="https://www.instagram.com/cnccatastrophe/" target="_blank" rel='noreferrer'><i className="fab fa-instagram"></i></a></li>
          <li><a href="https://twitter.com/cnccatastrophe" target="_blank" rel='noreferrer'><i className="fab fa-twitter"></i></a></li>
          <li><a href="https://www.linkedin.com/company/cnccatastrophe/" target="_blank" rel='noreferrer'><i className="fab fa-linkedin-in"></i></a></li>
          <li><a href="https://www.youtube.com/channel/UCbrRJiOjGx-3Us5iZhUuaTg" target="_blank" rel='noreferrer' ><i className="fab fa-youtube"></i></a></li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
