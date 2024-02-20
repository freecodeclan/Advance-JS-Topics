**Window --->** In JS window is a global object

**DOM --->** Document Object Model

**BOM --->** Browser Object Model (It allows JS to talk to browser about other tha content of page)

**Accessing Elements in DOM --->** 1. getElementByID() 2. getElementByClassName() 3. querySelector() 4. querySelectorAll()
5.getElementByTag()

**Updating Existing Content using JS --->** 1. innerHTML 2. outerHTML 3. textContent 4. innerText

**Adding new Element using JS --->** .createElement('span') method after creating element now adding that element to DOM so we use **.appendChild(span)**

**Creating Text Node --->** Means adding text into new element.. Example:--- **let myPara** = document.createElement('p') ----> myPara.textContent = 'I am Harsh Mehra' --->
content.appendChild(myPara)

**Method used to position new Element --->** **.insertAdjacentHTML()** --- Things to be kept in mind (a) Has to be called with 2 arguments (1) Location/position (2) HTML text/Content
**Positions** 1. beforeBegin 2. afterBegin 3. beforeEnd 4. afterEnd

**.addEventListener() --->** Syntax :--- event_type.addEventListner('event_type' , 'callBack fuction')
**Example** ---> p.addEventListner('click',function(){console.log('I am para')});

**The Default Action --->** This method is used to prevent default actions of any tags or events. **.preventDefault()**

**Document Fragment --->** When you're working with web pages, you often need to create multiple elements and then add them to the document. Now, if you add each element directly to the document, it triggers a reflow each time, which can be inefficient, especially if you're adding a lot of elements at once.

Here's where document fragments come in handy. Instead of adding each element directly to the document, you can create a document fragment, then append your elements to it. Since the fragment isn't part of the main document yet, it doesn't trigger a reflow each time you add an element. Once you've added all your elements to the fragment, you can then append the entire fragment to the document in one go. This saves a lot of time and resources because it only triggers one reflow instead of potentially many.
