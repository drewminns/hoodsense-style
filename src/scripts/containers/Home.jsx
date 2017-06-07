import React, { Component } from 'React';
import { Link } from 'react-router-dom';

import reactLogo from '../../assets/react.svg';

class Home extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Hoodsense Styles</h1>
        <nav>
          <Link to='/typography'>Typography</Link>
        </nav>
      </div>
    )
  }
}

export default Home;
