import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import { AppProvider } from './context/AppContext';


function App() {
  return (
    <div>
      <AppProvider>
        <Header />
        <Sidebar />
        <Main />
      </AppProvider>
    </div>
    
  );
}

export default App;
