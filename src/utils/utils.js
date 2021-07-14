export const formatDuration = (duration) => {
	const minutes = (duration % 60).toString().padStart(2, '0');
	const hours = Math.floor(duration / 60)
		.toString()
		.padStart(2, '0');
	return `${hours}:${minutes} hours`;
};
