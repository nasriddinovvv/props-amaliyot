import './App.css'
import Card from './components/Card/Card'

function App() {
  return (
    <div className="page">
      <h1 className="title">Products</h1>

      <div className="cards">
        <Card bgColor="#CBCBCB" btnColor="#A5A5A5" />
        <Card bgColor="#5CA7FF" btnColor="#FFC700" />
        <Card bgColor="#D883FF" btnColor="#00FFB2" />
        <Card bgColor="#FF99E2" btnColor="#FFF500" />
        <Card bgColor="#C5C1C7" btnColor="#00FFB2" />
        <Card bgColor="#5CFF62" btnColor="#FFC700" />
      </div>
    </div>
  )
}

export default App
