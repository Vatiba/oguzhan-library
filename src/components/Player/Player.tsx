import React, { useEffect, useRef, useState } from 'react';
// icons
import { PlayIcon, PauseIcon } from '@heroicons/react/20/solid';
import { secondsToHours } from '@app/utils/helpers';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

type CurrentMusic = {
	currentTime: number
	duration: number
}

type PlayerProps = {
	src: string
}

function Player(props: PlayerProps) {
	const {
		src
	} = props;

	const [currentMusic, setCurrentMusic] = useState<CurrentMusic>({
		currentTime: 0,
		duration: 0
	});
	const [isPlaying, setIsPlaying] = useState(false);

	const audioRef = useRef<HTMLAudioElement>();

	useEffect(() => {
		audioRef.current = new Audio(src);

		audioRef.current.addEventListener('play', () => {
			setIsPlaying(true);
		});

		audioRef.current.addEventListener('pause', () => {
			setIsPlaying(false);
		});

		audioRef.current.addEventListener('loadedmetadata', (e: any) => {
			setCurrentMusic({
				currentTime: e.target.currentTime,
				duration: e.target.duration
			});
		});

		audioRef.current.addEventListener('timeupdate', (e: any) => {
			setCurrentMusic({
				currentTime: e.target.currentTime,
				duration: e.target.duration
			});
		});

		return () => {
			audioRef.current?.pause();
		}
	}, [src]);

	return (
		<div className='flex'>
			<button
				className='rounded-full p-3 bg-secondaryColor text-white'
				onClick={() => {
					if (isPlaying) {
						audioRef.current?.pause();
					} else {
						audioRef.current?.play();
					}
				}}
			>
				{
					isPlaying ?
						<PauseIcon className='h-6 w-6' />
						:
						<PlayIcon className='h-6 w-6' />
				}
			</button>
			<div className='flex flex-col items-center ml-2'>
				<span className='text-base font-medium pb-1'>
					{secondsToHours(currentMusic.currentTime)} / {secondsToHours(currentMusic.duration)}
				</span>
				<Slider
					trackStyle={{ background: '#FF7700' }}
					handleStyle={{
						border: '2px solid #FF7700',
						background: '#FF7700',
						boxShadow: 'none',
						opacity: 1
					}}
					min={0}
					max={currentMusic.duration}
					value={currentMusic.currentTime}
					onChange={(value) => {
						audioRef.current!.currentTime = +value;
					}}
				/>
			</div>
		</div>
	)
}

export default Player;