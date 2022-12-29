import { WebHomework } from '../../src/WebHomeworkInterface'
import { generateTests } from './tests'

const hw = new WebHomework();
generateTests(hw.config)
hw.runTests()

