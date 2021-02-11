import React from 'react'
import HomeHeader from '../../Components/HomeHeader/HomeHeader';
import BigCard from '../../Components/BigCard/BigCard';
import ScheduleCardContent from '../../Components/ScheduleCardContent/ScheduleCardContent';
import RegistrationCardContent from '../../Components/RegistrationCardContent/RegistrationCardContent';
import NotificationSignup from '../../Components/NotificationSignup/NotificationSignup';
import Wave from '../../Components/Wave/Wave';

function Home() {

  return (
    <div className="home-wrapper">
      <HomeHeader />
      <section id="scheduling">
        <div className="containerLarge dFlex">
          <BigCard title='2021 Schedule'><ScheduleCardContent /></BigCard>
          <BigCard title='Registration'><RegistrationCardContent /></BigCard>
        </div>
      </section>
      <NotificationSignup />
      <Wave />
    </div>
  );
}

export default Home;