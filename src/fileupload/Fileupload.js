import React from 'react';
import  { useState } from 'react';
import axios from "axios";


 
const Fileupload = () => {


    const [newUser, setNewUser] = useState(
        {
            name: '',
            birthdate: '',
            photo: '',
        }
    );

  const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('photo', newUser.photo);
        formData.append('birthdate', newUser.birthdate);
        formData.append('name', newUser.name);

        axios.post('http://localhost:4000/fileupload', formData)
             .then(res => {
                console.log(res);
             })
             .catch(err => {
                console.log(err);
             });
    }

   
    const handlePhoto = (e) => {
        setNewUser({...newUser, photo: e.target.files[0]});
    }

    const handleChange = (e) => {
        setNewUser({...newUser, [e.target.name]: e.target.value});
    }

    const handleDate = (e) => {
        setNewUser({...newUser, [e.target.date]: e.target.value});
    }


    return (
        <>
            <div className='container mt-5'>
                <div className="row">
                    <div className="col-md-6 offset-md-3 mt-5">
                        <div className='card'>
                            <div className='card-body'>

                                <form onSubmit={handleSubmit} encType='multipart/form-data'>
                                    <div class="mb-3">
                                        <div c>

                                        </div>
                                        <label for="exampleInputEmail1" className="form-label">Fileupload</label>
                                        <input
                                            type="file"
                                            accept=".png, .jpg, .jpeg"
                                            name="photo"
                                        onChange={handlePhoto}
                                        />

                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputPassword1" className="form-label">NAME  </label>
                                        <input
                                            type="text"
                                            placeholder="name"
                                            name="name"
                                        value={newUser.name}
                                        onChange={handleChange}
                                        />

                                    </div>
                                    <div className="mb-3 ">
                                        <label className="form-check-label" for="exampleCheck1">DOB  </label>
                                        <input
                                            type="date"
                                            name="birthdate"
                                        value={newUser.date}
                                        onChange={handleDate}
                                        />

                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit </button>
                                </form>





                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    );
}

export default Fileupload;