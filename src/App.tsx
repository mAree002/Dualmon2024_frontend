import './App.css'
import Button from './components/Button'
import NavigationHeader from './components/navigationHeader';
import x from './components/navigation.module.css';

function App() {

  return (
    <div>
        <Button title="Submit" variant="secondary"/>
        <br/>
        <Button title="Choose File" variant="primary"/>
        <br/>
        <NavigationHeader className={x.header} />

    </div>
  )
}

export default App

