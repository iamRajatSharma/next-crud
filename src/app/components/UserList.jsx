"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

function UserList(props) {

    const [result, setResult] = useState([]);

    useEffect(() => {
        setResult(props.data.data)
    }, [])


    const deletehandler = (id) => {
        alert(id)
    }

    return (
        <div className='p-5'>
            <table className="table table-bordered text-center align-middle">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        result.map((item, index) => (
                            <tr key={index}>
                                <td>{item._id}</td>
                                <td>{item.title}</td>
                                <td>{item.description}</td>
                                <td>
                                    {
                                        item.status == "complete" ?
                                            <div className="badge bg-success">Complete</div>
                                            :
                                            <div className="badge bg-warning">In-Complete</div>
                                    }
                                </td>
                                <td>
                                    <Link href={`/edit/${item._id}`} className='btn btn-success mr-2'>Edit</Link>
                                    <button onClick={() => { deletehandler(item._id) }} className='btn btn-danger'>Delete</button>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}

export default UserList;