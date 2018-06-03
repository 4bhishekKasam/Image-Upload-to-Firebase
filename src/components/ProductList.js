import React, { Component } from 'react';
import ProductItem from "./ProductItem";
import ProductForm from "./ProductForm";

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
        this.onSave = this.onSave.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
    }

    componentWillMount() {
        this.getProducts();
    }

    getProducts() {
        const products = JSON.parse(localStorage.getItem('products'));
        this.setState({ products });
    }

    onSave(name, price) {
        console.log("ProductList.onSave: ", { name, price });
        let { products } = this.state;
        products.push({ name, price });
        this.setState({ products });
        localStorage.setItem('products', JSON.stringify(products));
    }

    onDelete(name) {
        console.log("ProductList.onDelete: ", name);
        let { products } = this.state;
        products = products.filter(product => product.name !== name);
        this.setState({ products });
        localStorage.setItem('products', JSON.stringify(products));
    }

    onUpdate(name, price, originalName) {
        console.log("ProductList.onModify: ", { name, price });
        let { products } = this.state;
        products = products.map(product => {
            if (product.name === originalName) {
                product.name = name;
                product.price = price;
            }
            return product;
        });
        this.setState({ products });
        localStorage.setItem('products', JSON.stringify(products));
    }

    render() {
        return (
            <div className="panel panel-primary container">
                <div className='panel-heading'>
                    <h3><b>Product Management</b></h3>
                </div>

                <div className='panel-body '>
                    <div className='row'>
                        <div className='col-md-8'>
                            <ProductForm onSave={this.onSave} />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
                            {
                                this.state.products.map(product => {
                                    return (
                                        <ProductItem key={product.name} {...product}
                                            onDelete={this.onDelete}
                                             onUpdate={this.onUpdate} />
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductList;