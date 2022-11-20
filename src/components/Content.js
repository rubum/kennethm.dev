// Composes the main content
import '../css/App.css';
import cogLogo from '../images/cog.svg';
import codeScreen from '../images/code-screen.png';

export default function Content() {
	return (
		<div className='px-4 app-body mx-auto max-w-5xl px-2 pt-2 sm:px-6 lg:px-8'>  
			<div className='my-1'>
				<h2 className='text-xl pt-3 pb-10 text-gray-500 tracking-wide'> Hi, I'm <span className='text-gray-500 font-bold'>Kenneth Mburu</span></h2>
				<div className='flex flex-row max-h-20 justify-between items-center border-solid border-4 rounded-full border-blue-200 bg-gray-100'>
					<img src={cogLogo} className='App-logo max-h-20'/>
					<p className='content-center px-4 text-gray-400'>an engineer of apps</p>
					<img src={cogLogo} className='App-logo max-h-20'/>
				</div>

				<h3 className='text-l font-bold mt-10 text-gray-500'> What I do</h3>
				<div className='md:flex pt-3'>
					<div className='md:max-w-md text-normal'>
						<p>
							I work on the frontend and backend parts of web applications -- I love being the first user of the application/feature I'm developing.
						</p>
						<br />
						<p>
							Currently, I work for <a href='https://www.timeline.co/' className='text-blue-800'>Timeline</a> as a full-stack engineer, assisting in the development 
							of the innovative <a href='https://portfolios.timeline.co/' className='text-blue-600'>Portfolios</a> platform. 
						</p>
						<br />
						<p>Among the web technologies I use include Elixir/Phoenix/LiveView, Python/Django, Rust/Rocket, JavaScript/Vuejs/Reactjs and TailwindCss (this site is built with those).</p>

						{/* <button class="px-3 py-1 font-semibold text-sm bg-cyan-500 text-white rounded-2xl shadow-sm mr-2 mt-2">Tech stack</button>
						<button class="px-3 py-1 font-semibold text-sm bg-sky-500 text-white rounded-2xl shadow-sm mr-2">LinkedIn</button>
						<button class="px-3 py-1 font-semibold text-sm bg-blue-800 text-white rounded-2xl shadow-sm">Contact me</button> */}
					</div>
					<div className='mt-5 md:mt-0 border border-blue-300 rounded'>
						<img src={codeScreen} className='rounded bg-blend-hard-light'/>
					</div>
				</div>
			</div>
		</div>
	)
}