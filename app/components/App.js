import React from 'react';
import AppStore from '../stores/AppStore';

import Header from './Header';
import LeadText from './LeadText';
import Result from './Result';
import Input from './Input';

const getAppState = () => ({
  requests: AppStore.getRequests()
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
        <Header>Перемога чи зрада?</Header>
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
