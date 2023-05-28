// components
import { Fragment } from 'react';
import { Menu, Transition } from "@headlessui/react";
import { Link } from '@tanstack/react-location'
// icons
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
// styles
import classNames from 'classnames';
// hooks
import { useTranslation } from 'react-i18next';

type HeadDropdownProps = {
	title: string
	options: {
		href: string
		label: string
		children?: {
			href: string
			label: string
		}[]
	}[]
	wrapperCN?: string
	dropdownCN?: string
	/** @default false */
	isTwoColumn?: boolean
}

function HeadDropdown(props: HeadDropdownProps) {
	const {
		title,
		options,
		wrapperCN,
		dropdownCN,
		isTwoColumn = false
	} = props;

	return (
		<Menu as="div" className={classNames("relative inline-block text-left", wrapperCN)}>
			<div>
				<Menu.Button className="inline-flex w-full justify-center rounded-md text-base font-medium text-white ring-inse hover:bg-primaryColor">
					{title}
					<ChevronDownIcon className="mt-[2px] h-5 w-5 text-white" aria-hidden="true" />
				</Menu.Button>
			</div>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className={
					classNames(
						"absolute left-0 z-10 mt-3 w-max origin-top-right py-3 rounded-md bg-primaryColor bg-opacity-80 border-white border-solid border-[1px] focus:outline-none",
						dropdownCN
					)
				}>
					{
						isTwoColumn ?
							<div className='flex'>
								<div className='flex flex-col'>
									{
										options.slice(0, Math.floor(options.length / 2)).map((item, index) => {
											return (
												<Menu.Item key={index}>
													{({ active }) => (
														item.children ?
															<Menu as="div" className={classNames("relative inline-block text-left", wrapperCN)}>
																<Menu.Button
																	className={classNames(
																		active ? 'bg-primaryColor bg-opacity-80 text-white' : 'text-white',
																		'mx-[10px] px-4 py-2 text-base font-medium rounded-md flex flex-nowrap'
																	)}
																>
																	{item.label}
																	<ChevronRightIcon className="mt-[2px] h-5 w-5 text-white" aria-hidden="true" />
																</Menu.Button>
																<Transition
																	as={Fragment}
																	enter="transition ease-out duration-100"
																	enterFrom="transform opacity-0 scale-95"
																	enterTo="transform opacity-100 scale-100"
																	leave="transition ease-in duration-75"
																	leaveFrom="transform opacity-100 scale-100"
																	leaveTo="transform opacity-0 scale-95"
																>
																	<Menu.Items className="absolute w-48 translate-x-44 -mt-9 z-10 rounded-md bg-primaryColor bg-opacity-80 border-white border-solid border-[1px] focus:outline-none max-h-52 overflow-auto">
																		<div className="py-3 flex flex-col">
																			{
																				item.children.map((item, index) => {
																					return (
																						<Menu.Item key={index}>
																							{({ active }) => (
																								<Menu as="div" className={classNames("relative inline-block text-left", wrapperCN)}>
																									<Link
																										to={item.href}
																										className={classNames(
																											active ? 'bg-primaryColor bg-opacity-80 text-white' : 'text-white',
																											'block mx-[10px] px-4 py-2 text-base font-medium rounded-md'
																										)}
																									>
																										{item.label}
																									</Link>
																								</Menu>
																							)}
																						</Menu.Item>
																					)
																				})
																			}
																		</div>
																	</Menu.Items>
																</Transition>
															</Menu>
															:
															<Link
																to={item.href}
																className={classNames(
																	active ? 'bg-primaryColor bg-opacity-80 text-white' : 'text-white',
																	'block mx-[10px] px-4 py-2 text-base font-medium rounded-md'
																)}
															>
																{item.label}
															</Link>
													)}
												</Menu.Item>
											)
										})
									}
								</div>
								<div className='flex flex-col'>
									{
										options.slice(Math.floor(options.length / 2)).map((item, index) => {
											return (
												<Menu.Item key={index}>
													{({ active }) => (
														item.children ?
															<Menu as="div" className={classNames("relative inline-block text-left", wrapperCN)}>
																<Menu.Button
																	className={classNames(
																		active ? 'bg-primaryColor bg-opacity-80 text-white' : 'text-white',
																		'mx-[10px] px-4 py-2 text-base font-medium rounded-md flex flex-nowrap'
																	)}
																>
																	{item.label}
																	<ChevronRightIcon className="mt-[2px] h-5 w-5 text-white" aria-hidden="true" />
																</Menu.Button>
																<Transition
																	as={Fragment}
																	enter="transition ease-out duration-100"
																	enterFrom="transform opacity-0 scale-95"
																	enterTo="transform opacity-100 scale-100"
																	leave="transition ease-in duration-75"
																	leaveFrom="transform opacity-100 scale-100"
																	leaveTo="transform opacity-0 scale-95"
																>
																	<Menu.Items className="absolute w-48 translate-x-44 -mt-9 z-10 rounded-md bg-primaryColor bg-opacity-80 border-white border-solid border-[1px] focus:outline-none max-h-52 overflow-auto">
																		<div className="py-3 flex flex-col">
																			{
																				item.children.map((item, index) => {
																					return (
																						<Menu.Item key={index}>
																							{({ active }) => (
																								<Menu as="div" className={classNames("relative inline-block text-left", wrapperCN)}>
																									<Link
																										to={item.href}
																										className={classNames(
																											active ? 'bg-primaryColor bg-opacity-80 text-white' : 'text-white',
																											'block mx-[10px] px-4 py-2 text-base font-medium rounded-md'
																										)}
																									>
																										{item.label}
																									</Link>
																								</Menu>
																							)}
																						</Menu.Item>
																					)
																				})
																			}
																		</div>
																	</Menu.Items>
																</Transition>
															</Menu>
															:
															<Link
																to={item.href}
																className={classNames(
																	active ? 'bg-primaryColor bg-opacity-80 text-white' : 'text-white',
																	'block mx-[10px] px-4 py-2 text-base font-medium rounded-md'
																)}
															>
																{item.label}
															</Link>
													)}
												</Menu.Item>
											)
										})
									}
								</div>
							</div>
							:
							options.map((item, index) => {
								return (
									<Menu.Item key={index}>
										{({ active }) => (
											item.children ?
												<Menu as="div" className={classNames("relative inline-block text-left", wrapperCN)}>
													<Menu.Button
														className={classNames(
															active ? 'bg-primaryColor bg-opacity-80 text-white' : 'text-white',
															'mx-[10px] px-4 py-2 text-base font-medium rounded-md flex flex-nowrap'
														)}
													>
														{item.label}
														<ChevronRightIcon className="mt-[2px] h-5 w-5 text-white" aria-hidden="true" />
													</Menu.Button>
													<Transition
														as={Fragment}
														enter="transition ease-out duration-100"
														enterFrom="transform opacity-0 scale-95"
														enterTo="transform opacity-100 scale-100"
														leave="transition ease-in duration-75"
														leaveFrom="transform opacity-100 scale-100"
														leaveTo="transform opacity-0 scale-95"
													>
														<Menu.Items className="absolute w-48 translate-x-44 -mt-9 z-10 rounded-md bg-primaryColor bg-opacity-80 border-white border-solid border-[1px] focus:outline-none max-h-52 overflow-auto">
															<div className="py-3 flex flex-col">
																{
																	item.children.map((item, index) => {
																		return (
																			<Menu.Item key={index}>
																				{({ active }) => (
																					<Menu as="div" className={classNames("relative inline-block text-left", wrapperCN)}>
																						<Link
																							to={item.href}
																							className={classNames(
																								active ? 'bg-primaryColor bg-opacity-80 text-white' : 'text-white',
																								'block mx-[10px] px-4 py-2 text-base font-medium rounded-md'
																							)}
																						>
																							{item.label}
																						</Link>
																					</Menu>
																				)}
																			</Menu.Item>
																		)
																	})
																}
															</div>
														</Menu.Items>
													</Transition>
												</Menu>
												:
												<Link
													to={item.href}
													className={classNames(
														active ? 'bg-primaryColor bg-opacity-80 text-white' : 'text-white',
														'block mx-[10px] px-4 py-2 text-base font-medium rounded-md'
													)}
												>
													{item.label}
												</Link>
										)}
									</Menu.Item>
								)
							})
					}
				</Menu.Items>
			</Transition>
		</Menu>
	)
}

export default HeadDropdown;