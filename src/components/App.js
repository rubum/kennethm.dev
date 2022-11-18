import '../css/App.css';
import Navbar from './Navbar';

export default function App() {
  return (
    <div>
      <Navbar />
      <div className='app-body'>
        <h1 className=''>Hi!</h1>
        <p>Welcome to my simple site</p>
      </div>
    </div>
  );
}