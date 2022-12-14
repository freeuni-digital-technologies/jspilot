import {generateTests} from './tests'
import {createServerConfig, generateServerTests, getScore} from './extras'
import {setUpServer} from "../../src/SetUpServer";
import {WebHomework} from "../../src/WebHomeworkInterface";


const hw = new WebHomework()

hw.config = createServerConfig(hw.config)

const launch = setUpServer()

generateTests(hw)

generateServerTests(hw)
launch(getScore)
