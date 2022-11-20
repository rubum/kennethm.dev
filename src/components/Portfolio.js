// Composes the main content
import '../css/App.css';
import Navbar from './Navbar';
import Footer from './Footer';

export default function About() {
	return (
		<div>
			<Navbar />
			<div className='px-4 app-body mx-auto max-w-5xl px-2 pt-2 sm:px-6 lg:px-8'>
				<p>My portfolio!</p>
			</div>
			<Footer />
		</div>
	)
}