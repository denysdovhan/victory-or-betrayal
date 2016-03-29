import React from 'react';
import AppStore from 'stores/AppStore';
import * as AppAction from 'actions/AppAction';

import DocumentTitle from 'react-document-title';
import Meta from 'components/Meta';
import Header from 'components/Header';
import LeadText from 'components/LeadText';
import Result from 'components/Result';
import Input from 'components/Input';

import styles from 'styles/App';
import data from '../data';

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
      return `«${value}» це ${data.results[status]}`;
    } else {
      return `${data.title}`;
    }
  }

  render() {
    return (
      <DocumentTitle title={this.getPageTitle()}>
        <div className={styles.app}>

          <Meta
            title={this.getPageTitle()}
            description={data.description}
            image={data.image}/>

          <Header>
            <span className='victory'>{data.results.victory}</span>
            { ' чи ' }
            <span className='betrayal'>{data.results.betrayal}</span>?
          </Header>

          <LeadText>{data.description}</LeadText>

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
