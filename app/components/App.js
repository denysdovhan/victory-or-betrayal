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
    this.state = getAppState();
  }

  componentDidMount() {
    AppStore.addChangeListener(() =>
      this.setState(getAppState())
    );
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(() =>
      this.setState(getAppState())
    );
  }

  render() {
    const req = this.state.requests[0];

    return (
      <div>
        <Header>Перемога чи зрада?</Header>
        <LeadText>
          Дивишся новини і не можеш розібрати де зрада, а де перемога?
          <br />
          Просто запитай…
        </LeadText>
        <Result value={req.result}/>
        <Input />
      </div>
    );
  }
}

export default App;
