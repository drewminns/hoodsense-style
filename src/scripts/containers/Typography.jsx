import React, { Component } from 'React';

import reactLogo from '../../assets/react.svg';

class Home extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Typography!</h1>
        <div className='content'>
          <h1>Heading H1</h1>
          <h2>Heading H2</h2>
          <h3>Heading H3</h3>
          <h4>Heading H4</h4>
          <h5>Heading H5</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque ab quis enim, recusandae saepe vitae, accusantium officia, nam error accusamus consectetur consequatur animi eum inventore alias quasi perspiciatis voluptas ratione.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque ab quis enim, recusandae saepe vitae, accusantium officia, nam error accusamus consectetur consequatur animi eum inventore alias quasi perspiciatis voluptas ratione.</p>
          <h3>Title Block</h3>
          <p className='lead'>With content Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus molestias esse, ea id quos voluptas dolorum minus atque dolor suscipit labore repellat quidem quisquam saepe quaerat officia nulla laudantium molestiae.</p>
        </div>
      </div>
    )
  }
}

export default Home;
