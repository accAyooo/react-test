import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

//Get user city info
import { CITY_NAME } from '../config/localStorage-config';
import localStore from '../util/localStore';

class App extends React.Component {
    constructor(props) {
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