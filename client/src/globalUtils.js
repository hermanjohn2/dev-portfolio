const globalUtils = {
	wait: ms => new Promise(resolve => setTimeout(resolve, ms))
};

export default globalUtils;
