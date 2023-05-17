import React, { ReactNode } from 'react'

type ContainerProps = {
   children: ReactNode
}

function Container(props: ContainerProps) {
   const {
      children
   } = props;

   return (
      <div className='max-w-[1280px] px-[15px]'>
         {children}
      </div>
   )
}

export default Container;