import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

function Login() {
  return (
    <div className="flex flex-col justify-center items-center h-screens bg-black ">
      <div className="bg-black bg-opacity-80">
        <div className="text-2xl mb-4">🎵 Spotify</div>
        <h2 className="text-xl mb-4">Log in to Spotify</h2>
        <button className="flex items-center">Continue with google</button>
        <button className="flex items-center">Continue with facebook</button>
        <button className="flex items-center">Continue with apple</button>
        <button className="flex items-center">
          Continue with phone number
        </button>
        <div className="border-t border-gray-600 my-4"></div>
        <input type="text" />
        
      </div>
    </div>
  );
}

export default Login;
