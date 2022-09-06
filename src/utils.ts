import {MESSAGES} from "./HwInstructions";
// @ts-ignore
import stylesFile from 'url:../homeworks/teststyles.css'
import {ProcessState} from "./Interfaces/ProcessState";

export function setupTestsDiv(config: ProcessState) {
    const styles = [
        'https://unpkg.com/mocha/mocha.css',
        stylesFile
    ]
    styles
        .map(getStyleElement)
        .forEach(e => document.head.appendChild(e))
    const messagesToDisplay = config.messagesToDisplay || Object.keys(MESSAGES)
    const helpOptions = messagesToDisplay.map(m =>
        `<button onclick="showMessage('${m}')">${m}</button>`
    ).join('')
    const testsDiv = `
    <div id="tests" class="container">
        <div id="progress-bar"></div>
        <div id="mocha"></div>
        <div id="help">
            <div id="help-buttons">
                ${helpOptions}
            </div>
            <div id="instructions"></div>
        </div>
    </div>`

    document.body.insertAdjacentHTML('afterbegin', testsDiv)

}

export function getStyleElement(src): HTMLLinkElement {
    let s = document.createElement('link');
    s.setAttribute('rel', 'stylesheet');
    s.setAttribute('href', src)
    return s
}

export function toggle(id: string) {
    const e = document.getElementById(id)!.style;
    e.display = e.display === 'none' ? '' : 'none';
}