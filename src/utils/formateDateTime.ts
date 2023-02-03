export const getStringDate = (time: number) => {
	const date = new Date(time);
	return `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`;
};

export const getStringTerm = (time: number) => {
	const date = new Date(time);
	return `${date.getMonth()}/${date.getFullYear()}`;
};

export const getStringTime = (time: number) => {
	const date = new Date(time);
	return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};