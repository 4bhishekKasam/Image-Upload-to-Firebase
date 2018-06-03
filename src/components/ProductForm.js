import React, { Component } from 'react';

class ProductForm extends Component {
    constructor(props) {
        super(props);
        this.onSave = this.onSave.bind(this);
    }

    onSave(event) {
        event.preventDefault();
        const name = this.nameInput.value;
        const price = this.priceInput.value;
        console.log("ProductForm.onSave: ", { name, price });
        this.props.onSave(name, price);
        this.nameInput.value = '';
        this.priceInput.value = '';
    }

    render() {
        return (
            <div className="form-group">
                <h3>Product Form</h3>
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <input placeholder="Name" ref={nameInput => this.nameInput = nameInput}
                            className="form-control" />
                    </div>
                    <div className="form-group">
                        <input placeholder="Price" ref={priceInput => this.priceInput = priceInput}
                            className="form-control" />
                    </div>
                    <button className="btn btn-primary">Add</button>
                </form>
            </div>
        );
    }
}

export default ProductForm;