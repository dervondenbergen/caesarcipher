const H1 = styled.default.h1`
  margin: 0;
`;

const P = styled.default.p`
  margin: 0;
`;

function Info () {
  return (
    <Section color="teal">
      <H1>Caesar cipher</H1>
      <h2>How to use?</h2>
      <P>
        Type the text of your choice in the textbox below. After doing this, or also while typing, choose the shift you want to use to cipher the text. More infos about the Caeser cipher are on the <a href="http://en.wikipedia.org/wiki/Caesar_cipher">Wikipedia Page</a>.
      </P>
      <br/>
      <P>
        Made by <a href="https://demont.is">@dervondenbergen</a> 
        This project is available on <a href="https://github.com/dervondenbergen/caesarcipher">GitHub</a>.
      </P>
    </Section>
  )
}
