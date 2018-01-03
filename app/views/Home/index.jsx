import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeHeader from "../common/HomeHeader";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
    }

    render() {
        return (
            <div>
                <HomeHeader cityName={this.props.userInfo.cityName}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        userInfo: state.userInfo
    };
}
function mapDispatchToProps() {
    return {};
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Home));