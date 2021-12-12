
import React, { Component } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import './DialogCard.css';

export class DialogCard extends Component {
  

    constructor(props) {
        super(props);
        this.state = {
            displayBasic: false,
            displayBasic2: false,
            displayModal: false,
            displayMaximizable: false,
            displayPosition: false,
            displayResponsive: false,
            position: 'center',
            fullArticle: ''            
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

        const fetchArticle = async (key) => {
            const url = "https://en.wikipedia.org/w/rest.php/v1/page/" + key + "/html";
        
            const response = await fetch(
                url,
                {'Api-User-Agent': 'MediaWiki REST API docs examples/0.1 (https://www.mediawiki.org/wiki/API_talk:REST_API)'}
                );
            const res = await response.text();
            this.setState({ fullArticle: res })
        };

        return (
            <div className="dialog-demo">
                <div className="card">
                    <Button label="Show full article" icon="pi pi-external-link" onClick={() => this.onClick('displayBasic2')} />
                    <Dialog header={this.props.article.title} visible={this.state.displayBasic2} style={{ width: '50vw' }} onHide={() => this.onHide('displayBasic2')}>
                        <Button label="Load article" icon="pi pi-external-link" onClick={() => fetchArticle(this.props.article.key)} />
                        <br/>
                        <br/>
                        <div className="article" dangerouslySetInnerHTML={{ __html: this.state.fullArticle}} />
                    </Dialog>
                </div>
            </div>
        )
    }
}
                 