"use strict";

import {
    arryLi
} from "./arryBase.js";

//


const inpDocType = document.querySelector("#inpDocType"),
    divPageTypes = document.createElement('div'),
    divTypes = document.createElement('div'),
    resultTypesDiv = document.createElement('div'),
    noDocDiv = document.querySelector('#noDocDiv');

inpDocType.addEventListener('click', (e, i, id = (`checkbox`), returnIdDiv = (`label`)) => {
    const clickE = e.target.dataset.show;

    switch (clickE) {
        case 'false':
            divPageTypes.dataset.show = true;
            divPageTypes.dataset.pressed = 'divPageTypes';
            inpDocType.dataset.show = true;
            divPageTypes.classList = 'showPage';
            divTypes.classList = 'showLi';

            arryLi.forEach(elements => {
                i = Math.floor(1000 * Math.random());
                divTypes.appendChild(addLiFunc(elements, (id + i), (returnIdDiv + i)));
            });
            
            divPageTypes.appendChild(divTypes);
            noDocDiv.appendChild(divPageTypes);
            break;
        case 'true':
            hiddenFunc(e);
            break;
    }

});

divPageTypes.addEventListener('click', e => {
    const clickELabel = e.target.dataset.pressed;
    const clickECheckbox = e.target.type;

    switch (clickELabel || clickECheckbox) {
        case 'divPageTypes':
            divPageTypes.classList = 'hiddenElement';
            divTypes.classList = 'hiddenElement';
            break;

        case 'checkbox':
            resultTypesDiv.classList = 'checkedTypeDiv';
            searchCheckbox(e, e.target.checked);
            break;
    }

});

resultTypesDiv.addEventListener('click', (e, returnIdDiv = 'returnIdDiv') => {
    removeTypesF(`${returnIdDiv}${e.target.id}`);
    const changess = document.querySelector(`#${e.target.id}`);
    changess.checked = false;
});

function searchCheckbox(e, clickECheckbox, labelText, returnId = ('return'), returnIdDiv = 'returnIdDiv') {

    switch (clickECheckbox) {
        case true:
            labelText = e.target.labels[0].outerText;
            resultTypesDiv.appendChild(addLiFunc(
                labelText,
                `${e.target.id}`,
                `${returnIdDiv}${e.target.id}`,
                true
            ));
            noDocDiv.appendChild(resultTypesDiv);
            break;

        case false:
            removeTypesF(`${returnIdDiv}${e.target.id}`);
            break;
    }
}

function addLiFunc(e, id, returnIdDiv, checkedss = false,) {
    const text = document.createTextNode(e);
    const checkbox = document.createElement('input');
    const hr = document.createElement('hr');
    const label = document.createElement('label');
    const li = document.createElement('li');
    const labelLiDiv = document.createElement('div');
    checkbox.type = ('checkbox');
    checkbox.id = id;
    checkbox.checked = checkedss;
    labelLiDiv.id = returnIdDiv;
    label.htmlFor = id;
    label.dataset.pressed = 'checkbox';

    labelLiDiv.appendChild(hr);
    li.appendChild(checkbox);
    label.appendChild(text);
    li.appendChild(label);
    labelLiDiv.appendChild(li);

    return labelLiDiv;
}

function hiddenFunc(e) {
    divPageTypes.classList = 'showPage';
    divTypes.classList = 'showLi';
}

function removeTypesF(e) {
    const removTage = document.querySelector(`#${e}`);
    removTage.remove();
}

