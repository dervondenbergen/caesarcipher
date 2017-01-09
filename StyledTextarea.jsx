const StyledTextarea = styled.default.textarea`
  float: left;
  width: 100%;
  height: 10em;
  font-size: 1.2em;
  border: solid 1em;
  box-sizing: border-box;
  padding: 1em;
  resize: none;
  margin-bottom: 1em;
  border-color: ${props => props.color};
  
  @media (min-width: 45em) {
    width: calc(70% - 1em);
    height: 14em;
    margin-left: 1em;
  }
`;
