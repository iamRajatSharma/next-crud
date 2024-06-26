import React from 'react'

function loading() {
    return (
        <div className='text-center mt-5'>
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default loading