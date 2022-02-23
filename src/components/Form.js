import React, { useState } from 'react';

function Form() {
    // const [stepComplete, setStepComplete] = useState(false);
    const [step, setStep] = useState('1');

    const formStatus = (val) => {
        // e.preventDefault();
        setStep(val);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setStep('done');
    }
    
    if(step === 'done') return <div className='submission-text'>Form submitted successfully!</div>
    return (
        <div className='container'>
            <div className='step-box'>
                <div className={'step-1-complete'}>1</div>
                <div className={step === '2' || step === '3' || step === 'done' ? 'step-line-complete' : 'step-line'}></div>
                <div className={step === '3' || step === 'done' ? 'step-2-complete' : 'step'} >2</div>
                <div className={step === '3' || step === 'done' ? 'step-line-complete' : 'step-line'}></div>
                <div className={step === 'done' ? 'step-3-complete' : 'step'}>3</div>
            </div>
            <form className='form-container'>
                {
                    step === '1' ? (
                        <div className='step-1'>
                            <label className='main-text'>Account creation</label>
                            <div className='form-group'>
                                <label className='details-text' for='email'>Email</label>
                                <input type='email' name='email' id='email' placeholder='Email' />
                            </div>
                            <div className='form-group'>
                                <label className='details-text' for='password'>Create password</label>
                                <input type='password' name='password' id='password' placeholder='Create password' />
                            </div>
                            <div className='form-group'>
                                <label className='details-text' for='password'>Confirm password</label>
                                <input type='password' name='password' id='password' placeholder='Confirm password' />
                            </div>
                            <button className='btn-next' onClick={() => formStatus('2')}>
                                Next
                            </button>
                        </div>
                    ) : step === '2' ? (<div className='step-2'>
                        <label className='main-text'>Personal details</label>
                        <div className='form-group'>
                            <label className='details-text' for='first name'>First name</label>
                            <input type='name' name='first name' id='first name' placeholder='First name' />
                        </div>
                        <div className='form-group'>
                            <label className='details-text' for='last name'>Last name</label>
                            <input type='name' name='last name' id='last name' placeholder='Create password' />
                        </div>
                        <div className='form-group'>
                            <label className='details-text' for='gender'>Gender</label>
                            <select name='gender' id='gender'>
                                <option value={0}>Select gender</option>
                                <option value={1}>Female</option>
                                <option value={2}>Male</option>
                                <option value={3}>Other</option>
                            </select>
                        </div>
                        <div className='btn-grp'>
                            <button className='btn-prev' onClick={() => formStatus('1')}>
                                Previous
                            </button>
                            <button className='btn-next' onClick={() => formStatus('3')}>
                                Next
                            </button>
                        </div>
                    </div>) : step === '3' ? (
                        <div className='step-3'>
                            <label className='main-text'>Social profiles</label>
                            <div className='form-group'>
                                <label className='details-text' for='username'>Github</label>
                                <input type='name' name='username' id='username' placeholder='Github username' />
                            </div>
                            <div className='form-group'>
                                <label className='details-text' for='username'>Twitter</label>
                                <input type='name' name='username' id='username' placeholder='Twitter handle' />
                            </div>
                            <div className='btn-grp'>
                                <button className='btn-prev' onClick={() => formStatus('2')}>
                                    Previous
                                </button>
                                <button className='btn-next' type='submit' onClick={onSubmit}>
                                    Submit
                                </button>
                            </div>
                        </div>
                    )  : ''
                }
            </form>
        </div>
    )
}

export default Form;