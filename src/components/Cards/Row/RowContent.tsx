import React from 'react';
// icons
import { CalendarIcon, HeartIcon, EyeIcon, ArrowDownIcon, PlayIcon } from '@heroicons/react/20/solid';
// components
import Btn from '@app/components/Buttons/Btn';
// hooks
import { useTranslation } from 'react-i18next';

export type RowContentProps = {
   imgSrc: string | null
   alt: string
   title: string
   subTitles: string[]
   text: string
   date: string | number
   likeCount: number
   viewedCount: number
   downloadCount: number
   onClick?: () => void
   onDownload?: () => void
   onRead?: () => void
   onPlay?: () => void
   onClickLike?: () => void
}

function RowContent(props: RowContentProps) {
   const {
      date,
      downloadCount,
      imgSrc,
      alt,
      likeCount,
      subTitles,
      text,
      title,
      viewedCount,
      onClick,
      onDownload,
      onPlay,
      onRead,
      onClickLike,
   } = props;

   const { t } = useTranslation('translation');

   return (
      <>
         {
            onPlay &&
            <div
               className='absolute w-full h-full hidden md:flex rounded-md justify-center items-center bg-accentColor cursor-pointer transition-opacity opacity-0 hover:opacity-50'
               onClick={() => onPlay()}
            >
               <div className='bg-secondaryColor p-3 rounded-full'>
                  <PlayIcon className='h-6 w-6 text-white' aria-hidden="true" />
               </div>
            </div>
         }
         <div className='flex flex-col justify-center items-center sm:flex-row p-2'>
            <img
               className='rounded-md sm:rounded-r-none sm:rounded-l-md cursor-pointer max-h-64 sm:h-auto sm:max-w-[130px] sm:min-w-[120px]'
               src={imgSrc || ''}
               alt={alt}
               onClick={() => onClick?.()}
            />
            <div className='flex flex-col w-full'>
               <div className='sm:pr-36 flex flex-col sm:pl-[15px] mr-auto'>
                  <h3 className='text-xl font-medium line-clamp-2'>
                     {title}
                  </h3>
                  <div className='pb-3 flex flex-col'>
                     {
                        subTitles.map((item, index) => {
                           return (
                              <span
                                 className='text-base font-normal pt-1'
                                 key={index}
                              >
                                 {item}
                              </span>
                           )
                        })
                     }
                  </div>
                  <p className='text-sm font-light line-clamp-3' dangerouslySetInnerHTML={{ __html: text }} />
               </div>
               <div className='flex justify-between w-full flex-wrap pt-2 sm:pl-[15px]'>
                  <div className='flex flex-col'>
                     <span className='flex items-center pt-0 sm:pt-4'>
                        <CalendarIcon className="h-4 w-4 text-textColor mr-1" aria-hidden="true" />
                        <span className='text-accentColor'>
                           {date}
                        </span>
                     </span>
                     <span className='static sm:absolute right-0 top-0 flex sm:p-3'>
                        {
                           likeCount !== undefined &&
                           <button
                              className='flex text-sm font-normal leading-[16px] mr-2'
                              onClick={() => onClickLike?.()}
                           >
                              <HeartIcon className="h-4 w-4 text-textColor mr-1" aria-hidden="true" />
                              {likeCount}
                           </button>
                        }
                        {
                           viewedCount !== undefined &&
                           <span className='flex text-sm font-normal leading-[16px] mr-2'>
                              <EyeIcon className="h-4 w-4 text-textColor mr-1" aria-hidden="true" />
                              {viewedCount}
                           </span>
                        }
                        {
                           downloadCount !== undefined &&
                           <span className='flex text-sm font-normal leading-[16px] mr-2'>
                              <ArrowDownIcon className="h-4 w-4 text-textColor mr-1" aria-hidden="true" />
                              {downloadCount}
                           </span>
                        }
                     </span>
                  </div>
                  <div className='flex items-center sm:pt-0 pt-2'>
                     {
                        onRead &&
                        <div className='pr-2'>
                           <Btn
                              txt={t('read') as string}
                              onClick={(e) => {
                                 e.preventDefault();
                                 onRead();
                              }}
                           />
                        </div>
                     }
                     {
                        onDownload &&
                        <div className='pr-2'>
                           <Btn
                              txt={t('download') as string}
                              onClick={(e) => {
                                 e.preventDefault();
                                 onDownload();
                              }}
                              downLoad
                           />
                        </div>
                     }
                     {
                        onPlay &&
                        <button
                           className='flex md:hidden rounded-md justify-center items-center'
                           onClick={() => onPlay()}
                        >
                           <div className='bg-secondaryColor p-2 rounded-full'>
                              <PlayIcon className='h-6 w-6 text-white' aria-hidden="true" />
                           </div>
                        </button>
                     }
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default RowContent;