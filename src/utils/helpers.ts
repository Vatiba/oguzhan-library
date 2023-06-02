export const secondsToHours = (sec?: number) => {
	if (!sec) return '00:00:00';
	sec = Math.trunc(+sec);
	const hours = Math.floor(sec / 60 / 60);
	const minutes = Math.floor(sec / 60);
	const seconds = sec % 60;

	return (
		hours.toString().padStart(2, '0') +
		":" +
		minutes.toString().padStart(2, '0') +
		":" +
		seconds.toString().padStart(2, '0')
	);
}

export const isNumber = (x: any): x is number => {
	return typeof x === 'number' && !Number.isNaN(Number(x));
}

export const downloadFile = (filePath: string) => {
	var link = document.createElement('a');
	link.href = filePath;
	link.download = filePath.substr(filePath.lastIndexOf('/') + 1);
	link.click();
}