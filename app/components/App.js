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

    const { status, query } = this.props.params;
    AppAction.receiveQuery(status, query);
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
        <Result status={this.state.status}/>
        <Input
          value={this.state.value}
          changeHandler={AppAction.updateInputValue}
          requersHandler={AppAction.inputRequest} />
      </div>
    );
  }
}

export default App;
