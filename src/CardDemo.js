import React, { Component } from 'react';
import { Card } from 'primereact/card';
import { DialogCard } from './DialogCard';

export class CardDemo extends Component {
    render() {
        
        return (
            <div className="Cards">
                {this.props.articlesList.map((article) => (   
                    <Card key={article.key} title={article.title} subTitle={article.description} style={{ width: '25em', margin: '0 auto 2em'}} >
                        <img alt="Card" src={(article.thumbnail && article.thumbnail["url"]) ? article.thumbnail["url"] : 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}
                        onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
                        <DialogCard article={article}/>
                    </Card>
                ))} 
            </div>
        )
    }
}

