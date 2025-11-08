import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  button: {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    '&:hover': {
      backgroundColor: 'darkblue'
    }
  }
});

function App() {
  const classes = useStyles();
  return <button className={classes.button}>Click Me</button>;
}

export default App;
