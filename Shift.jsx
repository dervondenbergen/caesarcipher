const H3 = styled.default.h3`
  margin: 0;
  float: left;
  
  @media (min-width: 45em) {
    float: none;
    clear: both;
    margin: 0;
  }
`;

const ShiftInput = styled.default.input`
  width: 2.28em;
  float: left;
  font-size: 1em;
  margin-left: 1em;
  margin-top: -0.2em;
  
  @media (min-width: 45em) {
    font-size: 1.6em;
    margin-top: .4em;
    margin-left: 0;
    clear: both;
  }
`;

const ShiftButton = styled.default.div`
  background: lightcoral;
  height: 1em;
  width: 1em;
  float: left;
  font-size: 1.5em;
  text-align: center;
  margin-top: -0.1em;
  margin-left: .5em;
  cursor: pointer;
  line-height: .9em;
  
  @media (min-width: 45em) {
    ${props => props.decrease ? 'clear: none;' : 'clear: both;'}
    ${props => props.decrease ? 'margin-left: .5em;' : 'margin-left: 0'}
    
    font-size: 2em;
    margin-top: .5em;
    float: left;
  }
`;

const Example = styled.default.div`
  float: left;
  margin-left: .8em;
  
  @media (min-width: 45em) {
    float: none;
    clear: both;
    margin: 0;
    font-size: 1.4em;
    padding-top: 1em;
  }
`;

class Shift extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  increase () {
    this.props.shiftChange( this.props.shift + 1 )
  }
  
  decrease () {
    this.props.shiftChange( this.props.shift - 1 )
  }
  
  numberChange (e) {
    this.props.shiftChange( parseInt(e.target.value) )
  }
  
  render () {
    return (
      <Section color="lightcoral">
        <H3>Shift</H3>
        <ShiftInput type="number" value={this.props.shift} onChange={this.numberChange.bind(this)} />
        <ShiftButton onClick={this.increase.bind(this)}>+</ShiftButton>
        <ShiftButton onClick={this.decrease.bind(this)} decrease>–</ShiftButton>
        <Example>(A → { ALPHABET[this.props.shift] })</Example>
      </Section>
    )
  }
}

Shift.propTypes = {
  shift: React.PropTypes.number.isRequired,
}
