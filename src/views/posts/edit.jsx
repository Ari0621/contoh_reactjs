//import useState
import { useState, useEffect } from 'react';

//import useNavigate
import { useNavigate, useParams } from 'react-router-dom';

//import API
import api from '../../api';

export default function PostEdit() {

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

    //destruct ID
    const { id } = useParams();

    //method fetchDetailPost
    const fetchDetailPost = async () => {
        
        //fetch data
        await api.get(`/certification/${id}`)
            .then(response => {
                //console.log(response.data.data);
                //assign to state
                setCertification_number(response.data.data.certification_number);
                setName(response.data.data.name);
                setProgram(response.data.data.program);
                setPeriod(response.data.data.period);
                setStatus(response.data.data.status);
            })
    }

    //hook useEffect
    useEffect(() => {
        
        //call method "fetchDetailPost"
        fetchDetailPost();

    }, []);


    //method update post
    const updatePost = async (e) => {
        e.preventDefault();
        
        //init FormData
        const formData = new FormData();

        //append data
        formData.append('certification_number', certification_number);
        formData.append('name', name);
        formData.append('status', status);
        formData.append('program', program);
        formData.append('period', period);
        formData.append('_method', 'PUT')

        //send data with API
        await api.post(`/certification/${id}`, formData)
            .then(() => {
                
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
                            <form onSubmit={updatePost}>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Certification Number</label>
                                    <input type="text" className="form-control" value={certification_number} onChange={(e) => setCertification_number(e.target.value)} placeholder="Certification Number"/>
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
                                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name"/>
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
                                    <input type="text" className="form-control" value={program} onChange={(e) => setProgram(e.target.value)} placeholder="Program"/>
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
                                    <input type="text" className="form-control" value={period} onChange={(e) => setPeriod(e.target.value)} placeholder="Period"/>
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
                                    <input type="text" className="form-control" value={status} onChange={(e) => setStatus(e.target.value)} placeholder="Status"/>
                                    {
                                        errors.status && (
                                            <div className="alert alert-danger mt-2">
                                                {errors.status[0]}
                                            </div>
                                        )
                                    }
                                </div>
                                <button type="submit" className="btn btn-md btn-primary rounded-sm shadow border-0">Update</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}