import '../css/App.css';
import Navbar from './Navbar';

export default function App() {
  return (
    <div>
      <Navbar />
      <div className='app-body mx-auto max-w-5xl px-2 pt-4 sm:px-6 lg:px-8'>
        <h1 className=''>Hi!</h1>
        <p>Welcome to my simple site</p>
      </div>
    </div>
  );
}