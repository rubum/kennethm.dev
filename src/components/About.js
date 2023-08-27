// Composes the main content
import '../css/App.css';
import Navbar from './Navbar';

import cogLogo from '../images/cog.svg';
import value8logo from '../images/value8.png';
import timelineLogo from '../images/timeline.png';

import { useLocation } from "react-router-dom";

export default function About() {
	return (
		<div>
			<Navbar location={useLocation()} />
			<div className='px-5 mx-auto max-w-5xl px-2 pt-2 sm:px-6 lg:px-8'>
				<div className='mt-1 px-3'>
					<h2 className='text-xl pt-3 pb-10 text-gray-500 tracking-wide'><span className='text-lg'>&#128075;</span> Hi. I'm <span className='text-gray-500 font-bold'>Kenneth Mburu</span></h2>
					<div className='flex flex-row max-h-20 justify-between items-center border-solid border-4 rounded-full border-blue-200 bg-gray-100'>
						<img src={cogLogo} className='App-logo max-h-20' />
						<p className='content-center px-4 text-gray-400 font-bold'>an engineer of apps</p>
						<img src={cogLogo} className='App-logo max-h-20' />
					</div>

					<h3 className='text-medium font-bold mt-10 text-gray-500 underline'><i className="fa-solid fa-briefcase pr-3"></i>What I do</h3>
					<div className='md:flex pt-3'>
						<div className='md:w-full md:pr-2 text-normal'>
							<p>
								I collaboratively design and develop both the frontend and backend components of web applications, immersing 
								myself in both facets of the application's architecture. An important approach in the development phase involves stepping into the shoes of the primary 
								user to conduct exhaustive testing and iterative refinement, ultimately yielding a meticulously polished end product
							</p>
							<br />
							<p>
								Presently, I work for <a href='https://www.timeline.co/' className='text-blue-800'>Timeline</a> as a full-stack engineer, assisting in the development
								of the innovative <a href='https://portfolios.timeline.co/' className='text-blue-600'>Portfolios</a> platform.
							</p>
							<br />
							<p>The web technologies I use/have used include Elixir/Phoenix/LiveView, Python/Django, Rust/Rocket, JavaScript/Vuejs/Reactjs and Tailwindcss.</p>
						</div>
						<h4 className='mt-4 font-normal text-gray-400 underline sm:hidden'>View profiles and projects</h4>
						<div className='mt-2 md:w-full md:mt-0 border border-gray-100 rounded w-full bg-gradient-to-br from-gray-50 to-gray-700'>
							<div className='grid grid-cols-2 gap-4'>
								<a className='bg-gray-700 border border-gray-300 rounded-lg mt-3 ml-3 md:mt-5 md:ml-4 pt-2 whitespace-normal' href='https://github.com/rubum'>
									<span className='pl-3 pb-3 md:pb-1 flex items-center text-white'>
										<i className="fa-brands fa-github pr-2"></i><span className='font-medium'>Github</span>
									</span>
									<p className='hover:bg-gray-100 bg-white rounded-b-lg hidden md:block sm:block pt-3 pl-3 pb-3'>Find some of my personal projects here.</p>
								</a>
								<a className='bg-sky-700 border border-gray-300 rounded-lg mt-3 mr-3 md:mt-5 md:mr-4 pt-2 whitespace-normal' href='https://www.linkedin.com/in/kenmburu/'>
									<span className='pl-3 pb-3 md:pb-1 flex items-center text-white'>
										<i className="fa-brands fa-linkedin pr-2"></i><span className='font-medium'>LinkedIn</span>
									</span>
									<p className='hover:bg-gray-100 bg-white rounded-b-lg hidden md:block sm:block pt-3 pl-3 pb-3'>See my LinkedIn profile by clicking here.</p>
								</a>
							</div>
							<div className='grid grid-cols-2 gap-4'>
								<a className='bg-sky-600 border border-gray-300 rounded-lg mt-3 mb-3 ml-3 md:mt-5 md:ml-4 pt-2 whitespace-normal' href='https://www.timeline.co/'>
									<span className='pl-3 pb-3 md:pb-1 flex items-center text-white'>
										<img src={timelineLogo} className="w-5 pr-2"></img><span className='font-medium'>Timeline</span>
									</span>
									<p className='hover:bg-gray-100 bg-white rounded-b-lg hidden md:block sm:block pt-3 pl-3 pb-3'>Current job as a full-stack engineer</p>
								</a>
								<a className='bg-blue-800	border border-gray-300 rounded-lg mt-3 mb-3 mr-3 md:mt-5 md:mr-4 pt-2 whitespace-normal' href='https://valuechainfactory.com/'>
									<span className='pl-3 pb-3 md:pb-1 flex items-center text-white'>
										<img src={value8logo} className="w-5 pr-2"></img><span className='font-medium'>Value Chain</span>
									</span>
									<p className='hover:bg-gray-100 bg-white rounded-b-lg hidden md:block sm:block pt-3 pl-3 pb-3'>Former workplace as a full-stack engineer</p>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='bg-gray-600 mt-10 pb-6'>
				<div className='py-4 px-4 mx-auto max-w-5xl sm:px-6 lg:px-8'>
					<h3 className='text-gray-100 text-medium font-bold underline'><i className="fa-solid fa-rocket pr-3 text-yellow-400"></i>How it all started</h3>
					<p className='text-white mt-3'>
						It was the year 2017 and I had a desire to create my own website. So I tried platforms like Wix with drag and drop features
						but I felt I wasn't able to do as much as my mind was imagining. I also had some GIS (Geographic Information Systems) ideas I wanted to explore.
						And that's when I started learning HTML and CSS then into Python -- initially to handle forms processing but then it led me to Data Science.
					</p>

					<p className='text-white mt-3'>
						I learnt and practiced Data Science, Machine Learning, Artificial Intelligence and Data Engineering for at least 1 year before
						getting into Software Engineering. The later was more suited for me since I didn't have to learn lots of mathematics
						as the former field was requiring.
					</p>
					<p className='text-white mt-3'>
						This is my 5th year in tech and I've loved it all along. You can click the links on the menu to find out more on the
						<a className='text-blue-300 font-bold' href="/stack"> stack I use</a>, <a className='text-blue-300 font-bold' href="/portfolio">
							a portfolio of projects I've worked on</a> and how to <a className='text-blue-300 font-bold' href="/contact">get in touch with me</a>.
					</p>
				</div>
			</div>
			<div className='bg-gray-600 pb-56'>
					<hr className='p-6 text-gray-50' />
					<p className='text-white text-center'>&copy; 2023 Kenneth Mburu</p>
				</div>
		</div>
	)
}