import React, { Component } from 'react';

class ProductItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModify: false
        };
        this.onUpdate = this.onUpdate.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onModify = this.onModify.bind(this);
    }

    onUpdate(event) {
        event.preventDefault();
        const name = this.nameInput.value;
        const price = this.priceInput.value;
        console.log("ProductItem.onUpdate: ", { name, price });
        this.props.onUpdate(name, price, this.props.name);
        this.setState({ isModify: false });
    }

    onDelete() {
        const { name, onDelete } = this.props;
        console.log("ProductItem.onDelete: ", name);
        onDelete(name);
    }

    onModify() {
        this.setState({ isModify: true });
        console.log("ProductItem.onModify: ", this.state.isModify);
    }

    render() {
        const { name, price } = this.props;
        return (
            <div>
                {
                    this.state.isModify ?
                        (
                            <div className='panel-body'>
                                <form onSubmit={this.onUpdate} >
                                    <div className='row'>
                                        <div className='col-md-5'>
                                            <div className="form-group">
                                                <input placeholder="Name" defaultValue={name} 
                                                  ref={nameInput => this.nameInput = nameInput}
                                                    className="form-control" />
                                            </div>
                                        </div>
                                        <div className='col-md-5'>
                                            <div className="form-group">
                                                <input placeholder="Price" defaultValue={price}
                                                  ref={priceInput => this.priceInput = priceInput}
                                                    className="form-control" />
                                            </div>
                                        </div>
                                        <div className='col-md-2'>
                                            <button className="btn btn-primary">Save</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        )
                        :
                        (
                            <div className='table table-striped'>
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th>&nbsp;</th>
                                            <th>&nbsp;</th>
                                            <th>&nbsp;</th>
                                            <th>&nbsp;</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td> {name} </td>
                                            <td> {price} </td>
                                            <td>  <button onClick={this.onModify} className="btn btn-dark">Update</button> </td>
                                            <td>   <button onClick={this.onDelete} className="btn btn-primary">Delete</button> </td>
                                        </tr>

                                    </tbody>

                                </table>
                            </div>
                            // <div className="product-item">
                            //     <span>{name}</span> - <span>{price}</span>
                            //     <button onClick={this.onModify} className="btn btn-dark">UPDATE</button>
                            //     <button onClick={this.onDelete} className="btn btn-default">DELETE</button>
                            // </div>

                        )
                }
            </div>

        );
    }
}

export default ProductItem;