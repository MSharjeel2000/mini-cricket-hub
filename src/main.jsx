import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"; // This imports the routing component from the library we installed via npm install react-router-dom
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter> {/*It connects your React app to the browser's URL, so React Router can show the appropriate page when the URL changes*/}
    <App /> {/*This is your main React component. It contains the content and, soon, the instructions for which page to show.*/}
  </BrowserRouter>
  {/*Wrapped App with BrowserRouter , Think of BrowserRouter as the part that connects your React application to the browser's URL. It makes routing features available to components inside it*/}
  </StrictMode>,
)

// Why put App inside BrowserRouter?
// Imagine that App is the house and BrowserRouter provides the navigation system for it.
// BrowserRouter
//     │
//     └── App
//          ├── Home page
//          ├── Matches page
//          ├── Teams page
//          └── About page


// Because App is inside BrowserRouter, the components inside App can use React Router's features.
// If we didn't wrap App with BrowserRouter, the routing components we use next wouldn't have the router context they need.
// Remember this simple idea: BrowserRouter enables URL-based navigation for the React app inside it. It doesn't create the pages itself—we'll define those pages and their URLs in App.jsx.