import React, { ReactNode } from 'react'
// styles
import classNames from 'classnames';

type ContainerProps = {
   children: ReactNode
   className?: string
}

function Container(props: ContainerProps) {
   const {
      children,
      className,
   } = props;

   return (
      <div className={classNames('max-w-[1280px] px-[15px] mx-auto', className)}>
         {children}
      </div>
   )
}

export default Container;