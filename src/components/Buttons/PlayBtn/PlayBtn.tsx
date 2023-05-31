import { PlayIcon } from '@heroicons/react/20/solid';
import React from 'react';

type PlayBtnProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {

}

function PlayBtn(props: PlayBtnProps) {
   const {
      className,
      ...others
   } = props;

   return (
      <button
         {...others}
         className={`bg-secondaryColor p-3 rounded-full ${className}`}
      >
         <PlayIcon className={`h-6 w-6 text-white ${className}`} aria-hidden="true" />
      </button>
   )
}

export default PlayBtn;