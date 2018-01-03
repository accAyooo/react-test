import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


//Get user city info
import { CITY_NAME } from '../config/localStorage-config';
import localStore from '../util/localStore';

import * as userInfoActionsFromOtherFile from '../actions/userInfo';

class App extends React.Component {
    constructor(props, context) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
        this.state = {
            initDone: false
        }
    }

    componentDidMount() {

        //从 LOCALSOTORAGE中取出城市信息
        let cityName = localStore.getItem(CITY_NAME);

        if (cityName == null) {
            cityName = '北京';
        }

        // 将取出的城市信息放入到 REDUX 中
        this.props.userInfoActions.update({
            cityName: cityName
        })

        setTimeout(() => {
            this.setState({
                initDone: true
            })
        },0)
    }

    render() {
        return (
            <div className="container">
                {
                    this.state.initDone
                        ? this.props.children
                        : <div>loading...</div>
                }
            </div>
        )
    }
}

// react bind function
function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(App))

