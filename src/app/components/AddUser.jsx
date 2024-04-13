"use client";
import React, { useEffect, useState } from 'react'

function AddUser({ id }) {

    const [todo, setTodo] = useState()

    useEffect(async () => {
        await fetch(`http://localhost:3000/api/todos/${id}`)
            .then((resp) => {
                return resp.json()
            })
            .then((resp) => {
                setTodo(resp.data.title)
                // console.log(todo.title)
            })
    }, [])

    return (
        <div className='mt-5' style={{ padding: "0px 500px" }}>
            <div className='card' >
                <div className='card-header'>
                    <strong>Add New Todo</strong>
                </div>
                <div className='card-body'>
                    <form action="/action_page.php">
                        <div className="mb-3 mt-3">
                            <label htmlFor="email" className="form-label">Title:</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter title" name="email"  />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pwd" className="form-label">Description:</label>
                            <textarea name="" id="" className="form-control" cols="30" rows="3" placeholder='Enter Description' ></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pwd" className="form-label">Select Status:</label> <br />
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" value="complete" id="flexRadioDefault1" />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Completed
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" value="incomplete" id="flexRadioDefault2" defaultChecked={true} />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    In-Complete
                                </label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddUser