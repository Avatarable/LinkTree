import './App.css';
import Profile from './components/Profile';
import Links from './components/Links';
import Socials from './components/Socials';
import Footer from './components/Footer';
import Share from './components/Share';

function App() {
  return (
    <div className="App">
      <div className="container position-relative">
        <Profile/>
        <Links/>
        <Socials/>
        <Footer/>
        <Share/>
      </div>
    </div>
  );
}

export default App;
