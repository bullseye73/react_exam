import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  ApiCall = () => {
    var postData = JSON.stringify({
      'user_id':'claude',
      'msg':'야근 교통비'
    });
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    axios.post('http://192.168.219.129:8080/', postData, axiosConfig)
    .then(function (res) {  
        console.log(res.data.msg_id);
        console.log(res.data.utterances[0].text);
        return res.data
    })
    .catch(function (error) {  
      console.log('Request failure: ', error);  
    });
  } 

  render() {
    return (
      <div className="App">
        <button onClick={this.ApiCall}>call</button>
      </div>
    );
  }
}

export default App;
