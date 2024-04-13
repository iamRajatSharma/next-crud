"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function page({ params }) {

    const [title, setTitle] = useState('')
    const [description, setDesc] = useState('')
    const [status, setStatus] = useState('complete')
    const [error, setError] = useState([]);

    const id = params.id;
    const router = useRouter();

    useEffect(() => {
        const loadTodo = async () => {
            await fetch(`https://nextapp-beta-weld.vercel.app/api/todos/${id}`)
                .then((resp) => {
                    return resp.json();
                })
                .then((result) => {
                    setTitle(result.data.title)
                    setDesc(result.data.description)
                    setStatus(result.data.status)
                })
        }
        loadTodo();
    }, [])

    const submithandler = async () => {
        await fetch(`https://nextapp-beta-weld.vercel.app/api/todos/${id}`, {
            method: "PUT",
            body: JSON.stringify({ title, description, status })
        })
            .then((resp) => {
                return resp.json();
            })
            .then((result) => {
                if (result.issues) {
                    setError(result.issues)
                }
                router.push("/")
            })
    }

    return (
        <div className='row'>
            <div className='mt-5 col-lg-4'></div>
            <div className='mt-5 col-lg-4 col-md-12' style={{ marginBottom: "25px" }}>
                <div className='mt-5' style={{ padding: "0px 500px", marginBottom: "25px" }}>
                    <div className='card' >
                        <div className='card-header'>
                            <strong>Add New Todo</strong>
                        </div>
                        <div className='card-body'>
                            <div className="mb-3 mt-3">
                                <label htmlFor="email" className="form-label">Title:</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter title" name="email" value={title} onChange={(e) => setTitle(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="pwd" className="form-label">Description:</label>
                                <textarea name="" id="" className="form-control" cols="30" rows="3" placeholder='Enter Description' value={description} onChange={(e) => setDesc(e.target.value)}></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="pwd" className="form-label">Select Status:</label> <br />
                                <select className='form-control' onChange={(e) => { setStatus(e.target.value) }}>
                                    <option hidden defaultValue={status} >{status}</option>
                                    <option value="Complete" >Complete</option>
                                    <option value="In-Complete">In-Complete</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={submithandler}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-5 col-lg-4'></div>
        </div>
    )
}

export default page