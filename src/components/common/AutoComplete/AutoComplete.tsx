import { Fragment, useEffect, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { useNavigate, useSearch } from '@tanstack/react-location'

type Option<T> = {
	id: T
	name: string
}

type AutoCompleteProps<T> = {
	options: Option<T | string>[]
	onChange?: (option: Option<T | string> | string) => void
	defaultValue?: Option<T | string>,
	urlKey?: string
	placeholder?: string
}

function AutoComplete<T extends string | number>(props: AutoCompleteProps<T>) {
	const {
		options,
		onChange,
		defaultValue = '',
		urlKey = '',
		placeholder
	} = props;

	const search = useSearch();
	const navigate = useNavigate();
	const [selected, setSelected] = useState<AutoCompleteProps<T>['options'][0] | string>(defaultValue);
	const [query, setQuery] = useState('');

	const filteredPeople =
		query === ''
			? options
			: options.filter((person) =>
				person.name
					.toLowerCase()
					.replace(/\s+/g, '')
					.includes(query.toLowerCase().replace(/\s+/g, ''))
			)

	useEffect(() => {
		if (urlKey && typeof search[urlKey] === 'number' ? (search[urlKey] as number) >= 0 : search[urlKey]) {
			const option = options.find(item => item.id === search[urlKey]);
			if (option) {
				setSelected({
					id: option.id,
					name: option.name
				})
			}
		} else {
			setSelected('')
		}
	}, [urlKey, search]);

	return (
		<Combobox value={selected} onChange={(value) => {
			setSelected(value);
			onChange?.(value);
			urlKey &&
				navigate({
					search(prev) {
						return {
							...prev,
							[urlKey]: typeof value === 'string' ? value : value.id
						}
					},
				})
		}}>
			<div className="relative mt-1">
				<div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left border sm:text-sm">
					<Combobox.Input
						className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900"
						displayValue={(option) =>
							(option as any)?.name && (option as any)?.id !== '' ?
								(option as any)?.name
								:
								undefined
						}
						onChange={(event) => setQuery(event.target.value)}
						placeholder={placeholder}
					/>
					<Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
						<ChevronUpDownIcon
							className="h-5 w-5 text-gray-400"
							aria-hidden="true"
						/>
					</Combobox.Button>
				</div>
				<Transition
					as={Fragment}
					leave="transition ease-in duration-100"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
					afterLeave={() => setQuery('')}
				>
					<Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base border ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-20">
						{filteredPeople.length === 0 && query !== '' ? (
							<div className="relative cursor-default select-none py-2 px-4 text-gray-700">
								Nothing found.
							</div>
						) : (
							filteredPeople.map((person) => (
								<Combobox.Option
									key={person.id}
									className={({ active }) =>
										`relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-secondaryColor text-white' : 'text-gray-900'
										}`
									}
									value={person}
								>
									{({ selected, active }) => (
										<>
											<span
												className={`block truncate ${selected ? 'font-medium' : 'font-normal'
													}`}
											>
												{person.name}
											</span>
											{selected ? (
												<span
													className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-secondaryColor'
														}`}
												>
													<CheckIcon className="h-5 w-5" aria-hidden="true" />
												</span>
											) : null}
										</>
									)}
								</Combobox.Option>
							))
						)}
					</Combobox.Options>
				</Transition>
			</div>
		</Combobox>
	)
}

export default AutoComplete