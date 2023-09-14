import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Home.css'
import {Button, MenuItem, TextField} from '@mui/material'
import Categories from '../Data/Categories';
import ErrorMessage from '../ErrorMessage';

function Home({name,setName,fetchQuestions}){
    const [category,setCategory]=useState('')
    const [difficulty,setDifficulty]=useState('')
    const [error,setError]=useState(false)

    const navigate = useNavigate();

    const handleSubmit=()=> {
        if(!category || !difficulty || !name){
            setError(true)
        }else{
            setError(false)
            fetchQuestions(category,difficulty)
            navigate('/quiz');
        }

    }
    return(
        <div className='content'>
           <div className='settings'>
            <span style={{fontSize:30}}>Quiz Settings</span>
            <div className="setting_select">

                {error && <ErrorMessage>Please Fill All the fields</ErrorMessage>}
                <TextField 
                style={{marginBottom:'25'}} 
                label='Enter Your Name' 
                onChange={(e)=>{setName(e.target.value)}}
                variant='outlined'
                />

                <TextField 
                select
                label='Select Category'
                variant='outlined'
                value={category}
                onChange={(e)=>setCategory(e.target.value)}
                style={{marginBottom:30}}
                >
                {
                    Categories.map((cat)=>{
                    return(
                        <MenuItem key={cat.category} value={cat.value}>
                  {cat.category}
                </MenuItem>
                    );
                       
                    })
                }

                </TextField>

                <TextField 
                select
                label='Select Difficulty'
                value={difficulty}
                onChange={(e)=>{setDifficulty(e.target.value)}}
                variant='outlined'
                style={{marginBottom:30}}
                >
                    <MenuItem key="Easy" value="easy">
                    Easy
                    </MenuItem>
                    <MenuItem key="Medium" value="medium">
                    Medium
                    </MenuItem>
                    <MenuItem key="Hard" value="hard">
                    Hard
                    </MenuItem>

                </TextField>

                <Button 
                variant='contained' 
                size='large' 
                color='primary'
                onClick={handleSubmit}
                >
                    Start Quiz
                </Button>
                

            </div>
           </div>
           <img src="./quiz.svg" alt="quizz img" className='banner' />
        </div>
    );
}

export default Home;