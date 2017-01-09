class Input extends React.Component {
  
  constructor (props) {
    super(props);
  }
  
  handleChange (e) {
    this.props.textChange(e.target.value)
  }
  
  render () {
    return (
      <StyledTextarea color="gold" value={this.props.text} onChange={this.handleChange.bind(this)}></StyledTextarea>
    )
  }
  
}

Input.propTypes = {
  text: React.PropTypes.string.isRequired,
}
