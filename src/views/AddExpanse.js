import React from 'react'

import Navbar from '../components/Navbar'


export default function AddExpanse() {
    return (
        <>

            <Navbar page="expanse" />
            <div className="container mt-4">
            <h2 className="text-primary">Add Expanse</h2>    
            <form>
            <div class="mb-3">
                <label className="form-label">Add Ammount</label>
                <input type="number" className="form-control"  placeholder="0000" />
            </div>

            <div class="mb-3">
                <label className="form-label">Add Details</label>
                <input type="text" className="form-control"  placeholder="write Details of expanse" />
            </div>

            <div class="mb-3">
                <label className="form-label">Add Date</label>
                <input type="date" className="form-control"  />
            </div>
            <div className="mb-3">
                <button className="btn btn-outline-success"> Submit </button>
            </div>    

            </form> 

            </div>   
        </>
    )
}
