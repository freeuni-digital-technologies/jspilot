import {ProcessState} from "./ProcessState";
import 'mocha';

export interface HomeworkInterface {
    config: ProcessState;

    runTests(): void;

    setHints(hints: string): void;

    checkPath(): void;

    setupTestDiv(): void;

    nextStep(): void;

    prevStep(): void;
}