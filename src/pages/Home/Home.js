import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Home</h2>

    <hr />

    <ul>
      <li><Link to="/repos/facebook/react/issues">React.js</Link></li>
      <li><Link to="/repos/vuejs/vue/issues">Vue.js</Link></li>
      <li><Link to="/repos/angular/angular/issues">Angular</Link></li>
      <li><Link to="/repos/twbs/bootstrap/issues">Bootstrap</Link></li>
      <li><Link to="/repos/reactjs/redux/issues">Redux</Link></li>
      <li><Link to="/repos/Microsoft/vscode/issues">Visual Studio Code</Link></li>
    </ul>
  </div>
)

export default Home
