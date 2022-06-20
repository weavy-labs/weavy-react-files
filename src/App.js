import { Component } from 'react';
import './App.css';
import { Link, Outlet } from "react-router-dom";
import Weavy from './weavy/Weavy';

export default class App extends Component {
  async getJwt() {
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ0ZXN0IiwiaWF0IjoxNjA1MDM1MTY2LCJleHAiOjI2MzY1NzExNzYsInN1YiI6InRlc3RlciIsImNsaWVudF9pZCI6ImNsaWVudGlkIiwiZW1haWwiOiJ0ZXN0ZXJAZW1haWwuY29tIiwidXNlcm5hbWUiOiJ0ZXN0ZXIifQ.62Zewkx-CyFK-79074rHH5BFFl4B1I_SvvGTTYxTpRM';
  }

  render() {
    return (
      <Weavy jwt={this.getJwt}>
        <div className="App">
          <div className='navbar'>
            <Link to="/">Home</Link>
            <Link to="/posts">Posts</Link>            
            <Link to="/files">Files</Link>
          </div>
          <main>            
            <Outlet />
          </main>          
        </div>
      </Weavy>
    );
  }
}