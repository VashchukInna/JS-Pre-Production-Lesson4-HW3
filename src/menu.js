'use strict';

let createMenu = () => {

    createDiv();
    let rootElement = createUl();
    createLinkInMarkedList(rootElement, 'Home');
    createLinkInMarkedList(rootElement, 'About');
    createLinkInMarkedList(rootElement, 'Contacts');
    createLinkInMarkedList(rootElement, 'Products');
    createLinkInMarkedList(rootElement, 'Partners');
};

let createDiv = () => {

    let wrapper = document.createElement('div');
    wrapper.id = 'wrapper';

    let parentElement = document.body;
    parentElement.appendChild(wrapper);
};

let createUl = () => {

    let rootElement = document.createElement('ul');
    rootElement.className = 'menu';

    document.getElementById('wrapper').appendChild(rootElement);
    return rootElement;
};

/*
    This function creates marked down list in rootElement with reference to hrefText
*/

let createLinkInMarkedList = (rootElement, hrefText) => {

     let a = document.createElement('a');
     a.text = hrefText;
     a.setAttribute('href', '#' + hrefText.toLowerCase());

     let li = document.createElement('li');  
     li.appendChild(a);

     rootElement.appendChild(li);
};

let drawActiveMenuItems = () => {

    let activeMenuItems = document.getElementsByTagName('a');
    for (let i = 0; i < activeMenuItems.length; i++) {

        let href = activeMenuItems[i].href;

        if (href.indexOf(location.hash)+1) {
            activeMenuItems[i].style.color = 'red';
            return true;
        }
    }
    return false;
};

export default {
    createMenu,
    drawActiveMenuItems
};