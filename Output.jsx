class Output extends React.Component {
  
  constructor (props) {
    super(props);
  }
  
  render () {
    return (
      <StyledTextarea color="thistle" value={this.props.text}></StyledTextarea>
    )
  }
  
}

Output.propTypes = {
  text: React.PropTypes.string.isRequired,
}
