import {ProcessState} from "./Interfaces/ProcessState";

export class DigitalHwProcessState implements ProcessState{
    checkAll: boolean = false;
    currentStep: number = 0;
    failed: boolean = false;
    hints: boolean = false;
    testCount: number = 0;


    constructor() {
        this.readData();
    }

    isStep(n: number): boolean {
        this.testCount++;
        if(this.checkAll) {
            return n < this.currentStep;
        }
        return n == this.currentStep;
    }

    save(): void {
        localStorage.setItem('config', JSON.stringify(this));
    }

    readData(): void {
        const documentConfig = JSON.parse(localStorage.getItem('config')!) || {currentStep: 1};
        Object.keys(documentConfig).forEach(elem => {
            return this[elem] = documentConfig[elem];
        });
        this.testCount = 0
        this.failed = false
    }

    increaseStep() {
        this.currentStep++;
    }

}