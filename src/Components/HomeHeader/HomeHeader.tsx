import React from 'react'
import './HomeHeader.css';
import cncLogo from '../../assets/imgs/cncLogo.svg';
import fnnLogoDesktop from '../../assets/imgs/fnnLogoDesktop.svg';
import fnnLogoMobile from '../../assets/imgs/fnnLogoMobile.svg';

function HomeHeader() {

  return (
    <div className="container">
      <div className="logo">
        <img src={cncLogo} alt="CNC logo" />
      </div>
      <div className="title">
        <h1 className="fnnDesktop"> <img src={fnnLogoDesktop} alt="Flood News at Noon" /></h1>
        <h1 className="fnnMobile"> <img src={fnnLogoMobile} alt="Flood News at Noon" /></h1>
      </div>
      <h2 className="sectionTitle">Every other Thursday 12 CST</h2>
      <h3 className="blueBold">Register by calling HR 251-471-4718 option 4</h3>
    </div>
  );
}

export default HomeHeader;