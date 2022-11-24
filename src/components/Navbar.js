// Handles navigations for the app

import React from 'react';
import profilePic from '../images/pro-pic.jpeg';

const webActiveLink = 'bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium';
const webInactiveLink = 'text-blue-200 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium';
const mobiActiveLink = 'block py-2 pl-3 pr-4 text-white bg-blue-500 rounded md:bg-transparent md:text-blue-500 md:p-0';
const mobiInactiveLink = 'block py-2 pl-3 pr-4 text-gray-400 rounded hover:bg-gray-600 md:hover:bg-gray-100 md:border-0 md:hover:text-blue-700 md:p-0';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showMenu: false
    }

    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu() {
    this.setState(state => ({ showMenu: !state.showMenu }));
  }

  webClassNameByPath(path) {
    return this.classNameByPath(path, webActiveLink, webInactiveLink)
  }

  mobiClassNameByPath(path) {
    return this.classNameByPath(path, mobiActiveLink, mobiInactiveLink)
  }

  classNameByPath(path, activeClassName, inActiveClassName) {
    if (path === '/' && (['/', '/about'].includes(this.props.location.pathname))) {
      return activeClassName
    } else if (path === this.props.location.pathname) {
      return activeClassName
    } else {
      return inActiveClassName
    }
  }

  render() {
    return (
      <nav className="bg-gray-700 text-white">
        <div className="mx-auto max-w-5xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <button onClick={this.toggleMenu} type="button" className="inline-flex items-center text-sm text-gray-500 sm:hidden md:hidden hover:bg-gray-700 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
              <svg className="w-8 h-8" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
            <div className="w-full absolute top-11 z-10" style={{ display: this.state.showMenu ? 'block' : 'none' }}>
              <ul className="flex flex-col p-3 mt-4 border border-gray-100 rounded-lg rounded-t-none bg-gray-700 border-gray-700">
                <li>
                  <a onClick={this.toggleMenu} href="/about" className={this.mobiClassNameByPath('/')}>About</a>
                </li>
                <li>
                  <a onClick={this.toggleMenu} href="/stack" className={this.mobiClassNameByPath('/stack')}>Stack</a>
                </li>
                <li>
                  <a onClick={this.toggleMenu} href="/portfolio" className={this.mobiClassNameByPath('/portfolio')}>Portfolio</a>
                </li>
                <li>
                  <a onClick={this.toggleMenu} href="/contact" className={this.mobiClassNameByPath('/contact')}>Contact</a>
                </li>
              </ul>
            </div>
            <div className="mr-11 flex flex-auto items-center justify-center sm:justify-start">
              <h1 className="font-bold text-gray-100 text-l">Kennethm</h1><span className="text-xs opacity-80 pt-1">.dev</span>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="hidden sm:ml-6 sm:mr-6 sm:block">
                <div className="flex space-x-4">
                  <a href="/about" className={this.webClassNameByPath('/')} aria-current="page">About</a>
                  <a href="/stack" className={this.webClassNameByPath('/stack')}>Stack</a>
                  <a href="/portfolio" className={this.webClassNameByPath('/portfolio')}>Portfolio</a>
                  <a href="/contact" className={this.webClassNameByPath('/contact')}>Contact</a>
                </div>
              </div>

              <div className="relative ml-5">
                <div type="button" className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                  <img className="h-12 w-12 rounded-full" src={profilePic} alt="Profile picture" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
};