import {generateTests} from './tests'
import {WebHomework} from "../../src/WebHomeworkInterface";

const hw = new WebHomework();

generateTests(hw)
hw.runTests()

