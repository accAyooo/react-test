import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
    }

    render() {
        return (
            <p>hello world!</p>
        )
    }
}

export default Home;