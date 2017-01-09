class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      ciphered: '',
      shift: 0,
    }
  }
  
  componentDidMount () {
    this.setState({
      ciphered: cipher(this.state.text, this.state.shift)
    })
  }
  
  textChange (value) {
    this.setState({
      text: value,
      ciphered: cipher(value, this.state.shift),
    })
  }
  
  shiftChange (value) {
    let newshift = value;
    if (value < 0) {
      newshift = 25
    } else if (value > 25) {
      newshift = 0
    }
    this.setState({
      shift: newshift,
      ciphered: cipher(this.state.text, newshift),
    })
  }
  
  render () {
    return (
      <div>
        <Info />
        <Input  text={this.state.text} textChange={this.textChange.bind(this)} />
        <Shift  shift={this.state.shift} shiftChange={this.shiftChange.bind(this)} />
        <Output text={this.state.ciphered} />
      </div>
    )
  }
}

App.propTypes = {
  text: React.PropTypes.string.isRequired,
  shift: React.PropTypes.number.isRequred,
}
