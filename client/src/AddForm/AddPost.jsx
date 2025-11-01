import React from 'react'

const AddPost = () => {
  const devStacks = [
    "Python",
    "JavaScript",
    "Java",
    ""
  ]
  return (
    <section>
      <div>
        <button
        onClick={()=>window.history.back()}
        >Return</button>
        <h1>Add New Post</h1>
      </div>
      <form action="">
        <input type='text' placeholder='Enter the profil...'/>
        <textarea placeholder='Enter the description...'></textarea>
        <input type="number" placeholder='Enter number of experience...'/>
        
      </form>

    </section>
  )
}

export default AddPost