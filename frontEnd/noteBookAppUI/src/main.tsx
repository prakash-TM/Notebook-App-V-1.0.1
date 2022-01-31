import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Notebook from './notebook'
import Notes from "./notes"
import User from "./users"

ReactDOM.render(
  <React.StrictMode>
    <Notebook />
    {/* <Notes /> */}
    {/* <User /> */}
  </React.StrictMode>,
  document.getElementById('root')
)
