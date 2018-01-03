import React from 'react'
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import storeConf from './store/storeConf';

import './_static/css/common.less';
import './_static/css/font.css';

import AppRouter from './router';

const store = storeConf();

render(
    <Provider store={store}>
        <AppRouter/>
    </Provider>,
    document.getElementById('root')
)
