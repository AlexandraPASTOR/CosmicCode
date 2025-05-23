import React from "react";
import { useRef, useState } from "react";
import './Quiz.css'
import { css } from "../../assets/css";

const quizCSS = ({setResultCSS}) => {

    let [index, setIndex] = useState(0);
    const [question, setQuestion] = useState(css[index]);
    const [lock, setLock] = useState(false);
    const [score, setScore] = useState(0);
    const [result, setResult] = useState(false);

    const option1 = useRef<HTMLButtonElement | null>(null);
    const option2 = useRef<HTMLButtonElement | null>(null);
    const option3 = useRef<HTMLButtonElement | null>(null);
    const option4 = useRef<HTMLButtonElement | null>(null);

    const optionArray = [option1, option2, option3, option4];

    const checkAns = (e, ans) => {
        if (lock === false) {
            if (question.ans===ans) {
            e.target.classList.add("correct");
            setLock(true);
            setScore(prev=>prev+1)
            }
            else{
            e.target.classList.add("wrong");
            setLock(true);
            optionArray[question.ans-1].current?.classList.add("correct")
            }
        }
        
    }

    const next = () => {
        if (lock===true) {
            if (index === css.length -1){
                setResult(true);
                setResultCSS(score >= 3);
                return 0;
            }
            setIndex(++index);
            setQuestion(css[index]);
            setLock(false);
            optionArray.map((option) =>{
                option.current?.classList.remove("wrong");
                option.current?.classList.remove("correct");
                return null;
            })
        }
    }

    const reset = () => {
        setIndex(0);
        setQuestion(css[0]);
        setScore(0);
        setLock(false);
        setResult(false);
        setResultCSS(false);
    }

    return(
        <div className="container">
            <h1>CSS - Les bases</h1>
            <hr/>{result?<></>:<>
            <h2>{index+1}. {question.question}</h2>
            <ul>
                <li ref={option1} onClick={(e)=>{checkAns(e,1)}}>{question.option1}</li>
                <li ref={option2} onClick={(e)=>{checkAns(e,2)}}>{question.option2}</li>
                <li ref={option3} onClick={(e)=>{checkAns(e,3)}}>{question.option3}</li>
                <li ref={option4} onClick={(e)=>{checkAns(e,4)}}>{question.option4}</li>

            </ul>
            <button className="bouton" type="button" onClick={next}>Suivant</button>
            <p>Question {index+1} sur {css.length}</p>
            </>}
            {result && (score >=3 ? (<>
            <h2>Votre score {score} sur {css.length}</h2>
            <p className="text-center font-bold text-2xl text-[#553f9a]">Bravo !</p>
            </>) : (<>
            <h2>Votre score {score} sur {css.length}</h2>
            <button className="recommencer" type="button" onClick={reset}>Recommencer</button>
            </>)) }
            
            {result && (score >=3 ? 
            (<video autoPlay muted loop width="70%" height="70%" className="mx-auto">
          <source src="/video/alien-content.webm" type="video/webm" />
        </video>) : 
        ( <video autoPlay muted loop width="70%" height="70%" className="mx-auto">
          <source src="/video/alien-notcontent.webm" type="video/webm" />
        </video> ))}

        </div>
    )
}

export default quizCSS
