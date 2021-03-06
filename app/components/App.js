import React from 'react';
import AppStore from 'stores/AppStore';
import * as AppAction from 'actions/AppAction';

import DocumentTitle from 'react-document-title';
import Header from 'components/Header';
import LeadText from 'components/LeadText';
import Result from 'components/Result';
import Input from 'components/Input';
import SocialLinks from 'components/SocialLinks';
import Footer from 'components/Footer';

import styles from 'styles/App';
import data from '../data';
import { version } from '../../package';

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

          <Header>
            <span className='victory'>{data.results.victory}</span>
            { ' чи ' }
            <span className='betrayal'>{data.results.betrayal}</span>
            { '?' }
          </Header>

          <LeadText>
            {data.description}
          </LeadText>

          <Result
            status={this.state.status}
            results={data.results}
            placeholder={data.placeholders.result}/>

          <Input
            value={this.state.value}
            placeholder={data.placeholders.input}
            changeHandler={AppAction.updateInputValue}
            requersHandler={AppAction.inputRequest} />

          <SocialLinks
            url={window.location.href}
            text={this.getPageTitle()}/>

          <Footer
            items={data.footer}
            version={version}/>

        </div>
      </DocumentTitle>
    );
  }
}

export default App;
