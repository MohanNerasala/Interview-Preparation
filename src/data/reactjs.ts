import type { Topic } from '../types';

export const reactjsTopic: Topic = {
  id: 'reactjs',
  number: '08',
  title: 'React.js',
  description: 'Components, hooks, state management, and React patterns.',
  icon: 'Atom',
  subtopics: [
    {
      id: 'react-fundamentals',
      title: 'React Fundamentals',
      description: 'Components, JSX, props, state, and hooks.',
      concepts: [
        {
          id: 'rj-components', title: 'Components & JSX', description: 'Building blocks of React applications.', difficulty: 'Essential', studyTime: '5 minutes',
          definition: 'Components are reusable, independent pieces of UI. JSX is a syntax extension that lets you write HTML-like code in JavaScript.',
          interviewAnswer: 'React components are reusable UI building blocks. There are two types: Functional Components (functions that return JSX, modern standard) and Class Components (older approach using classes). JSX (JavaScript XML) allows writing HTML-like syntax in JavaScript, which gets compiled to React.createElement() calls.',
          explanation: 'Modern React uses functional components with hooks exclusively. Class components are legacy but may appear in older codebases.',
          codeExample: '// Functional Component\nfunction Greeting({ name }: { name: string }) {\n    return <h1>Hello, {name}!</h1>;\n}\n\n// Usage\n<Greeting name="Mohan" />\n\n// JSX compiles to:\nReact.createElement("h1", null, "Hello, Mohan!");',
          questions: [
            { id: 'rj-q1', question: 'What is JSX?', answer: 'JSX (JavaScript XML) is a syntax extension that allows writing HTML-like code inside JavaScript. It gets compiled to React.createElement() calls by Babel. JSX makes React code more readable and intuitive. Key rules: return a single root element, use className instead of class, use camelCase for attributes, and close all tags.', difficulty: 'Essential' },
            { id: 'rj-q2', question: 'What is the difference between functional and class components?', answer: 'Functional: Simple functions that return JSX, use hooks for state and lifecycle, lighter and modern standard.\nClass: ES6 classes extending React.Component, use this.state and lifecycle methods, older approach.\nFunctional components with hooks are the recommended approach since React 16.8.', difficulty: 'Essential' },
          ]
        },
        {
          id: 'rj-hooks', title: 'React Hooks', description: 'useState, useEffect, useContext, useRef, useMemo, useCallback.', difficulty: 'Essential', studyTime: '15 minutes',
          definition: 'Hooks are functions that let you use React features (state, lifecycle, context) in functional components.',
          interviewAnswer: 'React Hooks allow functional components to manage state and side effects. Key hooks: useState (state management), useEffect (side effects like API calls), useContext (access context), useRef (DOM references, mutable values), useMemo (memoize computed values), useCallback (memoize functions).',
          explanation: 'Hooks must be called at the top level of components (not inside conditions or loops). Custom hooks allow reusing stateful logic.',
          codeExample: 'function ProductList() {\n    const [products, setProducts] = useState<Product[]>([]);\n    const [loading, setLoading] = useState(true);\n\n    useEffect(() => {\n        fetch("/api/products")\n            .then(res => res.json())\n            .then(data => {\n                setProducts(data);\n                setLoading(false);\n            });\n    }, []);  // Empty array = run once on mount\n\n    if (loading) return <p>Loading...</p>;\n\n    return (\n        <ul>\n            {products.map(p => (\n                <li key={p.id}>{p.name}</li>\n            ))}\n        </ul>\n    );\n}',
          questions: [
            { id: 'rj-q3', question: 'What is useState?', answer: 'useState is a hook that adds state to functional components. It returns an array with the current state value and a function to update it. Example: const [count, setCount] = useState(0). When setCount is called, the component re-renders with the new value.', difficulty: 'Essential' },
            { id: 'rj-q4', question: 'What is useEffect?', answer: 'useEffect handles side effects in functional components (API calls, subscriptions, DOM changes). It runs after render. The dependency array controls when it runs: [] = once on mount, [dep] = when dep changes, no array = every render. Return a cleanup function for subscriptions.', difficulty: 'Essential' },
            { id: 'rj-q5', question: 'What is the Virtual DOM?', answer: 'The Virtual DOM is a lightweight JavaScript copy of the real DOM. When state changes, React creates a new Virtual DOM, compares it with the previous one (diffing), and only updates the changed parts in the real DOM (reconciliation). This makes React fast because direct DOM manipulation is expensive.', difficulty: 'Essential' },
            { id: 'rj-q6', question: 'What is the difference between useMemo and useCallback?', answer: 'useMemo memoizes a computed value — it recomputes only when dependencies change. useCallback memoizes a function reference — it returns the same function instance unless dependencies change. useMemo returns a value, useCallback returns a function. Both optimize performance by preventing unnecessary recalculations/re-renders.', difficulty: 'Common' },
          ]
        },
        {
          id: 'rj-router', title: 'React Router', description: 'Client-side routing and navigation.', difficulty: 'Common', studyTime: '5 minutes',
          definition: 'React Router enables client-side routing, allowing navigation between pages without full page reloads.',
          interviewAnswer: 'React Router enables single-page application navigation. Key components: BrowserRouter (wraps the app), Routes (defines route container), Route (maps URL to component), Link/NavLink (navigation without page reload), useNavigate (programmatic navigation), useParams (access URL parameters).',
          explanation: 'React Router keeps the URL in sync with the UI, enabling back/forward navigation and deep linking.',
          codeExample: 'import { BrowserRouter, Routes, Route, Link } from "react-router-dom";\n\nfunction App() {\n    return (\n        <BrowserRouter>\n            <nav>\n                <Link to="/">Home</Link>\n                <Link to="/products">Products</Link>\n            </nav>\n            <Routes>\n                <Route path="/" element={<Home />} />\n                <Route path="/products" element={<Products />} />\n                <Route path="/products/:id" element={<ProductDetail />} />\n            </Routes>\n        </BrowserRouter>\n    );\n}',
          questions: [
            { id: 'rj-q7', question: 'What is React Router?', answer: 'React Router is a library for client-side routing in React applications. It enables navigation between pages without full page reloads (SPA behavior). Key components: BrowserRouter, Routes, Route, Link, NavLink, useNavigate, useParams, useLocation.', difficulty: 'Common' },
          ]
        }
      ]
    }
  ]
};
