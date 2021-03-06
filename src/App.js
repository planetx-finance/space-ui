import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import {
  Switch,
  Route
} from "react-router-dom";
import IpfsRouter from 'ipfs-react-router'

import './i18n';
import interestTheme from './theme';

import APR from './components/apr';
import InvestSimple from './components/investSimple';
import Manage from './components/manage';
import Performance from './components/performance';
import Zap from './components/zap';
import IDai from './components/idai';
import Footer from './components/footer';
import Home from './components/home';
import Platform from './components/platform'
import Header from './components/header';
import Vaults from './components/vault';
import Dashboard from './components/dashboard';

import { injected } from "./stores/connectors";

import {
  CONNECTION_CONNECTED,
} from './constants'

import Store from "./stores";
const emitter = Store.emitter
const store = Store.store

class App extends Component {
  state = {};

  componentWillMount() {
    injected.isAuthorized().then(isAuthorized => {
      if (isAuthorized) {
        injected.activate()
        .then((a) => {
          store.setStore({ account: { address: a.account }, web3context: { library: { provider: a.provider } } })
          emitter.emit(CONNECTION_CONNECTED)
          console.log(a)
        })
        .catch((e) => {
          console.log(e)
        })
      } else {

      }
    });
  }

  render() {
    return (
      <MuiThemeProvider theme={ createMuiTheme(interestTheme) }>
        <CssBaseline />
        <IpfsRouter>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            alignItems: 'center',
            background: "#f9fafb"
          }}>
            <Switch>
              <Route path="/stats">
                <Header />
                <APR />
                <Footer />
              </Route>
              <Route path="/earn">
                <Header />
                <InvestSimple />
                <Footer />
              </Route>
              <Route path="/zap">
                <Header />
                <Zap />
                <Footer />
              </Route>
              <Route path="/idai">
                <IDai />
              </Route>
              <Route path="/performance">
                <Header />
                <Performance />
                <Footer />
              </Route>
              <Route path="/manage">
                <Header />
                <Manage />
                <Footer />
              </Route>
              <Route path="/vaults">
                <Header />
                <Vaults />
                <Footer />
              </Route>
              <Route path='/dashboard'>
                <Header />
                <Dashboard />
                <Footer />
              </Route>
              <Route path="/platform">
                <Platform />
              </Route>

              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </IpfsRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
