import {ProcessState} from "./Interfaces/ProcessState";
import {HomeworkInterface} from "./Interfaces/HomeworkInterface";
import {DigitalHwProcessState} from "./DigitalHwProcessState";
import {WebHomework} from "./WebHomeworkInterface";
import {toggle, setupTestsDiv} from "./utils";
import 'mocha';

export function setUpHomeworkInterface(config?: ProcessState, homework?: HomeworkInterface): HomeworkInterface {
    if(!config) {
        config = new DigitalHwProcessState();
    }

    mocha.setup("bdd");

    if(!homework) {
        homework = new WebHomework(config);
    }

    (window as any).homework = homework;
    (window as any).config = homework.config;

    homework.checkPath();
    setupTestsDiv();
    toggle("help");

    return homework;
}

