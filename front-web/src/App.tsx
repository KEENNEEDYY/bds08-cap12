import './App.css';
import Filter from './components/filter';
import Header from './components/header';

const App = () => {
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter />
      </div>
    </>
  );
};

export default App;
