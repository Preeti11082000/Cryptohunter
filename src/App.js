import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Homepage from './Pages/Homepage';
import CoinPage from './Pages/CoinPage';
import Header from './components/Header';

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: '#14161a',
    color: 'white',
    minHeight: '100vh',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} exact />
          <Route path="/coins/:id" element={<CoinPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
