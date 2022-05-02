import './App.css'
import StudCard from './StudCard'
import StudCardClass from './StudCardClass'
import MinMaxClass from './MinMaxClass'
import Book from './JsxHm'
import ReacTimer from './ReacTimer'

function App() {
  return (
    <div className="App">
      <StudCard text="Студент" name="Олег" num="1" />
      <StudCard text="Препод" name="Евгений" num="2" />
      <StudCard text="Студент" name="Кирилл" num="3" />
      <StudCardClass />

      <MinMaxClass />
      <div>
        <Book name="JS for beginners" year="2018" price="1000" />
        <Book name="React for beginners" year="2019" price="1200" />
        <Book name="Vue for beginners" year="2021" price="1500" />
      </div>

      <ReacTimer />
    </div>
  )
}

// <StudCard name={}/> --> React.createElement(StudCard, {})

// function StudCard({ text }) {
//   return (
//     <>
//       <hr />
//       <div className="card">{text}</div>
//       <hr />
//     </>
//   )
// }

export default App
