import React, { useEffect, useState } from 'react'
import { CircularProgress } from '@mui/material'
import './Quiz.css'
import Question from './Question/Question'

function Quiz({name,questions,score,setScore,setQuestions}){

    const [options,setOptions]=useState()
    const [currQues,setCurrQues]=useState(0)
    useEffect(()=>{
      console.log(questions)
      setOptions(questions && handleShuffle([
        questions[currQues]?.correct_answer,
        ...questions[currQues]?.incorrect_answers

    ]))
    },[questions,currQues])
    console.log(questions)
    console.log(options)

    const handleShuffle=(optionss)=>{
         return optionss.sort(()=>Math.random()-0.5)
    }
    return(
        <div className='quiz'>
            <span className="subtitle">
                Welcome, {name}
            </span>

            {
                questions?(
                <>
                
                <div className='quizInfo'>
                    <span>{questions[currQues].category}</span>
                    <span>Score : {score}</span>
                </div>

                <Question 
                currQues={currQues}
                setCurrQues={setCurrQues}
                questions={questions}
                options={options}
                correct={questions[currQues]?.correct_answer}
                score={score}
                setScore={setScore}
                setQuestions={setQuestions}

                />
                
                </>
                ):<CircularProgress style={{margin:100,color:'inhert'}}
                 size={150}
                 thickness={1}
                />
                
            }
        </div>
    );
}

export default Quiz;