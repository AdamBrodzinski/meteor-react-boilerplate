LoginButtons = React.createClass({
  propTypes: {
    align: React.PropTypes.string,
  },

  getDefaultProps() {
    return { align: 'right' };
  },

  componentDidMount() {
    var div = document.getElementById('LoginButtons');
    Blaze.renderWithData(Template.loginButtons, {align: this.props.align}, div);
  },

  shouldComponentUpdate() {
    return false;
  },

  render() {
    return (
      <div id='LoginButtons' />
    );
  }
});
