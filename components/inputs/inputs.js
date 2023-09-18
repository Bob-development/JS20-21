import { Component } from "../../core/Component";

import "./inputs.css";

const inputTitle = new Component({
    tagName : 'input',
    id : 'input--title',
    placeholder : 'Title...'
}).toHtml()

const inputDescr = new Component({
    tagName : 'input',
    id : 'input--descr',
    placeholder : 'Description...'
}).toHtml()

export {inputDescr, inputTitle};