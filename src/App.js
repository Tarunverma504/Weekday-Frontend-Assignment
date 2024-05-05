import './App.css';
import { useState, useEffect } from 'react';
import FilterComponent from './Components/FilterComponent';
import JobsComponent from './Components/JobsComponent';
import axios from 'axios';
import { filterJobFun } from './Components/HelperFunctions';
function App() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [offset, setOffset] = useState(0);
  
  // State for filters
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedExperience, setSelectedExperience] = useState("");
  const [selectedMinBasePay, setSelectedMinBasePay] = useState("");
  const [selectedLocation, setSelectedLoaction] = useState("");
  const [searchCompanyName, setSearchCompanyName] = useState("");
  const [search, setSearch] = useState("");

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
      const newFilteredJobs = filterJobFun(selectedRole, selectedExperience, selectedMinBasePay, selectedLocation, searchCompanyName, data.data.jdList);
      setFilteredJobs(oldFilteredJobs=> [...oldFilteredJobs, ...newFilteredJobs]); // Initialize filteredJobs with all jobs

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

  useEffect(()=>{
    const newFilteredJobs = filterJobFun(selectedRole, selectedExperience, selectedMinBasePay, selectedLocation, searchCompanyName, jobs);
    setFilteredJobs(newFilteredJobs);
  },[selectedRole, selectedExperience, selectedMinBasePay, selectedLocation, searchCompanyName])
  
  return (
    <div className='container'>
      {/* Component to show filters in header */}
      <FilterComponent
        selectedRole={selectedRole}
        setSelectedRole={setSelectedRole}
        selectedExperience={selectedExperience}
        setSelectedExperience={setSelectedExperience}
        selectedMinBasePay={selectedMinBasePay}
        setSelectedMinBasePay={setSelectedMinBasePay}
        selectedLocation = {selectedLocation}
        setSelectedLoaction = {setSelectedLoaction}
        searchCompanyName = {searchCompanyName}
        setSearchCompanyName = {setSearchCompanyName}
        search = {search}
        setSearch = {setSearch}
      />

      {/* Component to show the jobs */}
      <JobsComponent jobs={filteredJobs}/>
    </div>
    
  );
}

export default App;
