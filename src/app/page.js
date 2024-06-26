"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {

    const [result, setResult] = useState([]);
    const [edit, setEdit] = useState('Edit');
    const [deleteBtn, setDelete] = useState('Delete')

    const router = useRouter();

    const UserList = async () => {
        const response = await fetch("https://nextapp-beta-weld.vercel.app/api/todos");
        const data = await response.json()
        setResult(data.data)
    }

    useEffect(() => {
        UserList();
    }, [])


    const deletehandler = async (id) => {
            await fetch(`https://nextapp-beta-weld.vercel.app/api/todos/${id}`, {
            method: "DELETE"
        })
            .then((resp) => {
                return resp.json();
            })
            .then((result) => {
                UserList();
            })
    }

    return (
        <>
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
                            result.length > 0 ?
                                result.map((item, index) => (
                                    <tr key={index}>
                                        <td>{++index}</td>
                                        <td>{item.title}</td>
                                        <td style={{ maxWidth: 250 }}>{item.description}</td>
                                        <td>
                                            {
                                                item.status == "Complete" ?
                                                    <div className="badge bg-success">Complete</div>
                                                    :
                                                    <div className="badge bg-warning">In-Complete</div>
                                            }
                                        </td>
                                        <td>
                                            <Link href={`/edit/${item._id}`} className='btn btn-success mr-2'>{edit}</Link>
                                            <button onClick={() => { deletehandler(item._id) }} className='btn btn-danger'>{deleteBtn}</button>
                                        </td>
                                    </tr>
                                ))
                                :
                                <tr >
                                    <td colSpan={5}><strong>NO DATA FOUND</strong></td>
                                </tr>
                        }

                    </tbody>
                </table>
            </div>
        </>
    );
}
