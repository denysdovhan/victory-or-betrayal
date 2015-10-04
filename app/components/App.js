import React from 'react';
import AppStore from '../stores/AppStore';

import Input from './Input';

const getAppState = () => ({
  request: AppStore.getRequest(),
  result: AppStore.getResult()
});

class App extends React.Component {

  constructor(props) {
    super(props);

    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    AppStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange);
  }

  render() {
    return (
      <div>
        <Input />
      </div>
    );
  }

  _onChange() {
    this.setState(getAppState());
  }
}

export default App;
