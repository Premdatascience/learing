import React from 'react';
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ViewFileuploads from './ViewFileupload';



const Fileupload = () => {
    const [fileupload, setFileupload] = useState();
    const [filename, setFileuploadName] = useState();
    const [name, setName] = useState();
    const [birthdate, setBirthdate] = useState();

    // console.log(fileupload.split(",")[1], "newUser");
    console.log(fileupload,"fileuploadfileupload");

    const handleSubmit = (e) => {
        e.preventDefault();


        const formData = new FormData();

        formData.append('file', fileupload);
        formData.append('name', name);
        formData.append('filename', filename);

        formData.append('birthdate', birthdate);

        axios.post('http://localhost:4000/fileupload', formData)
            .then(res => {

                console.log(res);
                window.location.href = "/viewfileupload";
            })
            .catch(err => {
                console.log(err);

            });
        // console.log(formData);
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
                                            name="fileupload"
                                            placeholder="Upload"
                                            multiple={true}
                                            accept=".png, .jpg, .jpeg, .pdf"
                                            onChange={(e) => {
                                                setFileupload(e.target.files[0])
                                                setFileuploadName(e.target.files[0]?.name);
                                            }}
                                        />

                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputPassword1" className="form-label">NAME  </label>
                                        <input
                                            type="text"
                                            placeholder="name"
                                            name="name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}

                                        />

                                    </div>
                                    <div className="mb-3 ">
                                        <label className="form-check-label" for="exampleCheck1">DOB  </label>
                                        <input
                                            type="date"
                                            name="birthdate"
                                            value={birthdate}
                                            onChange={(e) => setBirthdate(e.target.value)}

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