import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import DashBoardContainer from '../dashboard-container';
import {Provider} from 'react-redux';
import createAppStore from '../../lib/store';

const store = createAppStore();

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    store.dispatch({ type: null});
  }

  render() {
    return (
      <section className="budget">
        <Provider store={store}>
          <BrowserRouter>
            <section>
              <Route exact path="/" component={DashBoardContainer} />
            </section>
          </BrowserRouter>
        </Provider>
      </section>
    );
  }
}
export default App;
