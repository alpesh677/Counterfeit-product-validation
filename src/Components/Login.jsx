import React from 'react';
import login from "../Img/login.png"
const Login = () => {
    return (
        <div className="bg-gradient-to-br from-pink-500 to-indigo-800 min-h-screen flex justify-center items-center">
            <div className="w-4/5 md:w-3/5 lg:w-2/5 bg-white rounded-lg shadow-lg p-8 flex md:flex-row flex-col">
                <div className="w-full md:w-2/5 flex justify-center items-center">
                    <img
                        src={login}
                        alt="heroImg"
                        className='w-3/4 md:w-full'
                    />
                </div>
                <div className="w-full md:w-3/5 flex flex-col justify-center items-center md:ml-4 mt-4 md:mt-0">
                    <span className="text-3xl font-bold text-gray-800 mb-4">Login</span>
                    <input type="email" name="username" id="username" placeholder="Username" className="button input-field mb-4 w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                    <input type="password" name="password" id="password" placeholder="Password" className="button input-field mb-4 w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                    <button className="button w-full py-2 bg-green-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 hover:bg-green-600 transition-colors duration-300">Login</button>
                    <div className="text-sm mt-4">
                        <a href="#" className="links">Forgot Password?</a>
                    </div>
                    <div className="text-center mt-4">
                        <a href="#" className="links reg">Register Yourself &rarr;</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
