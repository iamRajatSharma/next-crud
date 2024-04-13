"use client"
import React, { useState } from 'react'
import { useRouter } from "next/navigation"


function page() {

    const [title, setTitle] = useState('')
    const [description, setDesc] = useState('')
    const [status, setStatus] = useState('complete')
    const [btn, setButton] = useState('Add')
    const router = useRouter();

    async function submitHandler() {
        setButton("Adding....")

        await fetch("https://nextapp-beta-weld.vercel.app/api/todos", {
            method: "POST",
            body: JSON.stringify({ title, description, status })
        })
            .then((resp) => {
                return resp.json();
            })
            .then((result) => {
                router.push("/")
            })
    }

    return (
        <div>
            <div className='mt-5' style={{ padding: "0px 500px", marginBottom: "25px" }}>
                <div className='card' >
                    <div className='card-header'>
                        <strong>Add New Todo</strong>
                    </div>
                    <div className='card-body'>
                        <div className="mb-3 mt-3">
                            <label htmlFor="email" className="form-label">Title:</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter title" name="email" onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pwd" className="form-label">Description:</label>
                            <textarea name="" id="" className="form-control" cols="30" rows="3" placeholder='Enter Description' onChange={(e) => setDesc(e.target.value)}></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pwd" className="form-label">Select Status:</label> <br />
                            <select className='form-control' onChange={(e) => { setStatus(e.target.value) }}>
                                <option value="Complete" >Complete</option>
                                <option value="In-Complete">In-Complete</option>
                            </select>
                        </div>
                        <div className='text-center'>
                            <button type="submit" className="btn btn-primary" onClick={submitHandler}>{btn}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page