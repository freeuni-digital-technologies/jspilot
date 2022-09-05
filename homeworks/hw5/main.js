import { DigitalHomeworkProcess } from '../../src/DigitalHomeworkProcess'
import { generateTests } from './tests'

const hw = new DigitalHomeworkProcess();

generateTests(hw.config)
hw.runTests()

