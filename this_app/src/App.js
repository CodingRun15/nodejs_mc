
import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {
  const [data,setData] = useState([]);
  const [itemsToShow,setitemsToShow] = useState([]);
  const limit = 8;
  const loader = useRef(null);
  console.log(data);
  let url = 'https://jsonplaceholder.typicode.com/posts'
 async function fetchData(){
  try{
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
    setitemsToShow(data.slice(0,limit));
  }
  catch(error){
    console.log('Error:', error);
  }
}
useEffect(()=>{
  const observer = new IntersectionObserver(handleObserver,{
    root:null,
    threshold:1.0,
    rootMargin:'0px'
  });
  if(loader.current){
    observer.observe(loader.current);
  }
  return () => observer.disconnect();
},[itemsToShow])
   const handleObserver =(entries)=>{
    const target = entries[0];
    console.log(target);
    if(target.isIntersecting){
      fetchMoreData();
    }
   }
   const fetchMoreData=()=>{
     const moreData = data.slice(itemsToShow.length,itemsToShow.length+limit);
     setitemsToShow((prev)=>[...prev,...moreData]);
   }
  useEffect(()=>{
    fetchData();
  },[])
  
  return (
    <div className="App">
      <div className='main'>
    {itemsToShow.map((obj,index)=>{
      return(
        <div className='content' key={index}>
        <h1>{obj.title}</h1>
        <p>{obj.body}</p>
        </div>
      )
    })}
     {itemsToShow.length<data.length && (
      <div className='anim-loader' ref={loader} >
      </div>
    )}
    {itemsToShow.length>=data.length && (
      <div style={{textAlign:'center'}}>
        <h2>No more data to load</h2>
      </div>
    )}
    </div>
    </div>
  );
}

export default App;
