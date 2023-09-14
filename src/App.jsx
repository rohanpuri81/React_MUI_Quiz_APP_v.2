import { useState } from 'react'
import axios from 'axios'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './Home/Home'
import Result from './Result/Result'
import Quiz from './Quiz/Quiz'
import Header from './Header'

function App() {
  
  const [name,setName]=useState('')
  const [questions,setQuestions]=useState()
  const [score,setScore]=useState(0)


  const fetchQuestions=async (category='',difficulty='')=>{
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
    setQuestions(data.results)
  }

  return (
    
    <div className='App'>
      <BrowserRouter>
        <Header />
         <Routes>
          <Route path='/' 
          element={<Home 
          name={name} 
          setName={setName} 
          fetchQuestions={fetchQuestions}/>}/>
          
          <Route 
          path='/quiz' 
          element={<Quiz 
          name={name} 
          questions={questions}
          score={score}
          setScore={setScore}
          />}/>
          <Route path='/result' element={<Result name={name} score={score}/>}/>
         </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
