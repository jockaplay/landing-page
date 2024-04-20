import './App.css'
import Header from './components/header';
import About from './sections/about';
import Landing from './sections/landing';

const App = () => {
  return (
    <main className='text-lg'>
      <Header/>
      <Landing/>
      <About/>
    </main>
  )
};

export default App;