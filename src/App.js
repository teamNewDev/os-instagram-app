import './App.css';
import { Bio, Gallery, Nav } from './components/homepage';

function App() {
  return (
    <>
      <Nav />
      <div className='container'>
        <Bio />
        <Gallery />
      </div>
    </>
  );
}

export default App;
