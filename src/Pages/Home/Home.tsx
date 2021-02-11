import React from 'react'
import HomeHeader from '../../Components/HomeHeader/HomeHeader';
import BigCard from '../../Components/BigCard/BigCard';
import ScheduleCardContent from '../../Components/ScheduleCardContent/ScheduleCardContent';
import RegistrationCardContent from '../../Components/RegistrationCardContent/RegistrationCardContent';
import NotificationSignup from '../../Components/NotificationSignup/NotificationSignup';

function Home() {

  return (
    <div className="home-wrapper">
      <HomeHeader />
      <NotificationSignup />
      <div className="waveWrap">
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    </div>
  );
}

export default Home;