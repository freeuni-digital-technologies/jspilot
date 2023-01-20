export function createServerConfig(config) {
	config.isStep = function(i) {
		return i > 1
	}
	config.server = true
	return config
}

export function generateServerTests(hw) {

}


export function getScore(test) {
	return 1
}

