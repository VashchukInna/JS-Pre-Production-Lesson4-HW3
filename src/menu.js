'use strict';

let createMenu = () => {

    createDiv();
    let ul = createUl();
    createHomeLink(ul);
    createAboutLink(ul);
    createContactsLink(ul);
    createProductsLink(ul);
    createPartnersLink(ul);
};

let createDiv = () => {
    
    let wrapper = document.createElement('div');
    wrapper.id = 'wrapper';
    let parentElement = document.body;
    parentElement.appendChild(wrapper);
};

let createUl = () => {

    let ul = document.createElement('ul');
    ul.className = 'menu';
    document.getElementById('wrapper').appendChild(ul);
    return ul;
};

let createHomeLink = (ul) => {

    let a = document.createElement('a');
    a.text = 'Home';
    a.setAttribute('href', '#home');
    let li = document.createElement('li');  
    li.appendChild(a);
    ul.appendChild(li);
};

let createAboutLink = (ul) => {

    let a = document.createElement('a');
    a.text = 'About';
    a.setAttribute('href', '#about');
    let li = document.createElement('li');  
    li.appendChild(a);
    ul.appendChild(li);
};

let createContactsLink = (ul) => {

    let a = document.createElement('a');
    a.text = 'Contacts';
    a.setAttribute('href', '#contacts');
    let li = document.createElement('li');  
    li.appendChild(a);
    ul.appendChild(li);
};

let createProductsLink = (ul) => {

    let a = document.createElement('a');
    a.text = 'Products';
    a.setAttribute('href', '#products');
    let li = document.createElement('li');  
    li.appendChild(a);
    ul.appendChild(li);
};

let createPartnersLink = (ul) => {

    let a = document.createElement('a');
    a.text = 'Partners';
    a.setAttribute('href', '#partners');
    let li = document.createElement('li');  
    li.appendChild(a);
    ul.appendChild(li);
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
    createDiv,
    createUl,
    createHomeLink,
    createAboutLink,
    createContactsLink,
    createProductsLink,
    createPartnersLink,
    drawActiveMenuItems
};