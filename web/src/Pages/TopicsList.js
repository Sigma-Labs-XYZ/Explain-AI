import React from "react"
import {Link} from 'react-router-dom'

export default function TopicsList({toi}) {
    return (
        <div>
        <nav>
            <Link to="/">Homepage</Link>
      </nav>
        <h1>Topics</h1>
        <Link to={`/topic/${toi}`} >Javascript
        
        </Link>
        <br/>
          <Link to={`/topic/${toi}`} >HTML
        
        </Link>
        <br/>
          <Link to={`/topic/${toi}`} >CSS
        
        </Link>
        </div>
        
    )
}