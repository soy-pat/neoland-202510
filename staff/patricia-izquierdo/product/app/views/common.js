// dom

function createElement(tagName) {
    return document.createElement(tagName)
}

function changeDisplay(element, value) {
    element.style.display = value
}

function setTextContent(element, text) {
    element.textContent = text
}

function addChild(element, childElement) {
    element.appendChild(childElement)
}

function removeChild(element, childElement) {
    element.removeChild(childElement)
}

function setClass(element, clazz) {
    element.className = clazz
}

function createTextNode(text) {
    return document.createTextNode(text)
}

function setFor(element, value) {
    element.htmlFor = value
}

function setId(element, value) {
    element.id = value
}

function setType(element, value) {
    element.type = value
}

function getType(element) {
    return element.type
}

function getValue(element) {
    return element.value
}

function reset(element) {
    element.reset()
}

function setSource(element, value) {
    element.src = value
}

function setStep(element, value) {
    element.step = value
}

// interface

function createView() {
    return createElement('div')
}

function hideView(view) {
    changeDisplay(view, 'none')
}

function showView(view) {
    changeDisplay(view, '')
}

function createTitle() {
    return createElement('h1')
}

function createTitle2() {
    return createElement('h2')
}

function createParagraph() {
    return createElement('p')
}

function createNavigation() {
    return createElement('nav')
}

function createLink() {
    const link = createElement('a')
    link.href = ''

    return link
}

function createForm() {
    return createElement('form')
}

function createLabel() {
    return createElement('label')
}

function createInput() {
    return createElement('input')
}

function createButton() {
    return createElement('button')
}

function createPanel() {
    return createElement('div')
}

function createUnorderedList() {
    return createElement('ul')
}

function createListItem() {
    return createElement('li')
}

function createImage() {
    return createElement('img')
}