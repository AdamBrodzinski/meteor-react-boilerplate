import React from 'react'
import LoginButtons from '../LoginButtons.jsx'

export default class Header extends React.Component {
  render() {
    return (
      <header className='Header'>
        <b>Header</b> &nbsp;
        <a href="/">Home</a> &nbsp;
        <a href="/about">About Page</a> &nbsp;
        <a href="/bad-url">Not Found Page</a> &nbsp;

        <LoginButtons align='left' />
      </header>
    );
  }
}
