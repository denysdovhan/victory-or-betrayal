import React from 'react';
import AppStore from '../stores/AppStore';

import Input from './Input';
import LeadText from './LeadText';

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
        <LeadText>
          Дивишся новини і не можеш розібрати де зрада, а де перемога?
          <br />
          Просто запитай…
        </LeadText>
        <Input />
      </div>
    );
  }

  _onChange() {
    this.setState(getAppState());
  }
}

export default App;
