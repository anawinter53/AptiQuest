import './App.css'
import { AiFillInfoCircle } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

export default function App() {

  const arrowTests = [
    {
      id: 1,
      img_link: 'src/assets/arrow-test-1.png',
      correct_keycode: '39'
    },
    {
      id: 2,
      img_link: 'src/assets/arrow-test-2.png',
      correct_keycode: '37'
    },
    {
      id: 3,
      img_link: 'src/assets/arrow-test-3.png',
      correct_keycode: '39'
    },
    {
      id: 4,
      img_link: 'src/assets/arrow-test-4.png',
      correct_keycode: '37'
    },
    {
      id: 5,
      img_link: 'src/assets/arrow-test-5.png',
      correct_keycode: '39'
    },
    {
      id: 6,
      img_link: 'src/assets/arrow-test-6.png',
      correct_keycode: '37'
    },
    {
      id: 7,
      img_link: 'src/assets/arrow-test-7.png',
      correct_keycode: '39'
    },
    {
      id: 8,
      img_link: 'src/assets/arrow-test-8.png',
      correct_keycode: '39'
    }
  ]

  const i = 0

  window.addEventListener('keydown', function(event) {
    const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
    console.log(key)
});


  return (
    <div>
      <AiFillInfoCircle className="icon" size="40px" color="#5441E1" />
      <div className='test-space'>
          <img src={arrowTests[i].img_link} />
      </div>
      <RxCross2 className="icon" size="40px" color="#5441E1" style={{position: 'absolute', top: "40px", right: "20px"}}/>
    </div>
  )
}

