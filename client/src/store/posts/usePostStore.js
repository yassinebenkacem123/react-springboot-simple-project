import {create} from 'zustand';  

const usePostStore = create((set) => ({
    posts: [],
    loading:false,
    error:null,
    getPosts:async ()=>{
        try{
            set({loading:true, error:null});
            const res = await fetch('/api/v1/getPosts');
            const data = await res.json();
            if(!res.ok){
                return set({error:data.error, loading:false});
            }
            set({posts:data, loading:false});
        }catch(err){
            console.error(err);
            return set({error:'Failed to fetch data...', loading:false});
        }
    },
    addPost:async (post)=>{
        try{
            const res = await fetch('/api/v1/addPost', {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(post)
            });
            const data = await res.json();
            if(!res.ok){
                return {message: data.error || 'Failed to add post', success: false};
            }
            set((state)=>({posts:[...state.posts, data]}));
            return {message: 'Post added successfully', success: true};
        }catch(err){
            console.error(err);
            return {message: 'Failed to add post', success: false};
        }
    }
}));

export default usePostStore;