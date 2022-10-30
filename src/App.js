import './App.css';
import Profile from './components/Profile';
import Links from './components/Links';
import Socials from './components/Socials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Profile/>
        <Links/>
        <Socials/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
