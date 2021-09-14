import { Component } from 'react';
import './App.css';

import Weavy from './weavy/Weavy';
import WeavyApp from './weavy/WeavyApp';

export default class App extends Component {
  async getJwt() {
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ0ZXN0IiwiaWF0IjoxNjA1MDM1MTY2LCJleHAiOjE2MzY1NzExNzYsInN1YiI6InRlc3RlciIsImNsaWVudF9pZCI6ImNsaWVudGlkIiwiZW1haWwiOiJ0ZXN0ZXJAZW1haWwuY29tIiwidXNlcm5hbWUiOiJ0ZXN0ZXIifQ.MhPMARKc1UaFtcjnvDmO-Z8fFmxdp4EE-Bz-0H3-doQ';
  }

  render() {
    return (
      <Weavy jwt={this.getJwt}>
        <div className="App">
          <WeavyApp
            spaceKey="react-space"
            spaceName="React Space"
            appKey="react-feed"
            appName="React App"
            appType="posts"
            />
        </div>
      </Weavy>
    );
  }
}