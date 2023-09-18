import { render } from "./core/render";
import { Component } from "./core/Component";

import {
    inputTitle, 
    inputDescr, 
    sendBtn, 
} from "./components/index";

import './common/style.css';

const app = document.querySelector("#app");

//MAKE WRAPPER FOR FIRST PART OF APP(TAKE DATA)
const getDataHTMLpart = new Component({
    tagName : 'div',
    className : 'getDataHTMLpart'
}).toHtml()
render(getDataHTMLpart, app);

//MAKE WRAPPER FOR DESCR FOR INPUTS
const descrForInputs = new Component({
    tagName : 'div',
    className : 'descrForInputs'
}).toHtml()
render(descrForInputs, getDataHTMLpart);

//MAKE DESCR FOT TITLE INPUT
const descrForInputTitle = new Component({
    tagName : 'h3',
    className : 'descrForInputTitle',
    textContent : 'Title: '
}).toHtml()
render(descrForInputTitle, descrForInputs);

//MAKE DESCR FOT TITLE INPUT
const descrForInputDescr = new Component({
    tagName : 'h3',
    className : 'descrForInputTitle',
    textContent : 'Description: '
}).toHtml()
render(descrForInputDescr, descrForInputs);

//MAKE WRAPPER FOR INPUTS
const inputs = new Component({
    tagName : 'div',
    className : 'inputs--wrapper'
}).toHtml()
render(inputs, getDataHTMLpart);


//RENDER TWO INPUTS
render(inputTitle, inputs);
render(inputDescr, inputs);

//RENDER A BUTTON
render(sendBtn, app);

//MAKE SCREEN FOR TO DO LIST
const screenToDoList = new Component({
    tagName : 'div',
    id : 'screenToDoList'
}).toHtml()

render(screenToDoList,app);

//MAKE SCREEN FOR DONE LIST

const doneTitle = new Component({
    tagName : 'div',
    className : 'DONE',
    textContent : 'DONE'
}).toHtml()

render(doneTitle, app);

const screenDoneList = new Component({
    tagName : 'div',
    id : 'screenDoneList'
}).toHtml()

render(screenDoneList, app);

//!MAKE THE BTN SEND FOR SEND OUR TO DO LIST

const list = [];
const doneList = [];

//MAKE WRAPPER FOR TO DO LIST ELEMENT
sendBtn.addEventListener('click', (e)=> {
    //CREATE ELEMENTS TO PUT INTO DATA FROM INPUTS
    const toDoListWrapper = new Component({
        tagName : 'div',
        className : 'listWrapper'
    }).toHtml()
    render(toDoListWrapper,screenToDoList);
    
    const toDoListTitle = new Component ({
        tagName : 'div',
        textContent : inputTitle.value
    }).toHtml()
    render(toDoListTitle, toDoListWrapper);

    const toDoListDescr = new Component({
        tagName : 'div',
        textContent : inputDescr.value 
    }).toHtml()
    render(toDoListDescr,toDoListWrapper);

    //CREATE BTNS
    const deleteBtn = new Component({
        tagName : 'button',
        className : 'delete-btn',
        textContent : 'DELETE' 
    }).toHtml()
    render(deleteBtn,toDoListWrapper);

    const doneBtn = new Component({
        tagName : 'button',
        className : 'done-btn',
        textContent : 'DONE' 
    }).toHtml()
    render(doneBtn,toDoListWrapper);
    
    list.push(toDoListWrapper);

//!TASK2(CREATE FUNC DELETE FOR DELETE-BTN)
    //DELETE LIST FROM ARR AND DOM
    deleteBtn.addEventListener("click", (e)=> {
    for(const el of list){
        if(e.target.parentElement === el){
            const elindex = list.indexOf(el);

            el.remove();
            list.splice(elindex, elindex + 1);
        }
    }

    for(const el of doneListElChildren){
        if(e.target.parentElement === el){
            const elindex = doneListElChildren.indexOf(el);

            el.remove();
            doneListElChildren.splice(elindex, elindex + 1);
        }
    }
    })
//!
    doneBtn.addEventListener("click", (e)=> {
        //DELETE AND CREATE NEW ELEMENT TO PUT IN DONE LIST
        for(const el of list){
            if(e.target.parentElement === el){
                const doneListWrapper = new Component({
                    tagName : 'div',
                    className : 'doneListWrapper'
                }).toHtml()
                render(doneListWrapper, screenDoneList);

                doneList.push(doneListWrapper);

                const doneListElChildren = Array.from(el.children);

                //DELETE LIST FROM ARR AND DOM
                deleteBtn.addEventListener("click", (e)=> {
                    for(const el of doneList){
                        if(e.target.parentElement === el){
                            const elindex = doneList.indexOf(el);
                
                            el.remove();
                            doneList.splice(elindex, elindex + 1);
                        }
                    }
                })

                for(const child of doneListElChildren){
                    if(child !== doneBtn){
                        doneListWrapper.appendChild(child);
                    }
                }

                const elindex = list.indexOf(el);
                el.remove();
                
                list.splice(elindex, elindex + 1);
            }
        }
    })
})