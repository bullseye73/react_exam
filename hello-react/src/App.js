import React, { Component } from 'react';
import './css/app.css';
import MyName from './myname.jsx';
import MyName01 from './myname01.jsx';
import Counter from './counter';
import SimpleAppBar from './simpleAppBar';
import ButtonAppBar from './buttonAppBar';

class App extends Component {
  render() {
      const name = "bullseye";
      const value = 2;
      const style = {
            backgroundColor: '#f4f4f4',
            padding: '16px',
            color: '#040404',
            fontSize: '14px'
          };
    return (
        <div>
            <SimpleAppBar name={name} />

            <ButtonAppBar name={name} />

            <div style={style}>
                Hello {name}!
                {
                  1 + 1 === 2
                    ? (<div>맞아요!</div>)
                    : (<div>틀려요!</div>)
                }
                {
                    1+1 ===2 && (<div>맞아요!</div>)
                }
                {
                    (function(){
                        if (value === 1) return (<div>하나!</div>);
                        if (value === 2) return (<div>Two!</div>);
                        if (value === 3) return (<div>Three!</div>);
                    })()
                }
            </div>
            <div className="App" //comment
                > {/*comment*/}

                리액트 리액트
            </div>

            <MyName name="bullseye" />
            <MyName01 name="bullseye" />

            <Counter />

        </div>
    );
  }
}

export default App;
