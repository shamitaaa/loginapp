import React from 'react'
import { useHistory } from 'react-router-dom';

const Register = () => {

    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Read the form data
        const form = e.target;
        const formData = new FormData(form);

        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
    }
    return (
        <>
            <div>Register</div>
            <form onSubmit={handleSubmit}>

                <div className='card-register'>
                    <div className='name'>
                        <label>Enter First Name
                            <input name='firstname'></input>
                        </label>
                        <label>Enter Last Name
                            <input name='lastname'></input>
                        </label>
                    </div>
                    <div className='contact'>
                        <h5>Contact Information</h5>
                        <label>Email
                            <input type="email" name='email'></input>
                        </label>
                        <label>Phone Number
                            <input name='number'></input>
                        </label>
                    </div>

                    <div className='DOB'>
                        <label>Birthday
                            <input name='birthday'></input>
                        </label>
                        <label>Age
                            <input name='age'></input>
                        </label>
                    </div>
                    <div>
                        <label>Hobbies
                            <input name='hobby'></input>
                        </label>
                        <button>ADD</button>
                        <button>Cancel</button>
                    </div>

                    <div className='Login-Regiser'>
                        <label>Username
                            <input name='Username'></input>
                        </label>
                        <label>Password
                            <input name='Password'></input>
                        </label>
                        <label>Confirm Password
                            <input name='CPassword'></input>
                        </label>
                    </div>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default Register;