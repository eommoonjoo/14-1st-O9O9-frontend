import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import './styles/common.scss';
import './styles/reset.scss';
import '../node_modules/slick-carousel/slick/slick.css';
import '../node_modules/slick-carousel/slick/slick-theme.css';

ReactDOM.render(<Routes />,document.getElementById('root'));
