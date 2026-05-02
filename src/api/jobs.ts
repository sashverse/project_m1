import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://indeed12.p.rapidapi.com/company/Ubisoft/jobs',
    params: {
        query: 'manager',
        location: 'chicago',
        page_id: '1',
        locality: 'us',
        fromage: '1',
        radius: '50',
        sort: 'date',
        job_type: 'permanent'
    },
    headers: {
        'x-rapidapi-key': '23536740camshabc5aac1698ef0fp125201jsn6b292ea0ce49',
        'x-rapidapi-host': 'indeed12.p.rapidapi.com',
        'Content-Type': 'application/json'
    }
};

// export const fetchJobs = async () => {
//     try {
//         const response = await axios.request(options);
//         return response.data;
//     } catch (error) {
//         console.error(error);
//     }
// };

export const fetchJobs = async () => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
            },
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
}