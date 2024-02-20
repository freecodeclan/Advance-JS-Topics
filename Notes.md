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

**Event Loop --->** The event loop is a key component of JavaScript's concurrency model and is responsible for executing JavaScript code, collecting and processing events, and executing queued sub-tasks. It allows JavaScript to be asynchronous and have non-blocking behavior, despite being single-threaded.

Here's a simple explanation:

1. JavaScript engine executes the script from top to bottom. This is the main thread of execution, also known as the "call stack".

2. When it encounters operations like I/O tasks (e.g., fetching data from a server, reading a file, etc.), timers (setTimeout, setInterval), or user interactions (click, keypress events), it offloads these tasks to the Web APIs provided by the browser or Node.js environment.

3. These tasks are executed separately from the main thread. Once they are finished, they are not immediately executed. Instead, they are added to a "Task Queue" (also known as "Callback Queue").

4. The Event Loop constantly checks if the main thread (call stack) is empty and if there are any tasks in the Task Queue. If the call stack is empty and there are tasks waiting in the queue, it dequeues a task from the Task Queue and pushes it to the call stack to be executed.

5. This process continues in a loop, hence the name "Event Loop". It allows JavaScript to handle many tasks without blocking the main thread, providing the illusion of multi-threading in a single-threaded environment.

This mechanism is what allows you to write asynchronous code in JavaScript using callbacks, promises, and async/await, and it's crucial for building responsive web applications.
