import { fetchJobs } from "../../api/jobs";
import SashInput from "../../components/SashInput";

const Dashboard = () => {
    const handleClick = async () => {
        const data = await fetchJobs();
        console.log(data)
    };
    return (
        <>
            <h1>Dashboard</h1>

            <button className="border bg-red-500 py-2 px-4 text-blue-900 cursor-pointer" onClick={handleClick}>Get Data</button>
            <SashInput btnLabel="find" width="80" />
        </>
    )
};

export default Dashboard;
