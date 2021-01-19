'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Layout from 'components/layout/index';

class Form extends React.Component {
  render() {
    return (
      <Layout>
      <div className="form-page">
        <div className="tip-text">
          <span>这是一个简单的页面,Form Page</span>
        </div>
      </div>
      </Layout>);
  }
}

ReactDOM.render(<Form />, document.getElementById('container'));

