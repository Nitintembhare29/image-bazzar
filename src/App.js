import React, {useState} from "react";
import './App.css';
import SearchImages from './components/SearchImages';
import DisplayImages from "./components/DisplayImages";


function App() {
  const [images, setImages] = useState([])
  return (
    <div>
      <h1>Imagebazzar</h1>
      <SearchImages addImages = {setImages}/>
      <DisplayImages images={images}/>
    </div>
  );
}

export default App;


// go to unplash.com and signup then click on account setting , application , Developers/API
// click on Your apps and click on all condn and give application name. It will give us 
// access key and secreat key , api url
// start postman and add api url
// inside header put authorisation key and Client-ID Your_Access_Key as value
