var Guess = React.createClass({
  getInitialState: function () {
    return ({count: 200})
  },
  render: function () {
    return (<input type="text" placeholder="Enter your Guess"></input>)
  }
})
ReactDOM.render(<Guess/>,document.getElementById('content'));
