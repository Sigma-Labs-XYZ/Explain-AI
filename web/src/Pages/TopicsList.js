import React from "react"
import {Link} from 'react-router-dom'

export function TopicsList() {
    return (
        <div>
        <h2>Topics</h2>
        <Link to={`/javascript`} >Javascript
        
        </Link>
        <br/>
          <Link to={`/html`} >HTML
        
        </Link>
        <br/>
          <Link to={`/css`} >CSS
        
        </Link>
        </div>
        
    )
}