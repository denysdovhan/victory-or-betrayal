import React from 'react';
import AppStore from 'stores/AppStore';
import * as AppAction from 'actions/AppAction';

import DocumentTitle from 'react-document-title';
import Header from 'components/Header';
import LeadText from 'components/LeadText';
import Result from 'components/Result';
import Input from 'components/Input';

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

  getPageTitle() {
    const { status, value } = this.state;
    if (status) {
      const result = status == 'victory'  ? 'ПЕРЕМОГА' :
                     status == 'betrayal' ? 'ЗРАДА'    : 'щось незрозуміле';
      return `«${value}» це ${result}`;
    } else {
      return 'ПЕРЕМОГА чи ЗРАДА?';
    }
  }

  render() {
    return (
      <DocumentTitle title={this.getPageTitle()}>
        <div>
          <Header>
            <span className='victory'>ПЕРЕМОГА</span>
            { ' чи ' }
            <span className='betrayal'>ЗРАДА</span>?
          </Header>
          <LeadText>
            Дивишся новини і не можеш розібрати де зрада, а де перемога?
          </LeadText>
          <Result status={this.state.status}/>
          <Input
            value={this.state.value}
            changeHandler={AppAction.updateInputValue}
            requersHandler={AppAction.inputRequest} />
        </div>
      </DocumentTitle>
    );
  }
}

export default App;
