import { useState } from 'react';
import Modal from 'react-modal';
import { AiFillInfoCircle } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import './App.css'

export default function App() {

  $('.result-screen').hide();

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

  if (completed == true) {
    // $('.popup').attr('open', 'true')
    $('.result-screen').show()
  } 

  let i = 0;
  let score = 0;

  // function checkAnswer() {
  //   if ()
  // }

  window.addEventListener('keydown', function(event) {
    const key = event.key; 
    if(key == 'ArrowLeft' | key == 'ArrowRight') {
      (key == arrowTests[i].correct_keycode) ? score ++ : score + 0;
      if( i <= 6 ) {
        i ++;
      $('.test-img').attr('src', arrowTests[i].img_link)
      } else {
        setCompleted(true)
      }
    } 
  });

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }


  return (
    <div>
      <AiFillInfoCircle className="icon" size="40px" color="#5441E1" />
      <div className='test-space'>
          <img className='test-img' src={arrowTests[i].img_link} />
      </div>
      <RxCross2 className="icon" size="40px" color="#5441E1" style={{position: 'absolute', top: "40px", right: "20px"}}/>
      <div className='result-screen'>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Score Modal"
        >
          <button onClick={closeModal}>close</button>
        </Modal>
      </div>
    </div>
  )
}

