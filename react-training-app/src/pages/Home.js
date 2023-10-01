import { createContext, useContext, useState, useRef } from 'react';
const ThemeContext = createContext(null);

const Home = () => {
  const [theme, setTheme] = useState('pillows');

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Form />

        <label>
          <input
            type="checkbox"
            checked={theme === 'coffee'}
            onChange={(e) => {
              setTheme(e.target.checked ? 'coffee' : 'pillows');
            }}
          />
          Use a 'Coffee Theme'
        </label>
      </ThemeContext.Provider>

      <ButtonRef />
    </>
  );
};

const Form = ({ children }) => {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
};

const Panel = ({ title, children }) => {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;

  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
};

const Button = ({ children }) => {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;

  return <button className={className}>{children}</button>;
};

const ButtonRef = () => {
  const myButtonRef = useRef(null);

  const handleClick = () => {
    myButtonRef.current.style.backgroundColor = '#e6ccff';
  };

  return (
    <>
      <p>
        <button ref={myButtonRef} onClick={handleClick}>
          Change my color!
        </button>
      </p>
    </>
  );
};

export default Home;
