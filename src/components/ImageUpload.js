import React, { Component } from 'react';
import { storage } from '../firebase/config';

class ImageUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            url: '',
            progress: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }

    handleChange(e) {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            this.setState(() => ({ image }));
        }
    }

    handleUpload() {
        const { image } = this.state;
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed',
            (snap) => {
                // progrss function
                const progress = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
                this.setState({ progress });
            },
            (error) => {
                console.log(error)
            },
            () => {
                // complete function
                storage.ref('images').child(image.name).getDownloadURL()
                    .then(url => {
                        console.log(url);
                        this.setState({ url });
                    })
            });
    }

    render() {
        const style = {
            height: '80vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '22px'
        };

        return (
            <div style={style}>
                <progress value={this.state.progress} max="100" />
                <br />
                <input type="file" onChange={this.handleChange}
                    className="file-path-wrapper"
                />
                <br />
                <button onClick={this.handleUpload}
                    className="btn btn-primary btn-lg">Upload</button>
                <br />
                <img src={this.state.url || 'http://via.placeholder.com/400x300'}
                    alt="uploaded image"
                    height="300" width="400" />
            </div>
        );
    }
}

export default ImageUpload;