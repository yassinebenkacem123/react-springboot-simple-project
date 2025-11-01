import React from 'react'
const PostCard = ({ post }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-sm transition-all duration-300 border border-gray-100 max-w-md">
      <h1 className="text-2xl font-semibold text-gray-800 mb-2">
        {post?.profile}
      </h1>

      <p className="text-gray-600 mb-4">
        {post?.description}
      </p>
      {post?.experience !== 0 && (
        <p className="text-sm text-gray-500 mb-4">
          <span className="font-medium text-gray-700">Experience:</span> {post?.experience} years
        </p>
      )}

      <div className="flex flex-wrap gap-2 mt-3">
        {post?.techs?.map((tech, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full"
          >
            {tech?.name}
          </span>
        ))}
      </div>
      <div className='flex w-full gap-4'>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  )
}

export default PostCard
