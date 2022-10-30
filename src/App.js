import './App.css';
import Profile from './components/Profile';
import Links from './components/Links';
import Socials from './components/Socials';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Profile/>
        <Links/>
        <Socials/>

      </div>
    </div>
  );
}

export default App;
