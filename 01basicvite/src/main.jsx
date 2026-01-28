import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
const anotherElement =(
<a href="https://google.com" target='_blank'>Visit Google</a>
);
const  anotheruser=" This is another user";
const createElement = React.createElement(
  'a',
  {
    href:"https://www.google.com",
    target:"_blank",
  },
  'Go to Google',
  anotheruser
);

createRoot(document.getElementById('root')).render(

  createElement
  
)
