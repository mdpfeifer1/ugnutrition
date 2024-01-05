// Bringing in the required import from 'react-router-dom'
// import Header from './components/header'
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav.jsx';

function App() {
  return (
    <div>
      {/* <Header/> */}
      <Nav />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
export default App;