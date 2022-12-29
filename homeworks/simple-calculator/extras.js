export function createServerConfig(config) {
	config.isStep = function(i) {
		return i > 2 && i < 8
	}
	return config
}

export function generateServerTests(hw) {

}


export function getScore(test) {
	return 1
}

