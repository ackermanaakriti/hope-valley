import './App.css';
import { LayoutProvider } from './Global/Context/LayoutContext';
import Homepage from './Pages/Homepage';

function App() {
  return (
   <>
   <LayoutProvider>
   <Homepage/>
   </LayoutProvider>
   
   </>
  );
}

export default App;
