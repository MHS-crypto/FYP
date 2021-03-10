import React from 'react';
import Video from './Video';
import DoctorCardView from './CardViewDoctor';
import Departments from './Departments';
import Footer from './Footer';


function Home() {
  return (
  
    <div>


      <Video/>
      <Departments/>
      <DoctorCardView/>
      <Footer/>
            
    </div>
   
  );
}

export default Home;
