export interface ProcessState {
    currentStep: number;
    testCount: number;
    checkAll: boolean;
    failed: boolean;
    hints: boolean;
    messagesToDisplay?: string[];

    save(): void;

    isStep(n: number): boolean;
}