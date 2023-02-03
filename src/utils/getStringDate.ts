export const getStringDate = (time: number) => {
	const date = new Date(time);
	return `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`;
};