import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {

const [Books,setBooks]=useState(13)
const [Pen,setPen]=useState(10)
const [Notebook,setNotebook]=useState(44)
const [Inkpen,setInkpen]=useState(78)

  return (
    <>
<h1>Inventory management</h1>


{/* Books */}



<div className='items'>
  <h2>Books</h2>

  <span>Books:{Books}</span>
  
  <button className='addBook' onClick={()=>{
    setBooks(Books+1)
  }}>
      +
    </button>
    <button className='remBook' onClick={()=>{
    setBooks(Books-1)
  }}>
      -
    </button>

    <span className='totalBooks'>{Books}</span>

</div>

{/* Pen */}



<div className='items'>
  <h2>Pen</h2>

  <span>Pen:{Pen}</span>
  
  <button className='addPen' onClick={()=>{
    setPen(Pen+1)
  }}>
      +
    </button>
    <button className='remPen' onClick={()=>{
    setPen(Pen-1)
  }}>
      -
    </button>

    <span className='totalPens'>{Pen}</span>

</div>



{/* Notebook */}


<div className='items'>
  <h2>Notebook</h2>

  <span>Notebook:{Notebook}</span>
  
  <button className='addNotebook' onClick={()=>{
    setNotebook(Notebook+1)
  }}>
      +
    </button>
    <button className='remNotebook' onClick={()=>{
    setNotebook(Notebook-1)
  }}>
      -
    </button>

    <span className='totalNotebooks'>{Notebook}</span>

</div>



{/* Inkpen */}


<div className='items'>
  <h2>Inkpen</h2>

  <span>Inkpen:{Inkpen}</span>
  
  <button className='addInkpen' onClick={()=>{
    setInkpen(Inkpen+1)
  }}>
      +
    </button>
    <button className='remInkpen' onClick={()=>{
    setInkpen(Inkpen-1)
  }}>
      -
    </button>

    <span className='totalInkpens'>{Inkpen}</span>

</div>

<div className='total'>total:{Inkpen+Notebook+Pen+Books}</div>

    </>
  );
}

export default App;
