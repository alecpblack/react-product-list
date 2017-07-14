import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import FilterableProductTable from './product-list';
// import PRODUCTS from './product-list';
import Clock from './clock';

import registerServiceWorker from './registerServiceWorker';

let PRODUCTS = [
    { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
    { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
    { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
    { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
    { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
    { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];

ReactDom.render(
    <Clock />,
    document.getElementById('clock')
);
ReactDom.render(
    <FilterableProductTable products={PRODUCTS} />,
    document.getElementById('product-list')
);
registerServiceWorker();
