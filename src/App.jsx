import React, { useEffect, useState } from 'react';
import Popup from "reactjs-popup"
import { AiFillInfoCircle } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import useKeypress from 'react-use-keypress';
import './App.css'

export default function App() {

  const arrowTests = [
    {
      id: 1,
      img_link: 'src/assets/arrow-test-1.png',
      correct_response: 'ArrowRight'
    },
    {
      id: 2,
      img_link: 'src/assets/arrow-test-2.png',
      correct_keycode: 'ArrowLeft'
    },
    {
      id: 3,
      img_link: 'src/assets/arrow-test-3.png',
      correct_keycode: 'ArrowRight'
    },
    {
      id: 4,
      img_link: 'src/assets/arrow-test-4.png',
      correct_keycode: 'ArrowLeft'
    },
    {
      id: 5,
      img_link: 'src/assets/arrow-test-5.png',
      correct_keycode: 'ArrowRight'
    },
    {
      id: 6,
      img_link: 'src/assets/arrow-test-6.png',
      correct_keycode: 'ArrowLeft'
    },
    {
      id: 7,
      img_link: 'src/assets/arrow-test-7.png',
      correct_keycode: 'ArrowRight'
    },
    {
      id: 8,
      img_link: 'src/assets/arrow-test-8.png',
      correct_keycode: 'ArrowRight'
    }
  ]

  const [ completed, setCompleted ] = useState(false)

  let i = 0;
  let score = 0;

  useKeypress(['ArrowLeft', 'ArrowRight'], (event) => {
    if(event.key == 'ArrowLeft' | event.key == 'ArrowRight' & completed == false & i <= 6) {
      (event.key == arrowTests[i].correct_keycode) ? score ++ : score + 0;
      console.log('the current score is', score)
      console.log(event.key)
      i ++;
      console.log(i)
      $('.test-img').attr('src', arrowTests[i].img_link)
    } else {
      console.log(completed)
      setCompleted(true)
      console.log(completed)
      console.log(score/8 * 100)
      localStorage.setItem('percentage', (score/8 * 100))
    }
  });

  let percentage = parseInt(localStorage.getItem('percentage'))

  return (
    <div>
      <AiFillInfoCircle className="icon" size="40px" color="#5441E1" />
      <div className='test-space'>
          <img className='test-img' src={arrowTests[i].img_link} />
      </div>
      <RxCross2 className="icon" size="40px" color="#5441E1" style={{position: 'absolute', top: "40px", right: "20px"}}/>
      <Popup className='popup' open={completed} modal><div> Congrats! You got {percentage}% </div></Popup>
    </div>
  )
}

