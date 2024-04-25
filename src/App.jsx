import './App.css'
import Footer from './components/footer';
import Header from './components/header';
import UpButton from './components/upButton';
import About from './sections/about';
import Landing from './sections/landing';
import Projects from './sections/projects';

const App = () => {
  return (
    <main className='text-lg'>
      <UpButton/>
      <Header/>
      <Landing/>
      <About/>
      <Projects/>
      <Footer/>
    </main>
  )
};

export default App;