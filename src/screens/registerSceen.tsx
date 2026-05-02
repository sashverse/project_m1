import { useState } from "react";
import { registerUser } from "../api/auth";
import { Link } from "react-router-dom";

const RegisterScreen = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");



    const handleRegister = async (event: any) => {
        event.preventDefault();
        if (!name || !email || !password) {
            setError("Please fill all the fields");
            return;
        };
        // api call response success
        const result = await registerUser({ name, email, password });
        console.log(result);
        setName("");
        setEmail("");
        setPassword("");
        setError("")
    };


    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>
                    <form onSubmit={handleRegister}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                type="text"
                                placeholder="John Doe"
                                onChange={(event) => setName(event.target.value)}
                                value={name}
                            />

                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email Address <span className="text-red-500">*</span>
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="[EMAIL_ADDRESS]"
                                onChange={(event) => setEmail(event.target.value)}
                                value={email}
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="******************"
                                onChange={(event) => setPassword(event.target.value)}
                                value={password}
                            />
                        </div>
                        <p className="text-red-500">{error}</p>

                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                            type="submit"
                        >
                            Register
                        </button>
                        <p className="text-center mt-4">Already have an account? <Link to="/login" className="text-blue-500 hover:text-blue-700">Login</Link></p>
                    </form>
                </div>
            </div>
        </>
    )
};

export default RegisterScreen;