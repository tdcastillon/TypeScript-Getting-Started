function getInputValue(elementId: string): string {
    let inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementId);
    return inputElement.value;
}

function loggger(message: string): void {
    console.log(message);
}

export { getInputValue as getValue, loggger};