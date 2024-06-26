import './App.css';
import AppRouterComponent from './AppRouter';
import NavigationComponent from './Navigation';

function App() {
  return (
    <div className="App">
        <div className="row g-0">
          <div className="col-md-3">
                <NavigationComponent />
          </div>

          <div className="col-md-9">
                  <AppRouterComponent />
          </div>
        </div>
    </div>
  );
}

export default App;
