import './App.css';
import Button from './components/Button';
import CalendarPanel from './components/CalendarPanel';

function App() {
  console.log(new Date());
  return (
    <div className="App">
      <CalendarPanel />

    </div>
  );
}

export default App;
