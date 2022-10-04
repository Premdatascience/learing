import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FormVal = () => {
    
    const {
        register,
        handleSubmit,
      
        formState: { errors },
    } = useForm();
    const onSubmit = (data) =>{
axios.post('http://localhost:4000/formcreate',data)
.then(res=>{
    console.log(res);
   
    window.location.href = "/viewformval";
})
        
.catch((err) => console.log(err));
    }


        // console.log(data)
    return (
        <>
            <div className='container mt-5'>
                <div className='card mt-5'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputEmail4">Email</label>
                                <input type="email" class="form-control"
                                    id="inputEmail4" placeholder="Email"
                                    name='email'
                                    {...register("email", {
                                        required: "email Name is required",
                                    })} />
                                <div className="mt-2">{errors.email && <small className="errornote">{errors.email.message}</small>}</div>

                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputPassword4">Password</label>
                                <input type="password" class="form-control" id="inputPassword4" placeholder="Password"
                                    name='password'
                                    {...register("password", {
                                       required: "password Name is required",
                                     })} />
                                <div className="mt-2">{errors.password && <small className="errornote">{errors.password.message}</small>}</div>

                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputAddress">Address</label>
                            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"     name='address'
                                 {...register("address", {
                                    required: "Address Name is required",
                                  })} />
                            <div className="mt-2">{errors.address && <small className="errornote">{errors.address.message}</small>}</div>

                        </div>
                        <div class="form-group">
                            <label for="inputAddress2">Address 2</label>
                            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"
                                name='address2'
                                {...register("address2", {
                                   required: "Address2 Name is required",
                                 })} />
                            <div className="mt-2">{errors.address2 && <small className="errornote">{errors.address2.message}</small>}</div>

                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputCity">City</label>
                                <input type="text" class="form-control" id="inputCity"     name='City'
                                 {...register("City", {
                                    required: "City Name is required",
                                  })}/>
                                <div className="mt-2">{errors.City && <small className="errornote">{errors.City.message}</small>}</div>

                            </div>
                    
                            <div class="form-group col-md-2">
                                <label for="inputZip">Zip</label>
                                <input type="text" class="form-control" id="inputZip"     name='Zip'
                                 {...register("Zip", {
                                    required: "Zip Name is required",
                                  })}/>
                                <div className="mt-2">{errors.Zip && <small className="errornote">{errors.Zip.message}</small>}</div>

                            </div>
                        </div>
             
                        <button type="submit" class="btn btn-primary">Sign in</button>
                    </form>

                </div>

            </div>

        </>
    );
}

export default FormVal;