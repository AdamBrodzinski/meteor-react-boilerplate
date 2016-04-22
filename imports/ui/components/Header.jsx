import React from 'react';
import { Link } from 'react-router';

import LoginButtons from './LoginButtons.jsx';

export default class Header extends React.Component {
  render() {
    return (
      <header className='Header'>
        <b>Header</b> &nbsp;
        <Link to="/">Home</Link> &nbsp;
        <Link to="about">About Page</Link> &nbsp;
        <Link to="bad-url">Not Found Page</Link> &nbsp;

        <LoginButtons align='left' />
      </header>
    );
  }
}
