import {useEffect} from "react";

import { useSearchParams } from "react-router-dom"


const SearchPage = () => {
   const [searchParams] = useSearchParams();
    // const queryParams = new URLSearchParams(location.search);
    // const skill = queryParams.get("skill");
    const title = searchParams.get("skills");
    const exprience = searchParams.get("exprience");
    const location = searchParams.get("location");

    useEffect(()=>{
        console.log(title, exprience, location);    
    },[]);

  return (
    <>
    <div className='pt-20'>
        <h1>Search Page</h1>
        {/* <p>{skill}</p> */}
    </div>
    </>
  )
}

export default SearchPage