import React from 'react'
import { ArrowDownIcon } from '@heroicons/react/20/solid'

type DownloadBtnProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {

}

function DownloadBtn(props: DownloadBtnProps) {
   const {
      ...others
   } = props;

   return (
      <button
         {...others}
         className='bg-secondaryColor p-[10px] rounded-md flex justify-center items-center'
      >
         <ArrowDownIcon className="h-5 w-5 text-white" aria-hidden="true" />
      </button>
   )
}

export default DownloadBtn;