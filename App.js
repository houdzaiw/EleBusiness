/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AppReducer from './src/reducers';
import AppWithNavigationState from './src/navigators/AppNavigator';

class App extends React.Component<{}> {
    store = createStore(AppReducer)
  render() {
    return (
       <Provider store={this.store}>
           <AppWithNavigationState />
       </Provider>
    );
  }
}
export default App;
