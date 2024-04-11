import AddUser from '@/app/components/AddUser'
import React from 'react'


function page({ params }) {
    console.log("params: " + params.id);
    return (
        <div>
            <AddUser id={params.id} />
        </div>
    )
}

export default page