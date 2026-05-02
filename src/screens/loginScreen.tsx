import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginScreen = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e: any) => {
        e.preventDefault();
        if (!email || !password) {
            setError("Please fill all the fields");
            return;
        };

        // api call
        // const result = await loginUser({ email, password });
        if (email === "abc@gmail.com" && password === "abc123") {
            console.log("Login successful");
            // store login data in local storage
            localStorage.setItem("user", JSON.stringify({ email, password }));
            navigate("/dashboard");
        } else {
            setError("Invalid email or password");
        }
        // if (result.error) {
        //     setError(result.error);
        //     return;
        // }
        setError("");
        setEmail("");
        setPassword("");


    }
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email Address
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="[EMAIL_ADDRESS]"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="******************"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <p className="text-red-500 text-sm mb-4">{error}</p>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                            type="submit"
                        >
                            Login
                        </button>
                    </form>
                    <p className="text-center mt-4">
                        Don't have an account? <Link to="/register" className="text-blue-500 hover:text-blue-700">Register</Link>
                    </p>
                </div>
            </div>
        </>
    )
};

export default LoginScreen;