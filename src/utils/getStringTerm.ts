export const getStringTerm = (time: number) => {
	const date = new Date(time);
	return `${date.getMonth()}/${date.getFullYear()}`;
};