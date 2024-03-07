import React from 'react'

const Feedback = () => {
    function handleSubmit(){
        alert("Feedback Submited")
    }
  return (
    <div>
        <h3>Feedback</h3>
        <form onSubmit={handleSubmit}>
            <textarea className="formsize"
             type="text"
             placeholder='Enter Feedback'
             row="5"
             columns="10"
             required/>
            <button 
            >Submit
            </button>
        </form>
        </div>
  )
}

export default Feedback