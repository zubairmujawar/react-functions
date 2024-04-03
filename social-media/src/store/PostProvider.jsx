import { createContext } from "react"

const DEFAULT_CONTEXT = {
    // initial value
    postList:[],
    addPost:()=>{},
    deletePost:()=>{}
}
const postList = createContext()

const PostListProvider = ({children})=>{
    const addPost =()=>{}
    const deletePost =()=>{}
    return (
        <postList.Provider>
            {children}
        </postList.Provider>
    )
}
