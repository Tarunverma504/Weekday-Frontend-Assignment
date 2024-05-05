export const filterJobFun= (selectedRole, selectedExperience, selectedMinBasePay, selectedLocation, searchCompanyName, jobs)=>{
    if(jobs){
        return jobs.filter(job => {
            // Filter by role
            if (selectedRole !== "" && job.jobRole != selectedRole) {
              return false;
            }

            // Filter by location
            if (selectedLocation !== "" && job.location != selectedLocation) {
                return false;
            }

            if(searchCompanyName.trim().length>0 && job.companyName.toLowerCase() != searchCompanyName.trim().toLowerCase()){
                return false;
            }
        
            // Filter by experience
            if (selectedExperience !== "") {
                const jobMinExp = job.minExp ? parseInt(job.minExp) : null; // Convert to integer if not null, otherwise set to null
                const jobMaxExp = job.maxExp ? (job.maxExp === "10+" ? Infinity : parseInt(job.maxExp)) : null; // Convert to integer if not null, otherwise set to null
                const selectedExp = parseInt(selectedExperience);

                // Check if selected experience is within the range of minExp and maxExp, or if both minExp and maxExp are null
                if (!((selectedExp >= jobMinExp || jobMinExp === null) && (selectedExp <= jobMaxExp || jobMaxExp === null))) {
                    return false;
                }
            }

             // Filter by minimum base pay salary
             if (selectedMinBasePay !== "") {
                const [minSalary, maxSalary] = selectedMinBasePay.split("-").map(s => parseInt(s.replace("k USD", "").trim()));

                if (job.minJdSalary && job.maxJdSalary) {
                    // Convert job's salary range to integers
                    const jobMinSalary = parseInt(job.minJdSalary);
                    const jobMaxSalary = parseInt(job.maxJdSalary);

                    // Check if the job's salary range overlaps with the selected range
                    if (!(minSalary <= jobMaxSalary && maxSalary >= jobMinSalary)) {
                        return false;
                    }
                }
                else if(job.minJdSalary){
                    if(!(job.minJdSalary>=minSalary && job.minJdSalary<=maxSalary))
                        return false;
                }
                else if(job.maxJdSalary){
                    if(!(job.maxJdSalary>=minSalary && job.maxJdSalary<=maxSalary))
                        return false;
                }
                else {
                    // If job's salary range is not specified, exclude the job
                    return false;
                }
            }

            // If none of the filters exclude the job, include it in the filtered list
            return true;
          });
    }
    else{
        return [];
    }
    
}