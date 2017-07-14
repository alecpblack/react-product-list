import React, { Component } from 'react';
// import ReactDom from 'react-dom';

class ProductCategoryRow extends Component {
    render() {
        return <tr><td colSpan="3" className="category">{this.props.category}</td></tr>;
    }
}

class ProductRow extends Component {
    render() {
        let name = this.props.product.name;
        let stockedClassname = this.props.product.stocked ? 'stocked' : 'notStocked';

        return (
            <tr className={stockedClassname}>
                <td>{name}</td>
                <td className="price">{this.props.product.price}</td>
            </tr>
        )
    };
}

class ProductTable extends Component {
    render() {
        let rows = [];
        let lastCategory = null;
        let filterText = this.props.filterText;
        let inStockOnly = this.props.inStockOnly;
        console.log('inStockOnly: '+this.props.inStockOnly);

        this.props.products.forEach(function (product) {
            if (inStockOnly && !product.stocked) { return; }
            if (product.name.indexOf(filterText) === -1) { return; }

            let currentCategory = product.category;
            if (currentCategory !== lastCategory) {
                rows.push(<ProductCategoryRow category={currentCategory}
                    key={currentCategory} />);
                lastCategory = currentCategory;
            }

            rows.push(<ProductRow product={product} key={product.name} />);
        });

        return (
            <table>
                <caption>Product List</caption>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
        this.handleInStockInputChange = this.handleInStockInputChange.bind(this);
    }

    handleFilterTextInputChange(e) {
        this.props.onFilterTextInput(e.target.value);
    }

    handleInStockInputChange(e) {
        this.props.onInStockInput(e.target.checked);
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    value={this.props.filterText}
                    onChange={this.handleFilterTextInputChange}
                />
                <p>
                    <input
                        type="checkbox"
                        checked={this.props.inStockOnly}
                        onChange={this.handleInStockInputChange}
                    />
                    {' '}
                    Only show products in stock
        </p>
            </form>
        );
    }
}

class FilterableProductTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false
        };

        this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
        this.handleInStockInput = this.handleInStockInput.bind(this);
    }

    handleFilterTextInput(filterText) {
        this.setState({
            filterText: filterText
        });
    }

    handleInStockInput(inStockOnly) {
        this.setState({
            inStockOnly: inStockOnly
        })
    }

    render() {
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onFilterTextInput={this.handleFilterTextInput}
                    onInStockInput={this.handleInStockInput}
                />
                <ProductTable
                    products={this.props.products}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                />
            </div>
        );
    }
}

// let PRODUCTS = [
//     { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
//     { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
//     { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
//     { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
//     { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
//     { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
// ];

export default FilterableProductTable;
// export default Products;



// ReactDom.render(
//     <FilterableProductTable products={PRODUCTS} />,
//     document.getElementById('root')
// );

// export PRODUCTS;