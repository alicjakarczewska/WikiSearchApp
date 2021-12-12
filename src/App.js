import './App.css';

import 'primereact/resources/themes/lara-light-indigo/theme.css'    //theme
import 'primereact/resources/primereact.min.css'                    //core css
import 'primeicons/primeicons.css'                                  //icons

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useState } from 'react';
import shortid from 'shortid';
import { DialogDemo } from './DialogDemo';
import { CardDemo } from './CardDemo';

function App(){

  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [queriesList, setQueriesList] = useState([]);

  const fetchOnline = async () => {
    const url = "https://en.wikipedia.org/w/rest.php/v1/search/page?q=" + query + "&limit=5";
    const response = await fetch(
          url,
          {'Api-User-Agent': 'MediaWiki REST API docs examples/0.1 (https://www.mediawiki.org/wiki/API_talk:REST_API)'}
        );
    const res = await response.json();
    setData(res.pages);
    
    const newList = queriesList.concat({ name: query, index: shortid.generate() });
    setQueriesList(newList);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-input">
          <InputText label="Search" placeholder="Type here..." onChange={event => setQuery(event.target.value)} />
          <Button icon="pi pi-search" className="p-button-rounded p-button-text" onClick={fetchOnline} />
        </div>        
        <DialogDemo queriesHistory={queriesList} />
      </header>
      <main className="App-main">
        <CardDemo articlesList={data} />
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
