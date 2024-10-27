// class level component

// import React, {Component} from 'react'

// class App extends Component{
//   state = {
//     name : 'skillhub'
//   }
//   render(){
//     return(
//       <div>
//         <h2>welcome  to class {this.state.name}</h2>
//       </div>
//     )
//   }
// }
// export default App;


// Function level component
/*
import React,{useState} from 'react'

const App=()=>{
  const [name,setName] = useState("fun skill hub");
  return(
    <div>
      <h2>welcome to {name}</h2>
    </div>
  )
}
export default App;
*/

// ========================================================

/* PROJECTS */

//===================IMAGE GALLERY APP=====================


import React,{useState} from 'react';
import axios from 'axios';
import GAllery from './GAllery';
const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";

const App = () => {
  const [search,setSearch] = useState('')
  const [data,setData] = useState([])

  const changeHandler = e =>{
    setSearch(e.target.value)
  }
  const submitHAndler = e =>{
    e.preventDefault();
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`).then(
      response => setData(response.data.photos.photo)
    )
    console.log(search)
  }
  return (
    <div>
      <center>
        <h2>Gallery snapshots</h2>
        <form onSubmit={submitHAndler}>
          <input type='text' value={search} onChange={changeHandler}/><br /><br />
          <input type='submit' name='search'></input><br />
          {data.length>=1?<GAllery data = {data}/>:<h3>No data loaded</h3>}
        </form>
      </center>
      
    </div>
  );
}

export default App;




//========================> TODO APP <========================================
/*

import React,{useState} from 'react';
import Todolist from './Todolist';
const App = () => {
  const [task,SetTask] = useState('')
  const [todos,setTodos] = useState([])
  const changeHandler = e =>{
    SetTask(e.target.value)
  }
  const submitHAndler = e =>{
    e.preventDefault();
    const newTodos = [...todos,task];
    setTodos(newTodos);
    SetTask("");
  }
  const deleteHandler = (indexvalue) =>{
    const newTodos = todos.filter((todos,index) => index !== indexvalue);
    setTodos(newTodos)
  }
  return (
    <div>
      <center>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>Todo Management</h5>
            <form onSubmit={submitHAndler}>
              <input type='text' name='task' value={task} onChange={changeHandler}/> &nbsp;&nbsp;
              <input className='inp' type='submit' value='Add' name='add'></input>
            </form>
            <Todolist todoslist={todos} deletehandler={deleteHandler}/>
          </div>
        </div>
      </center>
    </div>
  );
}

export default App;

*/
//======================> Weather App <======================================
/*
import React from 'react';

const App = () => {
  return (
    <div>
      
    </div>
  );
}

export default App;
*/

//=======================> Weather APP <===============================

/*
import React,{useState} from 'react';

const App = () => {
  const [city,setCity] = useState("");
  const [result,setResult] = useState("")
  const ChangeHandler = e =>{
    setCity(e.target.value);
  }
  const OnsubmitHandeler = e =>{
    e.preventDefault();
    console.log(city);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
      response => response.json()
    ).then(data => {
        const kelvin = data.main.temp;
        const celsius = kelvin - 273.15
        setResult("Temperature at "+city+"\n"+celsius+" °C") //alt 0176
        setCity("")
    })
  }
  return (
    <div>
      <center>
        <div className='card'>
          <div className='card-body'>
            <h4 className='card-title'>WeatherApp</h4><br/>
            <form onSubmit={OnsubmitHandeler}>
              <input type='text' name='city' value={city} onChange={ChangeHandler}></input><br></br><br/>
              <input type='submit'></input><br></br><br/>
              <h3>{result}</h3>
            </form>
          </div>
        </div>
      </center>
    </div>
  );
}

export default App;

*/
//=======================>FOOD RECEIPE In ReactJS<=========================
/*

import React,{useState} from 'react';
import Products from './Products';
const App = () => {
  const [dish,setDish] = useState("");
  const [data,setData] = useState([]);
  const YOUR_APP_ID = "2c7547fe";
  const YOUR_APP_KEY ="0e21609a9da1a8256779bd89c120d2a5	";
  const changeHandler = e =>{
    setDish(e.target.value)
  }
  const Onsubmithandler = e =>{
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${dish}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`).then(
      response => response.json()
    ).then(
        data=>setData(data.hits)
    )
  }
  return (
    <div>
      <center>
        <div><br/>
          <form onSubmit={Onsubmithandler}>
            <input type='text' name='dish' value={dish} onChange={changeHandler}></input><br/><br/>
            <input type='submit' value="search"></input>
          </form>
          {data.length>=1 ? <Products data={data}/>:null}
        </div>
      </center>
    </div>
  );
}

