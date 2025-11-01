import usePostStore from '../store/posts/usePostStore'
import {useEffect} from 'react';
import PostCard from './PostCard';
import SearchForm from './SearchForm';
import { useNavigate } from 'react-router';
const Home = () => {
    const {getPosts, posts, loading, error} = usePostStore();
    const cleaningPosts = posts?.filter((post)=> post.profile !== null && post.description !== null && post.techs.length >0  && post.experience !== null);
    useEffect(()=>{
        getPosts();
    },[getPosts ]);
    const navigate = useNavigate(); 
    if(loading) return (
        <div className='h-screen w-full items-center justify-center flex text-xl font-medium text-green-700'>
            <h1>Loading.....</h1>
        </div>
    );

    if(error) return (
        <div className='text-red-500 w-full text-xl h-screen flex items-center justify-center'>
            <h1>{error}</h1>
        </div>
    )
  return (
    <div className='flex flex-col gap-4 py-10 px-15'>
        <h1 className='col-span-1 md:col-span-2 lg:col-span-3 text-2xl font-bold text-gray-800 mb-4'>Posts</h1>
        <div className='flex gap-2'>
            <SearchForm />
            <button 
             onClick={()=>navigate('add-post')}
             className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors mb-4'>
                Add Post
            </button>
        </div>        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {cleaningPosts?.map((post)=>
                <PostCard post={post} />
            )}
        </div>
    </div>
  )
}

export default Home