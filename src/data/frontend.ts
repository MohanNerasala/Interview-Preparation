import type { Topic } from '../types';

export const frontendTopic: Topic = {
  id: 'frontend',
  number: '05',
  title: 'Frontend Development',
  description: 'HTML, CSS, and JavaScript interview preparation.',
  icon: 'Globe',
  subtopics: [
    {
      id: 'html',
      title: 'HTML',
      description: 'Structure, semantics, forms, and accessibility.',
      concepts: [
        {
          id: 'fe-what-is-html', title: 'What is HTML?', description: 'Introduction to HyperText Markup Language.', difficulty: 'Essential', studyTime: '3 minutes',
          definition: 'HTML (HyperText Markup Language) is the standard markup language for creating web pages.',
          interviewAnswer: 'HTML is the standard markup language that defines the structure and content of web pages. It uses elements (tags) to organize content like headings, paragraphs, images, links, and forms. HTML5 introduced semantic elements like <header>, <nav>, <main>, <section>, and <footer>.',
          explanation: 'HTML provides the skeleton of a web page. CSS adds styling, and JavaScript adds interactivity.',
          codeExample: '<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>My Page</title>\n</head>\n<body>\n    <header>\n        <h1>Welcome</h1>\n    </header>\n    <main>\n        <p>This is a paragraph.</p>\n    </main>\n</body>\n</html>',
          questions: [
            { id: 'fe-q1', question: 'What is HTML and what is it used for?', answer: 'HTML (HyperText Markup Language) is the standard language for creating web pages. It defines the structure and content using elements/tags. Browsers interpret HTML to display text, images, links, forms, and multimedia content.', difficulty: 'Essential' },
            { id: 'fe-q2', question: 'What is the difference between HTML and HTML5?', answer: 'HTML5 is the latest version with new features: semantic elements (header, nav, main, footer, article, section), multimedia (audio, video without plugins), new form input types (date, email, range), Canvas and SVG, local storage, geolocation, and web workers.', difficulty: 'Common' },
          ]
        },
        {
          id: 'fe-semantic-html', title: 'Semantic HTML', description: 'Meaningful elements for better structure and SEO.', difficulty: 'Essential', studyTime: '5 minutes',
          definition: 'Semantic HTML uses elements that describe their meaning, making the page structure clear to browsers, search engines, and screen readers.',
          interviewAnswer: 'Semantic HTML uses meaningful tags like <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> instead of generic <div> and <span>. This improves accessibility for screen readers, SEO for search engines, and code readability for developers.',
          explanation: 'Semantic elements describe the purpose of content, making it easier for machines and humans to understand the page structure.',
          codeExample: '<!-- Non-semantic -->\n<div id="header">...</div>\n<div class="nav">...</div>\n<div id="main">...</div>\n\n<!-- Semantic (better) -->\n<header>...</header>\n<nav>...</nav>\n<main>\n  <article>\n    <section>...</section>\n  </article>\n  <aside>...</aside>\n</main>\n<footer>...</footer>',
          questions: [
            { id: 'fe-q3', question: 'What is semantic HTML and why is it important?', answer: 'Semantic HTML uses tags that convey meaning (header, nav, main, article, footer) instead of generic divs. Benefits: 1) Accessibility: Screen readers can navigate the page structure. 2) SEO: Search engines understand content hierarchy. 3) Maintainability: Code is more readable and organized.', difficulty: 'Essential' },
            { id: 'fe-q4', question: 'What is the difference between div and span?', answer: 'div is a block-level element — takes full width, starts on a new line. Used for grouping large sections.\nspan is an inline element — takes only the space needed, stays in the flow. Used for styling parts of text.\nBoth are non-semantic containers.', difficulty: 'Essential' },
          ]
        },
        {
          id: 'fe-html-forms', title: 'Forms and Input Types', description: 'Form elements, input types, validation, and labels.', difficulty: 'Essential', studyTime: '8 minutes',
          definition: 'HTML forms collect user input and send data to a server. They use <form>, <input>, <label>, <select>, <textarea>, and <button> elements.',
          interviewAnswer: 'HTML forms use the <form> element with action and method attributes. Input types include text, password, email, number, date, checkbox, radio, and file. Labels associate text with inputs using the "for" attribute. HTML5 added built-in validation with required, pattern, min, max, and minlength attributes.',
          explanation: 'Forms are essential for user interaction. Proper labeling and validation improve usability and accessibility.',
          codeExample: '<form action="/submit" method="POST">\n  <label for="name">Name:</label>\n  <input type="text" id="name" name="name" required />\n\n  <label for="email">Email:</label>\n  <input type="email" id="email" name="email" required />\n\n  <label for="age">Age:</label>\n  <input type="number" id="age" name="age" min="18" max="100" />\n\n  <button type="submit">Submit</button>\n</form>',
          questions: [
            { id: 'fe-q5', question: 'What are the different input types in HTML5?', answer: 'HTML5 input types: text, password, email, number, tel, url, date, time, datetime-local, month, week, color, range, file, search, hidden, checkbox, radio, submit, reset, button. Each provides built-in validation and appropriate keyboard on mobile devices.', difficulty: 'Common' },
            { id: 'fe-q6', question: 'What is the difference between GET and POST methods?', answer: 'GET: Appends data to URL, visible in address bar, limited data size, can be bookmarked, used for fetching data.\nPOST: Sends data in request body, not visible in URL, no size limit, cannot be bookmarked, used for submitting sensitive data or creating resources.', difficulty: 'Essential' },
          ]
        },
        {
          id: 'fe-block-inline', title: 'Block vs Inline Elements', description: 'Understanding element display behavior.', difficulty: 'Essential', studyTime: '3 minutes',
          definition: 'Block elements take full width and start on a new line. Inline elements take only needed space and stay in the flow.',
          interviewAnswer: 'Block elements (div, h1-h6, p, section, form) take the full available width and start on a new line. Inline elements (span, a, strong, em, img) only take the space their content needs and remain in the text flow. Block elements can contain inline elements, but inline elements should not contain block elements.',
          explanation: 'Understanding this distinction is fundamental to CSS layout.',
          questions: [
            { id: 'fe-q7', question: 'Name some block-level and inline elements.', answer: 'Block-level: div, p, h1-h6, section, article, header, footer, form, ul, ol, li, table.\nInline: span, a, strong, em, b, i, img, input, label, button, br, code.\nBlock takes full width; inline takes only content width.', difficulty: 'Essential' },
          ]
        }
      ]
    },
    {
      id: 'css',
      title: 'CSS',
      description: 'Layouts, Flexbox, Grid, positioning, and responsive design.',
      concepts: [
        {
          id: 'fe-box-model', title: 'CSS Box Model', description: 'Content, padding, border, and margin.', difficulty: 'Essential', studyTime: '5 minutes',
          definition: 'Every HTML element is a box with four layers: content, padding (space inside border), border, and margin (space outside border).',
          interviewAnswer: 'The CSS Box Model defines every element as a box with: Content (the actual text/image), Padding (space between content and border), Border (the edge of the element), and Margin (space outside the border). By default, width/height only apply to content. Using box-sizing: border-box makes width/height include padding and border.',
          explanation: 'Understanding the box model is critical for CSS layouts. box-sizing: border-box is the modern best practice.',
          codeExample: '.box {\n  width: 200px;\n  padding: 20px;\n  border: 2px solid #333;\n  margin: 10px;\n  box-sizing: border-box; /* width includes padding + border */\n}\n\n/* Without border-box: total width = 200 + 40 + 4 = 244px */\n/* With border-box: total width = 200px (padding + border inside) */',
          questions: [
            { id: 'fe-q8', question: 'What is the CSS Box Model?', answer: 'The CSS Box Model has four layers around every element:\n1) Content: The actual content (text, image)\n2) Padding: Space between content and border\n3) Border: Edge of the element\n4) Margin: Space outside the border\nTotal width = content + padding-left + padding-right + border-left + border-right + margin-left + margin-right (without border-box).', difficulty: 'Essential' },
            { id: 'fe-q9', question: 'What is box-sizing: border-box?', answer: 'By default (content-box), width only applies to content. Padding and border are added on top, making the total size larger.\nWith border-box, width includes content + padding + border. This makes sizing predictable and is the modern standard. Most CSS resets include: * { box-sizing: border-box; }', difficulty: 'Essential' },
          ]
        },
        {
          id: 'fe-flexbox', title: 'Flexbox', description: 'One-dimensional layout for alignment and distribution.', difficulty: 'Essential', studyTime: '8 minutes',
          definition: 'Flexbox is a one-dimensional layout system for distributing space and aligning items along a row or column.',
          interviewAnswer: 'Flexbox is a CSS layout model for arranging items in a row or column with flexible sizing. Set display: flex on the container. Key properties: flex-direction (row/column), justify-content (main axis alignment), align-items (cross axis alignment), flex-wrap (wrapping), and gap (spacing between items).',
          explanation: 'Flexbox simplifies centering, spacing, and responsive layouts. It works on a single axis (row or column).',
          codeExample: '.container {\n  display: flex;\n  justify-content: center;    /* Main axis */\n  align-items: center;        /* Cross axis */\n  gap: 16px;                  /* Space between items */\n  flex-wrap: wrap;            /* Wrap to next line */\n}\n\n.item {\n  flex: 1;                    /* Equal width */\n}\n\n/* Perfect centering */\n.center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}',
          questions: [
            { id: 'fe-q10', question: 'What is Flexbox and when would you use it?', answer: 'Flexbox is a one-dimensional CSS layout system. Use it for: centering elements, distributing space evenly, aligning items in a row or column, creating navigation bars, equal-height columns, and responsive card layouts. Set display: flex on the parent container.', difficulty: 'Essential' },
            { id: 'fe-q11', question: 'What is the difference between justify-content and align-items?', answer: 'justify-content aligns items along the main axis (horizontal by default). Options: flex-start, flex-end, center, space-between, space-around, space-evenly.\nalign-items aligns items along the cross axis (vertical by default). Options: flex-start, flex-end, center, stretch, baseline.', difficulty: 'Essential' },
          ]
        },
        {
          id: 'fe-position', title: 'CSS Position', description: 'Static, relative, absolute, fixed, and sticky positioning.', difficulty: 'Essential', studyTime: '5 minutes',
          definition: 'The position property controls how an element is positioned in the document.',
          interviewAnswer: 'CSS position values: static (default, normal flow), relative (offset from normal position, keeps space), absolute (removed from flow, positioned relative to nearest positioned ancestor), fixed (removed from flow, positioned relative to viewport, stays on scroll), sticky (switches between relative and fixed based on scroll position).',
          explanation: 'Understanding positioning is essential for overlays, tooltips, sticky headers, and complex layouts.',
          questions: [
            { id: 'fe-q12', question: 'What is the difference between relative, absolute, and fixed positioning?', answer: 'relative: Positioned relative to its normal position. Takes up original space.\nabsolute: Removed from flow, positioned relative to the nearest ancestor with position: relative/absolute/fixed. Doesn\'t take up space.\nfixed: Removed from flow, positioned relative to the browser viewport. Stays fixed during scrolling.', difficulty: 'Essential' },
            { id: 'fe-q13', question: 'What is position: sticky?', answer: 'Sticky positioning is a hybrid of relative and fixed. The element scrolls with the page until it reaches a specified offset (e.g., top: 0), then it "sticks" in place like position: fixed. When its container scrolls past, it scrolls away. Commonly used for sticky navigation headers.', difficulty: 'Common' },
          ]
        },
        {
          id: 'fe-responsive', title: 'Responsive Design', description: 'Media queries, fluid layouts, and mobile-first approach.', difficulty: 'Essential', studyTime: '5 minutes',
          definition: 'Responsive design makes websites adapt to different screen sizes using fluid layouts, flexible images, and media queries.',
          interviewAnswer: 'Responsive design ensures a website looks good on all devices. Key techniques: 1) Use relative units (%, rem, vw/vh), 2) Media queries to apply styles at specific breakpoints, 3) Flexbox/Grid for flexible layouts, 4) Mobile-first approach (design for mobile, then add styles for larger screens).',
          explanation: 'Mobile-first means writing base styles for mobile, then using min-width media queries to add styles for tablets and desktops.',
          codeExample: '/* Mobile-first approach */\n.container {\n  padding: 16px;\n}\n\n/* Tablet (768px+) */\n@media (min-width: 768px) {\n  .container {\n    padding: 24px;\n    max-width: 768px;\n    margin: 0 auto;\n  }\n}\n\n/* Desktop (1024px+) */\n@media (min-width: 1024px) {\n  .container {\n    max-width: 1200px;\n  }\n}',
          questions: [
            { id: 'fe-q14', question: 'What are media queries?', answer: 'Media queries apply CSS rules based on device characteristics like screen width. They enable responsive design by changing layouts at specific breakpoints.\nExample: @media (max-width: 768px) { .sidebar { display: none; } }\nMobile-first uses min-width, desktop-first uses max-width.', difficulty: 'Essential' },
          ]
        }
      ]
    },
    {
      id: 'javascript',
      title: 'JavaScript',
      description: 'Variables, functions, closures, promises, and async programming.',
      concepts: [
        {
          id: 'fe-var-let-const', title: 'var vs let vs const', description: 'Variable declarations and scoping rules.', difficulty: 'Essential', studyTime: '5 minutes',
          definition: 'JavaScript has three ways to declare variables: var (function-scoped, hoisted), let (block-scoped, hoisted but not initialized), const (block-scoped, cannot be reassigned).',
          interviewAnswer: 'var is function-scoped, hoisted with undefined, can be redeclared. let is block-scoped, hoisted but not initialized (temporal dead zone), cannot be redeclared. const is block-scoped, must be initialized, cannot be reassigned (but objects/arrays can be mutated). Best practice: Use const by default, let when reassignment is needed, avoid var.',
          explanation: 'Understanding scoping and hoisting is fundamental to JavaScript. const doesn\'t mean immutable — it means the binding cannot change.',
          codeExample: '// var — function-scoped, hoisted\nvar x = 10;\nvar x = 20;  // OK, can redeclare\n\n// let — block-scoped\nlet y = 10;\n// let y = 20;  // Error: cannot redeclare\ny = 20;  // OK, can reassign\n\n// const — block-scoped, cannot reassign\nconst z = 10;\n// z = 20;  // Error: cannot reassign\n\nconst arr = [1, 2, 3];\narr.push(4);  // OK, mutating the array\n// arr = [5, 6];  // Error: cannot reassign',
          questions: [
            { id: 'fe-q15', question: 'What is the difference between var, let, and const?', answer: 'var: Function-scoped, hoisted (initialized as undefined), can be redeclared and reassigned.\nlet: Block-scoped, hoisted (but in temporal dead zone), cannot be redeclared, can be reassigned.\nconst: Block-scoped, must be initialized at declaration, cannot be reassigned.\nBest practice: const > let > var.', difficulty: 'Essential' },
            { id: 'fe-q16', question: 'What is hoisting?', answer: 'Hoisting is JavaScript\'s behavior of moving declarations to the top of their scope before execution. var declarations are hoisted and initialized as undefined. let and const are hoisted but not initialized (temporal dead zone — accessing them before declaration throws ReferenceError). Function declarations are fully hoisted.', difficulty: 'Essential' },
          ]
        },
        {
          id: 'fe-closures', title: 'Closures', description: 'Functions that remember their scope.', difficulty: 'Common', studyTime: '8 minutes',
          definition: 'A closure is a function that retains access to variables from its outer (enclosing) scope even after the outer function has finished executing.',
          interviewAnswer: 'A closure is a function that remembers the variables from its outer scope even after the outer function returns. It is created whenever a function is defined inside another function. Closures are used for data privacy, function factories, and maintaining state.',
          explanation: 'Closures are fundamental to JavaScript patterns like module pattern, callbacks, and event handlers.',
          codeExample: 'function counter() {\n    let count = 0;  // Private variable\n    return {\n        increment: function() { return ++count; },\n        decrement: function() { return --count; },\n        getCount: function() { return count; }\n    };\n}\n\nconst myCounter = counter();\nmyCounter.increment();  // 1\nmyCounter.increment();  // 2\nmyCounter.getCount();   // 2\n// count is not accessible directly — it\'s private',
          questions: [
            { id: 'fe-q17', question: 'What is a closure in JavaScript?', answer: 'A closure is a function that has access to its outer function\'s variables even after the outer function has returned. It "closes over" the variables. Example: A counter function that returns increment/decrement functions — the inner functions remember the count variable. Closures enable data privacy and state management.', difficulty: 'Essential' },
          ]
        },
        {
          id: 'fe-promises', title: 'Promises & Async/Await', description: 'Handling asynchronous operations.', difficulty: 'Essential', studyTime: '10 minutes',
          definition: 'Promises represent the eventual result of an asynchronous operation. async/await provides cleaner syntax for working with promises.',
          interviewAnswer: 'A Promise is an object representing the eventual completion or failure of an async operation. It has three states: pending, fulfilled, rejected. We handle results with .then() and errors with .catch(). async/await is syntactic sugar over promises — async makes a function return a promise, await pauses execution until the promise resolves.',
          explanation: 'Promises solve the callback hell problem. async/await makes asynchronous code look synchronous.',
          codeExample: '// Promise\nfetch("https://api.example.com/data")\n    .then(response => response.json())\n    .then(data => console.log(data))\n    .catch(error => console.error(error));\n\n// Async/Await (cleaner)\nasync function fetchData() {\n    try {\n        const response = await fetch("https://api.example.com/data");\n        const data = await response.json();\n        console.log(data);\n    } catch (error) {\n        console.error(error);\n    }\n}',
          questions: [
            { id: 'fe-q18', question: 'What is a Promise?', answer: 'A Promise is an object representing the eventual result of an asynchronous operation. States: Pending (initial), Fulfilled (completed successfully), Rejected (failed). Use .then() for success, .catch() for errors, .finally() for cleanup. Promises enable cleaner async code compared to callbacks.', difficulty: 'Essential' },
            { id: 'fe-q19', question: 'What is async/await?', answer: 'async/await is syntactic sugar over Promises. The async keyword before a function makes it return a Promise. The await keyword pauses the function until the Promise resolves. It makes asynchronous code look and behave like synchronous code. Always use try/catch for error handling with async/await.', difficulty: 'Essential' },
            { id: 'fe-q20', question: 'What is the event loop?', answer: 'The event loop is how JavaScript handles async operations despite being single-threaded. It continuously checks the call stack — if empty, it picks tasks from the callback queue (macro tasks like setTimeout) or microtask queue (Promises). Microtasks have higher priority than macrotasks.', difficulty: 'Common' },
          ]
        },
        {
          id: 'fe-array-methods', title: 'Array Methods: map, filter, reduce', description: 'Essential array transformation methods.', difficulty: 'Essential', studyTime: '8 minutes',
          definition: 'map transforms each element, filter selects elements matching a condition, reduce accumulates all elements into a single value.',
          interviewAnswer: 'map: Creates a new array by transforming each element (doesn\'t modify original). filter: Creates a new array with elements that pass a condition. reduce: Reduces an array to a single value by applying a function cumulatively. All three return new arrays/values without mutating the original.',
          explanation: 'These are the most commonly used functional array methods in JavaScript and React development.',
          codeExample: 'const numbers = [1, 2, 3, 4, 5];\n\n// map: Transform each element\nconst doubled = numbers.map(n => n * 2);\n// [2, 4, 6, 8, 10]\n\n// filter: Keep elements that pass condition\nconst evens = numbers.filter(n => n % 2 === 0);\n// [2, 4]\n\n// reduce: Accumulate to single value\nconst sum = numbers.reduce((acc, n) => acc + n, 0);\n// 15\n\n// Chaining\nconst result = numbers\n  .filter(n => n > 2)\n  .map(n => n * 10);\n// [30, 40, 50]',
          questions: [
            { id: 'fe-q21', question: 'What is the difference between map, filter, and reduce?', answer: 'map: Transforms each element, returns new array of same length.\nfilter: Returns new array with elements that satisfy a condition (can be shorter).\nreduce: Reduces entire array to a single value (sum, object, etc.).\nNone of them mutate the original array.', difficulty: 'Essential' },
          ]
        },
        {
          id: 'fe-dom', title: 'DOM Manipulation', description: 'Accessing and modifying HTML elements with JavaScript.', difficulty: 'Common', studyTime: '5 minutes',
          definition: 'The DOM (Document Object Model) is a tree representation of the HTML document that JavaScript can interact with to dynamically change content, structure, and style.',
          interviewAnswer: 'The DOM is a programming interface for HTML documents. JavaScript can access elements using methods like getElementById, querySelector, and querySelectorAll. It can modify content (innerHTML, textContent), attributes (setAttribute), styles (element.style), and structure (appendChild, removeChild).',
          explanation: 'In modern frameworks like React, direct DOM manipulation is rare because React manages the DOM through the Virtual DOM.',
          questions: [
            { id: 'fe-q22', question: 'What is the DOM?', answer: 'The DOM (Document Object Model) is a tree-like representation of an HTML document. Each HTML element becomes a node in the tree. JavaScript uses the DOM API to access, create, modify, and delete elements dynamically. Example: document.getElementById("title").textContent = "Hello";', difficulty: 'Essential' },
            { id: 'fe-q23', question: 'What is event bubbling?', answer: 'Event bubbling is when an event triggered on a child element propagates up through its parent elements. Example: Clicking a button inside a div triggers the click event on the button first, then the div, then the body. Use event.stopPropagation() to stop bubbling.', difficulty: 'Common' },
          ]
        }
      ]
    }
  ]
};
