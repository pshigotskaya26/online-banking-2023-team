export const getStringTime = (time: number) => {
	const date = new Date(time);
	return `${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;
};