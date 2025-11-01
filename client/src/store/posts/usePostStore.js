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
    }
}));

export default usePostStore;