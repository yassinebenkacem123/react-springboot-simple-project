import React from 'react'
import usePostStore from '../store/posts/usePostStore';
import { useActionState } from 'react';
const AddPost = () => {

  const { addPost } = usePostStore();
  const [state, formAction, isPending] = useActionState(handleFormAction,{message:null, success: null});
  async function handleFormAction(previousState, formData) {
    const profile = formData.get('profile');
    const description = formData.get('description');
    const experience = parseInt(formData.get('experience')) || 0;
    const techs = [];

    for (let pair of formData.entries()) {
      const [key, value] = pair;
      if (key !== 'profile' && key !== 'description' && key !== 'experience') {
        techs.push({ name: value });
      }
    }
    
    if (!profile || !description || techs.length === 0) {
      return { message: "Please fill out the Profile, Description, and select at least one Tech Stack.", success: false };
    }
    return await addPost({ profile, description, experience, techs });

  }
  
  const devStacks = [
    "Python",
    "JavaScript",
    "Java",
    "DevOps",
    "Docker",
    "C++"
  ]

  return (
    // Outer container: Centered, max-width, and padding
    <section className="min-h-screen bg-gray-50 flex items-start justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full space-y-8 bg-white p-8 sm:p-10 rounded-xl shadow-2xl">
        
        {/* Header Section */}
        <div className="flex justify-between items-center pb-4 border-b border-gray-200">
          <button
            onClick={() => window.history.back()}
            className="text-gray-600 hover:text-indigo-600 font-medium transition duration-150 ease-in-out flex items-center gap-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Return
          </button>
          <h1 className="text-3xl font-extrabold text-gray-900">
            Add New Post
          </h1>
        </div>

        {/* Form Section */}
        <form action={formAction} className="mt-8 space-y-6">
          
          {/* Input Fields: Consistent, rounded, focused style */}
          <input 
            type='text' 
            placeholder='Enter the profile (e.g., Senior Frontend Engineer)'
            className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-lg"
            aria-label="Profile Title"
            name="profile"
          />
          
          <textarea 
            placeholder='Enter the job description and requirements...'
            rows={5} // Set a decent default height
            className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-lg resize-none"
            aria-label="Job Description"
            name='description'
          />
          
          <input 
            type="number" 
            placeholder='Enter required years of experience...'
            min="0" // Ensure positive values
            className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-lg"
            aria-label="Years of Experience"
            name="experience"
          />

          {/* Dev Stack Checkboxes: Grouped and styled as pills/badges */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Required Tech Stack:</label>
            <div className="flex flex-wrap gap-3">
              {devStacks.map((stack, index) => (
                <div key={index} className="relative inline-block">
                  <input 
                    type="checkbox"
                    id={stack} 
                    name={stack} 
                    value={stack}
                    // Hide the default checkbox
                    className="absolute opacity-0 w-0 h-0 peer"
                  />
                  <label 
                    htmlFor={stack}
                    // Styled as a button/pill. Peer-checked applies styles when the checkbox is active.
                    className="cursor-pointer px-4 py-2 text-sm font-medium border border-gray-300 rounded-full text-gray-700 bg-white 
                               transition-all duration-200 ease-in-out
                               peer-checked:bg-indigo-600 peer-checked:text-white peer-checked:border-indigo-600 
                               hover:bg-indigo-50"
                  >
                    {stack}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button: Clear call-to-action with hover effect */}
          <button 
            type='submit'
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-lg font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out shadow-lg"
          >
            {isPending ? 'Adding Post...' : 'Add Post'}
          </button>
          {/* Feedback Message */}
          {state.message && (
            <div 
              className={`mt-4 text-center text-sm font-medium ${state.success ? 'text-green-600' : 'text-red-600'}`}
            >
              {state.message}
            </div>
          )}
        </form>
      </div>
    </section>
  )
}

export default AddPost