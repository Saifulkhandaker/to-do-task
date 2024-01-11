import { useEffect } from "react";
import { useState } from "react";
import Card from "../components/card";

const Home = () => {

    const [list, setList] = useState([]);

    useEffect(() => {
        fetch('/to-do.json')
        .then(res => res.json())
        .then(data => setList(data))
    }, [])

    return (
            <div className="max-h-screen pt-4 overflow-x-auto w-fit flex gap-5 bg-white shadow-2xl py-2 px-5">
            {/* Incomplete section */}
            <div className="bg-[#F2F4F7] w-96 h-screen pt-5 px-2">
                {/* header section */}
                <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                        <button className="bg-[#D21010] py-3 px-3 rounded-l-2xl cursor-default"></button>
                        <h4 className="font-medium">Incomplete</h4>
                    </div>
                    <h4 className="font-medium py-1 px-2 rounded-md bg-[#E8EEF3] w-6">0</h4>
                </div>
                {/* card section */}
                <div className="h-[75vh] overflow-y-auto shared mt-6 mb-0">
                    <div className="grid grid-cols-1 gap-5 px-1 pr-3 ">
                        {list.map(newlist => <Card
                        newlist={newlist}
                        ></Card>)}
                    </div>
                </div>
            </div>
            {/* To-d0 section */}
            <div className="bg-[#F2F4F7] w-96 h-screen pt-5 px-2">
                {/* header section */}
                <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                        <button className="bg-[#00B5FF] py-3 px-3 rounded-l-2xl cursor-default"></button>
                        <h4 className="font-medium">To Do</h4>
                    </div>
                    <h4 className="font-medium py-1 px-2 rounded-md bg-[#E8EEF3] w-6">0</h4>
                </div>
                {/* card section */}
                <div className="h-[75vh] overflow-y-auto shared mt-6 mb-0">
                    <div className="grid grid-cols-1 gap-5 px-1 pr-3 ">
                        {list.map(newlist => <Card
                        newlist={newlist}
                        ></Card>)}
                    </div>
                </div>
            </div>
            {/* Doing section */}
            <div className="bg-[#F2F4F7] w-96 h-screen pt-5 px-2">
                {/* header section */}
                <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                        <button className="bg-[#FFE700] py-3 px-3 rounded-l-2xl cursor-default"></button>
                        <h4 className="font-medium">Doing</h4>
                    </div>
                    <h4 className="font-medium py-1 px-2 rounded-md bg-[#E8EEF3] w-6">0</h4>
                </div>
                {/* card section */}
                <div className="h-[75vh] overflow-y-auto shared mt-6 mb-0">
                    <div className="grid grid-cols-1 gap-5 px-1 pr-3 ">
                        {list.map(newlist => <Card
                        newlist={newlist}
                        ></Card>)}
                    </div>
                </div>
            </div>
            {/* Under Review section */}
            <div className="bg-[#F2F4F7] w-96 h-screen pt-5 px-2">
                {/* header section */}
                <div className="flex justify-between">
                    <div className="flex flex-col items-center gap-2">
                        <h4 className="font-medium pl-2">Under Review</h4>
                    </div>
                    <h4 className="font-medium py-1 px-2 rounded-md bg-[#E8EEF3] w-6">0</h4>
                </div>
                {/* card section */}
                <div className="h-[75vh] overflow-y-auto shared mt-6 mb-0">
                    <div className="grid grid-cols-1 gap-5 px-1 pr-3 ">
                        {list.map(newlist => <Card
                        newlist={newlist}
                        ></Card>)}
                    </div>
                </div>
            </div>
            {/* completed section */}
            <div className="bg-[#F2F4F7] w-96 h-screen pt-5 px-2">
                {/* header section */}
                <div className="flex justify-between">
                    <div className="flex flex-col items-center gap-2">
                        <h4 className="font-medium pl-2">Completed</h4>
                    </div>
                    <h4 className="font-medium py-1 px-2 rounded-md bg-[#E8EEF3] w-6">0</h4>
                </div>
                {/* card section */}
                <div className="h-[75vh] overflow-y-auto shared mt-6 mb-0">
                    <div className="grid grid-cols-1 gap-5 px-1 pr-3 ">
                        {list.map(newlist => <Card
                        newlist={newlist}
                        ></Card>)}
                    </div>
                </div>
            </div>
            </div>
       
    );  
};

export default Home;