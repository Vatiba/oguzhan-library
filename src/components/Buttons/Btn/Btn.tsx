import React from 'react'
import { ArrowDownIcon } from '@heroicons/react/20/solid'

type BtnProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	/**
	 * @default false
	 */
	downLoad?: boolean
	txt?: string
}

function Btn(props: BtnProps) {
	const {
		downLoad = false,
		txt,
		...others
	} = props;

	return (
		<button
			{...others}
			className='bg-primary-dark p-[10px] rounded-md flex items-center'
		>
			{
				downLoad &&
				<ArrowDownIcon className="h-5 w-5 text-white" aria-hidden="true" />
			}
			{
				txt &&
				<span className='text-base font-medium leading-[19px] text-white'>
					{txt}
				</span>
			}
		</button>
	)
}

export default Btn;