import { useEffect } from 'react';
import './App.css';
import HomePage from './components/homePage/HomePage';


function App() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0});
  }, []);

  return (
    <div className="App">
       <HomePage />
    </div>
  );
}

export default App;
