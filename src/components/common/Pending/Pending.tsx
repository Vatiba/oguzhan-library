import React from 'react';
// animated Logo
import AnimatedLogo from '@app/assets/img/animate_logo.gif';

function Pending() {
   return (
      <div
         className='w-full h-screen flex justify-center items-center bg-[#FCFCFC]'
      >
         <img src={AnimatedLogo} alt="Loading state" />
      </div>
   )
}

export default Pending;
