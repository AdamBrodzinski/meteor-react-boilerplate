Header = React.createClass({
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
});