export default App;
*/

// ==================>COVID-19 Tracker <=============================
/*
import React,{useEffect,useState} from 'react';

const App = () => {
  const [data,setData] = useState([]);
  useEffect(()=>{
    fetch("https://data.covid19india.org/data.json").then(
      response => response.json()
    ).then(jsondata =>setData(jsondata.statewise))
  },[])
  return (
    <div>
      <center>
        <h1>INDIA-COVID-19 Report</h1>
        <table>
          <thead>
            <tr>
              <th>state</th>
              <th>Confirmed</th>
              <th>Recovered</th>
              <th>Deaths</th>
              <th>Active</th>
              <th>LastUpdate</th>
              <th>Migratedother</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item =>{
              return(
                <tr>
                  <td>{item.state}</td>
                  <td>{item.confirmed}</td>
                  <td>{item.recovered}</td>
                  <td>{item.deaths}</td>
                  <td>{item.active}</td>
                  <td>{item.lastupdatedtime}</td>
                  <td>{item.migratedother}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </center>
    </div>
  );
}

export default App;

*/
// =================>Movie React JS App<=============================


// import React,{useState} from 'react';
// const App = () => {
//   const [movie,setMovie] = useState("");
//   const [data,setData] = useState([]);
//   const changeHandler = e =>{
//     setMovie(e.target.value)
//   }
//   const Onsubmithandler = e =>{
//     e.preventDefault();
//     fetch(`https://www.omdbapi.com/?s=${movie}&apikey=263d22d8`).then(
//       response => response.json()
//     ).then( value=>setData(value.Search)
//     )
//   }
//   const download=url =>{
//     fetch(url).then(response => {
//       response.arrayBuffer().then(function(buffer) {
//         const url = window.URL.createObjectURL(new Blob([buffer]));
//         const link = document.createElement("a");
//         link.href = url;
//         link.setAttribute("download", "image.png");
//         document.body.appendChild(link);
//         link.click();
//       });
//     })
//     .catch(err => {
//       console.log(err);
//     });

//   }
//   return (
//     <div>
//       <center>
//         <div><br/>
//           <form onSubmit={Onsubmithandler}>
//             <input type='text' name='movie' value={movie} onChange={changeHandler}></input><br/><br/>
//             <input type='submit' value="search"></input>
//           </form>
//             {data.map(film =>
//             <div>
//               <img src={film.Poster} alt={film.Title}/>
//             <div>
//               <h4>{film.Title}</h4>
//               <a href={film.Poster} onClick={()=>download(film.Poster)}>Download Poster</a>
//             </div>
//             </div>
//             )}
            
//         </div>
//       </center>
//     </div>
//   );
// }

// export default App;



// =====================>Emoji Search react app<=======================

/*
import React,{useState,useEffect} from 'react';
import Emojidata from './Emoji.json';
const App = () => {
  const [search,setSearch] = useState('');
  const [data,setData] = useState([]);
  useEffect(()=>{
    const newData = Emojidata.filter(emoji => emoji.title.toLowerCase().includes(search.toLowerCase()));
    setData(newData)
  },[search])
  return (
    <div>
      <center><br/>
        <h2>Emoji search bar</h2>
        <input type='text' name='search' value={search} onChange={(e)=>setSearch(e.target.value)}></input><br/><br/>
      </center>
        {data.map(emoji => <li>{emoji.symbol} {emoji.title}</li>)}
    </div>
  );
}
export default App;


*/

//===============================><========================

// import React from 'react';

// const App = () => {
//   return (
//     <div>
//       <center>
//         hello world
//         hdhbsbsnsssn
//       </center>
//     </div>
//   );
// }

// export default App;
