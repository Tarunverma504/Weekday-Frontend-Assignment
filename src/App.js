import logo from './logo.svg';
import './App.css';
import FilterComponent from './Components/FilterComponent';
import JobsComponent from './Components/JobsComponent';
function App() {
  return (
    <div className='container'>
      {/* Component to show filters in header */}
      <FilterComponent/>

      {/* Component to show the jobs */}
      <JobsComponent/>
    </div>
    
  );
}

export default App;
