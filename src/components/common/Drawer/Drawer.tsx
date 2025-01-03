import { Fragment, ReactNode } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

type DrawerProps = {
	open: boolean
	setOpen: (open: boolean) => void
	title?: string
	children: ReactNode
}

function Drawer(props: DrawerProps) {
	const {
		open,
		setOpen,
		title,
		children
	} = props;

	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog as="div" className="relative z-40" onClose={setOpen}>
				<Transition.Child
					as={Fragment}
					enter="ease-in-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in-out duration-300"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
				</Transition.Child>

				<div className="fixed inset-0 overflow-hidden">
					<div className="absolute inset-0 overflow-hidden">
						<div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
							<Transition.Child
								as={Fragment}
								enter="transform transition ease-in-out duration-300 sm:duration-300"
								enterFrom="translate-x-full"
								enterTo="translate-x-0"
								leave="transform transition ease-in-out duration-300 sm:duration-300"
								leaveFrom="translate-x-0"
								leaveTo="translate-x-full"
							>
								<Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
									<div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
										<div className="px-4 sm:px-6">
											{
												title &&
												<Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
													{title}
												</Dialog.Title>
											}
											<div className="absolute right-0 top-0 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
												<button
													type="button"
													className="rounded-md focus:outline-none focus:ring-2 focus:ring-white"
													onClick={() => setOpen(false)}
												>
													<span className="sr-only">Close panel</span>
													<XMarkIcon className="h-6 w-6" aria-hidden="true" />
												</button>
											</div>
										</div>
										<div className="relative mt-6 flex-1 px-4 sm:px-6">
											{children}
										</div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	)
}

export default Drawer;