import { useEffect, useState } from "react";
import { fetchJobs } from "../../api/jobs";

const Jobs = () => {

    // local state which stores jobs data
    const [jobs, setJobs] = useState([]);
    const [refresh, setRefresh] = useState(false);

    const fetchJobs_ = async () => {
        const data = await fetchJobs();
        setJobs(data);
    };

    // useeffect to fetch the jobs data from the api
    useEffect(() => {
        fetchJobs_();
    }, [refresh]);

    const handleClear = () => {
        setJobs([]);
    };

    const handleClick = () => {
        setRefresh(!refresh)
    };



    return (
        <>
            {/* we map jobs data */}
            <div>
                <button className="border bg-red-500 py-2 px-4 text-blue-900 cursor-pointer" onClick={handleClick}>Get Data</button>
                <button className="border bg-red-500 py-2 px-4 text-blue-900 cursor-pointer" onClick={handleClear}>clear data</button>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {jobs.map((job: any, index: number) => (
                    <div key={index} className="border border-gray-200 p-4 mb-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300 overflow-hidden" >
                        <h2>{job.title}</h2>
                        <p>{job.body}</p>
                    </div>
                ))}
            </div>
        </>
    )
};

export default Jobs;