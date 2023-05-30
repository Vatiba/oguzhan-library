import React from 'react'
// icons
import { ChevronUpIcon } from '@heroicons/react/24/outline';
// components
import { Disclosure } from '@headlessui/react';
import { useTranslation } from 'react-i18next';
import { Link } from '@tanstack/react-location';
import classNames from 'classnames';
import OptionType from './OptionType';

type AccordionProps = {
   title: string
   options: OptionType
}

function Accordion(props: AccordionProps) {
   const {
      title,
      options
   } = props;

   const { t } = useTranslation('translation');

   return (
      <Disclosure>
         {({ open }) => (
            <>
               <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium hover:bg-primaryColor focus:outline-none focus-visible:ring focus-visible:bg-opacity-80 bg-opacity-60 focus-visible:ring-opacity-75">
                  <span className='text-white text-base'>{title}</span>
                  <ChevronUpIcon
                     className={`${open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-white`}
                  />
               </Disclosure.Button>
               <Disclosure.Panel className="px-4 pt-1 pb-2 text-sm text-gray-500">
                  {
                     options.map((item, index) =>
                        item.children ?
                           <Disclosure key={index}>
                              {({ open }) => (
                                 <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium hover:bg-primaryColor focus:outline-none focus-visible:ring focus-visible:bg-opacity-80 bg-opacity-60 focus-visible:ring-opacity-75">
                                       <span className='text-white text-base'>{t(item.label)}</span>
                                       <ChevronUpIcon
                                          className={`${open ? 'rotate-180 transform' : ''
                                             } h-5 w-5 text-white`}
                                       />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="px-4 pt-1 pb-2 text-sm text-gray-500">
                                       {
                                          item.children && item.children.map((item, index) => {
                                             if (!item.children)
                                                return (
                                                   <a
                                                      href={item.href}
                                                      className={classNames(
                                                         'text-white',
                                                         'block mx-[10px] py-2 text-base font-medium rounded-md'
                                                      )}
                                                      key={index}
                                                   >
                                                      {t(item.label)}
                                                   </a>
                                                )

                                          })
                                       }
                                    </Disclosure.Panel>
                                 </>
                              )}
                           </Disclosure>
                           :
                           <Link
                              to={item.href}
                              key={index}
                              className={classNames(
                                 'text-white',
                                 'block mx-[10px] py-2 text-base font-medium rounded-md'
                              )}
                           >
                              {t(item.label)}
                           </Link>
                     )
                  }
               </Disclosure.Panel>
            </>
         )}
      </Disclosure>
   )
}

export default Accordion;