import React,{ useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Time from './Time';
import Weatherlogo from './Weatherlogo';
import { FetchApi } from './FetchApi';
import Searchbox from './Searchbox';


function App() {
  const [query, setQuery] = useState("");

  const search = async (e) => {
    if (e.key === "Enter") {
      console.log("query", query)
      const data = await FetchApi(query);
      console.log("data", data)

    }
  };
  return (
    <div className="app">
     
   <main>
<Time/>
<Weatherlogo/>
<Searchbox/>

   </main>
    </div>
  );
}

export default App;
