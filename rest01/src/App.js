import React, { Component } from 'react';

 function helloSelvy(opts) {
  console.log('Posting request to Selvy Chatbot API...');

  fetch('http://192.168.219.129:8080', {
    method: 'post',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(opts)
  })
  .then(function (res) {  
    return res.json().then(function(json){
      console.log(json.msg_id);
      console.log(json.utterances[0].text);
    });
  })
  .catch(function (error) {  
    console.log('Request failure: ', error);  
  });
}

function submit() {
  var item =  helloSelvy({
    user_id:'claude',
    msg:'야근 교통비'
  });
  //var item = JSON.parse(userStr);
  console.log(item);
}

class App extends Component {
   render() {
    return (
      <div>
        <button onClick={submit}>submit</button>
      </div>
    );
  }
}

export default App;
