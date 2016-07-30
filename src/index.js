import React from 'react';
import ReactDom from 'react-dom';
import Greeting from './greeting';

ReactDom.render(<Greeting name='World'/>, document.getElementById('render-target'));

