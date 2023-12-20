//import useState
import { useState } from 'react';

//import useNavigate
import { useNavigate } from 'react-router-dom';

//import API
import api from '../../api';

export default function PostCreate() {

    //define state
    const [certification_number, setCertification_number] = useState('');
    const [name, setName] = useState('');
    const [program, setProgram] = useState('');
    const [period, setPeriod] = useState('');
    const [status, setStatus] = useState('');

    //state validation
    const [errors, setErrors] = useState([]);

    //useNavigate
    const navigate = useNavigate();


    //method store post
    const storePost = async (e) => {
        e.preventDefault();
        
        //init FormData
        const formData = new FormData();

        //append data
        formData.append('certification_number', certification_number);
        formData.append('name', name);
        formData.append('status', status);
        formData.append('program', program);
        formData.append('period', period);

        //send data with API
        await api.post('/certification', formData)
            .then(() => {
                console.log(formData);
                //redirect to posts index
                navigate('/posts');

            })
            .catch(error => {
                
                //set errors response to state "errors"
                setErrors(error.response.data);
            })
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="card border-0 rounded shadow">
                        <div className="card-body">
                            <form onSubmit={storePost}>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Certification Number</label>
                                    <input type="text" className="form-control" onChange={(e) => setCertification_number(e.target.value)} placeholder="Certification Number"/>
                                    {
                                        errors.certification_number && (
                                            <div className="alert alert-danger mt-2">
                                                {errors.certification_number[0]}
                                            </div>
                                        )
                                    }
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Name</label>
                                    <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} placeholder="Name"/>
                                    {
                                        errors.name && (
                                            <div className="alert alert-danger mt-2">
                                                {errors.name[0]}
                                            </div>
                                        )
                                    }
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Program</label>
                                    <input type="text" className="form-control" onChange={(e) => setProgram(e.target.value)} placeholder="Program"/>
                                    {
                                        errors.program && (
                                            <div className="alert alert-danger mt-2">
                                                {errors.program[0]}
                                            </div>
                                        )
                                    }
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Period</label>
                                    <input type="text" className="form-control" onChange={(e) => setPeriod(e.target.value)} placeholder="Period"/>
                                    {
                                        errors.period && (
                                            <div className="alert alert-danger mt-2">
                                                {errors.period[0]}
                                            </div>
                                        )
                                    }
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Status</label>
                                    <input type="text" className="form-control" onChange={(e) => setStatus(e.target.value)} placeholder="Status"/>
                                    {
                                        errors.status && (
                                            <div className="alert alert-danger mt-2">
                                                {errors.status[0]}
                                            </div>
                                        )
                                    }
                                </div>

                                <button type="submit" className="btn btn-md btn-primary rounded-sm shadow border-0">Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}