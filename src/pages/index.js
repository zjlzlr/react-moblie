import React from 'react';
import { Button } from 'antd-mobile';
import http from '../utils/http'
class Index extends React.Component {
  testLogin = () => {
  	http.get('/grading/enter')
	.then(data=> {
	  this.props.history.push('/login')
	}, err => {
	  console.log(err)
	})
  }
  render() {
    return (
      <div>
        <h5>index======</h5>
        <Button onClick={this.testLogin} type="primary" size="small" inline>to login</Button>
      </div>
    );
  }
}
export default Index;