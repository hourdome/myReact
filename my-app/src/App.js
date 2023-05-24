// import './App.css'
// import './index.css'
import logo from './logo.svg'
import Header from './Components/Topbar'
import ControlCard from './Components/ControlCard'

export default function App() {
  const titleArray = ['Logistic', 'E-commerce', 'Banking']

  return (
    <div>
      <Header className='text-3xl font-bold underline' subtitle=' TEST' />
      {titleArray.map((eachTitleArray) => (
        <ControlCard title={eachTitleArray} />
      ))}
    </div>
  )
}
