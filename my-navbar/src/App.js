
import './App.css';
import Logo from './Logo.js';
import Link from './Link';
import Button from './Button';

function App() {
  return (
    <>
    <div className="App">
      <div>
        <Logo title = "LOGOBAKERY"/>
      </div>
      <div>
        <Link link1 = "Services" link2 = "Project"  link3 ="About" />
      
      </div>
      <div>
      <Button button = "Contact"/>
      </div>
      
    </div>
    </>
  );
}

export default App;
