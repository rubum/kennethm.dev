// Handles navbar for the app
import profilePic from '../images/pro-pic.jpeg'; // Tell webpack this JS file uses this image

export default function Navbar() {
  return (
    <nav className="bg-gray-700 text-white">
        <div className="mx-auto max-w-5xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <div className="flex flex-row items-center justify-center">
                    <h1 className="font-bold text-xl">Rubum</h1><span className="text-xs pt-1.5">.dev</span>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="hidden sm:ml-6 sm:mr-6 sm:block">
                <div className="flex space-x-4">
                  {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                  <a href="#" className="bg-gray-800 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Home</a>
                  <a href="#" className="text-gray-200 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Stack</a>
                  <a href="#" className="text-gray-200 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>
                  <a href="#" className="text-gray-200 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contacts</a>
                </div>
              </div>

              {/* Profile dropdown */}
              <div className="relative ml-5">
                <div>
                  <button type="button" className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <span className="sr-only">Open user menu</span>
                    <img className="h-10 w-10 rounded-full" src={profilePic} alt=""/>
                  </button>
                </div>

                {/*
                  Dropdown menu, show/hide based on menu state.

                  Entering: "transition ease-out duration-100"
                    From: "transform opacity-0 scale-95"
                    To: "transform opacity-100 scale-100"
                  Leaving: "transition ease-in duration-75"
                    From: "transform opacity-100 scale-100"
                    To: "transform opacity-0 scale-95"
                */}

                <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
                  {/* Active: "bg-gray-100", Not Active: "" */}
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">Your Profile</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-1">Settings</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-2">Sign out</a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </nav>
  )
};