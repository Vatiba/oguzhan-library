import React from 'react';
// animated Logo
import Logo from '@app/assets/img/logo.png';

function Pending() {
   return (
      <div
         className='w-full h-screen flex justify-center items-center bg-[#FCFCFC]'
      >
         <img src={Logo} alt="Loading state" />
      </div>
   )
}

export default Pending;
