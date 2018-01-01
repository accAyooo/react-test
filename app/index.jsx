import React from 'react'
import { render } from 'react-dom';

import './_static/css/common.less'

import AppRouter from './router';

render(
    <AppRouter/>,
    document.getElementById('root')
)
