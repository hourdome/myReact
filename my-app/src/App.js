import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Topbar'
import ControlCard from './Components/ControlCard'

export default function App() {
  const titleArray = ['Logistic', 'E-commerce', 'Banking']
  return (
    <div>
      <Header subtitle='สวัสดีเราคือ Subtitle' />
      {titleArray.map((eachTitleArray) => (
        <ControlCard title={eachTitleArray} />
      ))}
    </div>
  )
}
