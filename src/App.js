import './App.css';
import User from './User';
import ErrorCheck from './ErrorCheck'

function App() {
  return (
    <ErrorCheck>
      <User />
    </ErrorCheck>
  );
}

export default App;
