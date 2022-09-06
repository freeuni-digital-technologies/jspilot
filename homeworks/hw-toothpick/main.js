import { WebHomework } from '../../src/WebHomeworkInterface'
import { generateTests } from './tests'
import {DigitalHwProcessState} from "../../src/DigitalHwProcessState";

const config = new DigitalHwProcessState()
config.messagesToDisplay = ['კონსოლის-გახსნა', 'კონსოლის-გამოყენება']
const hw = new WebHomework(config);
generateTests(hw.config)
hw.runTests()

