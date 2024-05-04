import './App.css';
import { useState, useEffect } from 'react';
import FilterComponent from './Components/FilterComponent';
import JobsComponent from './Components/JobsComponent';
import axios from 'axios';
function App() {
  const [jobs, setJobs] = useState([]);
  const [offset, setOffset] = useState(0);


  // Fetch initial data from API when component mounts
  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        }
      }
    
      const body = {
        "limit": 10,
        "offset": offset
      }
      const data = await axios.post("https://api.weekday.technology/adhoc/getSampleJdJSON", body,  config)
      setJobs(oldJobs => [...oldJobs, ...data.data.jdList]);
      // setFilteredJobs(data); // Initialize filteredJobs with all jobs

      setOffset(offset+10);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const handleScroll = () => {

    // Check if user has scrolled to the bottom of the page
    if (window.innerHeight + document.documentElement.scrollTop+1 >= document.documentElement.offsetHeight) {
      fetchData();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);
  
  return (
    <div className='container'>
      {/* Component to show filters in header */}
      <FilterComponent/>

      {/* Component to show the jobs */}
      <JobsComponent jobs={jobs}/>
    </div>
    
  );
}

export default App;
