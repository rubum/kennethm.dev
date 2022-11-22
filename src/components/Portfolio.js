// Composes the main content
import '../css/App.css';
import Navbar from './Navbar';
import { useLocation } from "react-router-dom";

export default function About() {
	return (
		<div>
			<Navbar location={useLocation()}/>
			<div className='px-4 app-body mx-auto max-w-5xl px-2 pt-2 sm:px-6 lg:px-8'>
				<p className='pt-10 text-center'>My portfolio info coming soon!</p>
			</div>
		</div>
	)
}