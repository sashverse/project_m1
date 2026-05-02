// all the auth relates api programs
// foloow interface - types

interface RegisterUserParams {
    name: string;
    email: string;
    password: string;
}

interface LoginUserParams {
    email: string;
    password: string;
}

export const registerUser = async (userData: RegisterUserParams) => {
    try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
};


export const loginUser = async (userData: LoginUserParams) => {
    try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
}
