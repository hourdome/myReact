// import './App.css'
// import './index.css'
import logo from './logo.svg'
import Header from './Components/Topbar'
import ControlCard from './Components/ControlCard'

export default function App() {
  const titleArray = ['Logistic', 'E-commerce', 'Banking']

  return (
    <div>
      <Header
        className='text-3xl font-bold underline'
        subtitle='สวัสดีเราคือ Subtitle'
      />
      {titleArray.map((eachTitleArray) => (
        <ControlCard title={eachTitleArray} />
      ))}
      <div className='flex'>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
  )
}
