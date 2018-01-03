import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './style.less';

class HomeHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
    }

    render() {
        return (
            <div id="home-header">
                <div className="clear-fix">
                    <div className="fl left">
                        {this.props.cityName}
                        <i className="icon-angle-down"></i>
                    </div>
                    <div className="fr right"><i className="icon-user"></i></div>
                    <div className="center">
                        <i className="icon-search"></i>
                        <input type="text"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeHeader;