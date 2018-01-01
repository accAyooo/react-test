import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import SubRouter from './SubRouter';
import App from '../views';

class AppRouter extends React.Component {

    updateHandle() {
        console.log("reload~");
    }

    render() {
        return  (
            <Router onUpdate={this.updateHandle.bind(this)}>
                <App>
                    <Route path="/" component={SubRouter}/>
                </App>
            </Router>
        )
    }
}
export default AppRouter;