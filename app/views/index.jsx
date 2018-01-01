import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
        this.state = {
            initDone: false
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                initDone: true
            })
        },2000)
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

export default App;