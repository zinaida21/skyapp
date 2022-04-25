import './App.css'
import StudCard from './StudCard'
import StudCardClass from './StudCardClass'
import MinMaxClass from './MinMaxClass'

function App() {
  return (
    <div className="App">
      <StudCard text="Студент" name="Олег" num="1" />
      <StudCard text="Препод" name="Евгений" num="2" />
      <StudCard text="Студент" name="Кирилл" num="3" />
      <StudCardClass />

      <MinMaxClass />
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
