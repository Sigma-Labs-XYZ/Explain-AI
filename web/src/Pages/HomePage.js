import React from "react";
import {Link} from 'react-router-dom'
export default function HomePage() {
  return (
    <div>
      <nav>
        <Link to ='/topics'>Topics</Link>
      </nav>

      <h1>HomePage</h1>
    </div>
  );
}
