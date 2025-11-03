
import { FaEdit, FaTrash } from 'react-icons/fa'
const PostCard = ({ post }) => {
  const ACCENT_COLOR = 'indigo';
 
  return (
    // Enhanced Card Container: Better shadow and border for depth
    <div className="bg-white shadow-xl rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 border border-gray-100 max-w-sm w-full mx-auto">
      
      {/* Profile/Title */}
      <h1 className="text-2xl font-bold text-gray-900 mb-3 leading-snug">
        {post?.profile}
      </h1>

      {/* Description */}
      <p className="text-gray-600 mb-4 line-clamp-3">
        {post?.description}
      </p>

      {/* Experience */}
      {post?.experience !== 0 && (
        <div className="flex items-center text-base text-gray-700 mb-4 pt-2 border-t border-gray-100">
          <svg className={`w-5 h-5 mr-2 text-${ACCENT_COLOR}-500`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span className="font-semibold">Experience:</span> 
          <span className={`ml-2 font-bold text-${ACCENT_COLOR}-600`}>{post?.experience} years</span>
        </div>
      )}

      {/* Tech Tags: Better color scheme for modern tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        {post?.techs?.map((tech, index) => (
          <span
            key={index}
            className={`bg-${ACCENT_COLOR}-50 text-${ACCENT_COLOR}-600 text-xs font-semibold tracking-wide px-3 py-1 rounded-full border border-${ACCENT_COLOR}-200`}
          >
            {tech?.name}
          </span>
        ))}
      </div>
      
      {/* Action Buttons: Grouped at the bottom, styled for clear action */}
      <div className='flex justify-end gap-3 pt-6 border-t border-gray-100 mt-5'>
        
        {/* Edit Button */}
        <button
          className={`text-gray-500 hover:text-${ACCENT_COLOR}-600 p-2 rounded-full transition-colors duration-200 hover:bg-${ACCENT_COLOR}-50 focus:outline-none focus:ring-2 focus:ring-${ACCENT_COLOR}-500`}
          aria-label="Edit Post"
        >
          <FaEdit className="w-5 h-5" />
        </button>
        
        {/* Delete Button - Styled more aggressively to indicate destructive action */}
        <button
          className="text-gray-500 hover:text-red-600 p-2 rounded-full transition-colors duration-200 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500"
          aria-label="Delete Post"
        >
          <FaTrash className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}

export default PostCard
