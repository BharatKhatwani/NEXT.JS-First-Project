"use client"
import axios from "axios";
import { ChangeEventHandler, useState } from "react";

const  Signup = () =>  {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async () => {
        try {
            const res = await axios.post("/api/user", { username, password });
            alert("Signup successful");
        } catch (error) {
            alert("Error signing up");
        }
    };

    return (
        <div className="h-screen flex justify-center items-center">
            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                <div className="px-4">
                    <div className="text-3xl font-extrabold text-center mb-4">Sign up</div>
                    <LabelledInput onChange={(e) => setUsername(e.target.value)} label="Username" placeholder="harkirat@gmail.com" />
                    <LabelledInput onChange={(e) => setPassword(e.target.value)} label="Password" type="password" placeholder="123456" />
                    <button
                        type="button"
                        onClick={handleSignup}
                        className="mt-6 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
                    >
                        Sign up
                    </button>
                </div>
            </div>
        </div>
    );
}

function LabelledInput({ label, placeholder, type, onChange }: LabelledInputType) {
    return (
        <div>
            <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
            <input
                onChange={onChange}
                type={type || "text"}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder={placeholder}
                required
            />
        </div>
    );
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    type?: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
}
export default Signup;