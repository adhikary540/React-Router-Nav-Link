import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github(){
    const data = useLoaderData()

    return (
        <div className="text-center bg-green-600 text-white py-5 px-5">Github Followers: {data.followers}
        <img src={data.avatar_url} width={300} />
        </div>
    );
} 
export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/adhikary540')
    return response.json()
}