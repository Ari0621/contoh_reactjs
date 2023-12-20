//import useState dan useEffect
import { useState, useEffect } from 'react';

//import api
import api from '../../api';

//import Link
import { Link } from 'react-router-dom';

export default function PostIndex() {

    //ini state
    const [posts, setPosts] = useState([]);

    //define method
    const fetchDataPosts = async () => {

        //fetch data from API with Axios
        await api.get('/certification')
            .then(response => {
                
                //assign response data to state "posts"
                setPosts(response.data.data);
            })
        
    }

    //run hook useEffect
    useEffect(() => {
        
        //call method "fetchDataPosts"
        fetchDataPosts();

    }, []);

    //method deletePost
    const deletePost = async (id) => {
        
        //delete with api
        await api.delete(`/certification/${id}`)
            .then(() => {
                
                //call method "fetchDataPosts"
                fetchDataPosts();

            })
    }
    return (
<div className="container mt-5 mb-5">
    <div className="row">
        <div className="col-md-12">
            <Link to="/posts/create" className="btn btn-md btn-success rounded shadow border-0 mb-3">ADD NEW POST</Link>
            <div className="card border-0 rounded shadow">
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <th scope="col">certification number</th>
                                <th scope="col">name</th>
                                <th scope="col">program</th>
                                <th scope="col">period</th>
                                <th scope="col">status</th>
                                <th scope="col" style={{ 'width': '15%' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            posts.length > 0
                            ? posts.map((post, index) => (
                            <tr key={ index }>
                                <td>{ post.certification_number}</td>
                                <td>{ post.name }</td>
                                <td>{ post.program }</td>
                                <td>{ post.period }</td>
                                <td>{ post.status }</td>
                                <td className="text-center">
                                    <Link to={`/posts/edit/${post.id}`}
                                        className="btn btn-sm btn-primary rounded-sm shadow border-0 me-2">EDIT</Link>
                                    <button onClick={() => deletePost(post.id)} className="btn btn-sm btn-danger rounded-sm shadow border-0">DELETE</button>
                                </td>
                            </tr>
                            ))

                            : <tr>
                                <td colSpan="4" className="text-center">
                                    <div className="alert alert-danger mb-0">
                                        Data Belum Tersedia!
                                    </div>
                                </td>
                            </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
)
}