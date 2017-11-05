import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Home</h2>

    <hr />

    <ul>
      <li><Link to="/repos/twbs/bootstrap/issues">Twitter Bootstrap</Link></li>
    </ul>
  </div>
)

export default Home
