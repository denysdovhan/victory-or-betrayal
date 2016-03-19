import React from 'react';
import AppStore from '../stores/AppStore';
import * as AppAction from '../actions/AppAction';

import Header from './Header';
import LeadText from './LeadText';
import Result from './Result';
import Input from './Input';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = AppStore.getAppState;
  }

  componentDidMount() {
    AppStore.addChangeListener(() =>
      this.setState(AppStore.getAppState)
    );
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(() =>
      this.setState(AppStore.getAppState)
    );
  }

  render() {
    return (
      <div>
        <Header>Перемога чи зрада?</Header>
        <LeadText>
          Дивишся новини і не можеш розібрати де зрада, а де перемога?
        </LeadText>
        <Result value={this.state.status}/>
        <Input />
      </div>
    );
  }
}

export default App;
