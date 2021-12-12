
import React, { Component } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import './DialogDemo.css';

export class DialogDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displayBasic: false,
            displayBasic2: false,
            displayModal: false,
            displayMaximizable: false,
            displayPosition: false,
            displayResponsive: false,
            position: 'center'
            
        };

        this.onClick = this.onClick.bind(this);
        this.onHide = this.onHide.bind(this);
    }

    onClick(name, position) {
        let state = {
            [`${name}`]: true
        };

        if (position) {
            state = {
                ...state,
                position
            }
        }

        this.setState(state);
    }

    onHide(name) {
        this.setState({
            [`${name}`]: false
        });
    }

    render() {
        return (
            <div className="dialog-demo">
                <div className="card">
                    <Button label="Show search history" icon="pi pi-external-link" onClick={() => this.onClick('displayBasic')} />
                    <Dialog header="Serach history" visible={this.state.displayBasic} style={{ width: '50vw' }} onHide={() => this.onHide('displayBasic')}>
                        <p>Your recent searches are:</p>
                        <ul>
                        {this.props.queriesHistory.map((item) => (
                            <li key={item.index}>{item.name}</li>
                        ))}
                        </ul>
                    </Dialog>
                </div>
            </div>
        )
    }
}
                 