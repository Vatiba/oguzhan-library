import React, { ReactNode } from 'react'
// styles
import classNames from 'classnames';

type ContainerFluidProps = {
   children: ReactNode
   className?: string
}

function ContainerFluid(props: ContainerFluidProps) {
   const {
      children,
      className,
   } = props;

   return (
      <div className={classNames('px-[20px] mx-auto', className)}>
         {children}
      </div>
   )
}

export default ContainerFluid;