const globalUtils = {
	wait: ms => new Promise(resolve => setTimeout(resolve, ms)),
	arrToPipedStr: arr => {
		let str = '';
		arr.forEach((item, i) => {
			i !== 0 ? (str += ` | ${item}`) : (str += item);
		});
		return str;
	}
};

export default globalUtils;
