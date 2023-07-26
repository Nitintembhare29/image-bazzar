import React, {useState, useEffect} from "react";
import axios from "axios";




const SearchImages = ({addImages})=>{
    let [search, setSearch] = useState("cat");

    function reset(){
        setSearch("")
        addImages([])
    }

    useEffect(()=>{
        getSearch();
    },[])
 // if we put empty bracket then it load for first time
    function getSearch(){
        axios.get('https://api.unsplash.com/search/photos', {
            params : {
                client_id : process.env.REACT_APP_ACCESS_KEY,
                query : search
            }
        })
        .then((response)=>addImages( response.data.results))
        .catch(err=>console.log(err))
    }

    return(
        <div>
        <input type="text" placeholder="Search Images"
        onChange={(e)=>setSearch(e.target.value)} 
        value={search}/>

        <button onClick={getSearch}>Search</button>
        <button onClick={reset}>Reset</button>
        </div>
    )
}
export default SearchImages;
