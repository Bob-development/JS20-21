import { Component } from "../../core/Component";

import "./Btn.css";

export const sendBtn = new Component({
    tagName : 'button',
    id : 'send--btn',
    textContent : 'Send'
}).toHtml()
