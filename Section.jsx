const Section = styled.default.div`
  width: 100%;
  box-sizing: border-box;
  float: left;
  border: ${props => props.color} solid 1em;
  padding: 1em;
  margin-bottom: 1em;
  
  @media (min-width: 45em) {
    
    width: 30%;
    height: 16.8em;
    overflow: scroll;
    
  }
  
`;
