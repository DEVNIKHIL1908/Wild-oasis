import { useMutation, useQueryClient } from "@tanstack/react-query"
import { logout as logoutApi } from "../../services/apiAuth"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

function useLogOut() {
    const navigate = useNavigate()
    const queryClient = useQueryClient()
  const {mutate: logout,isLoading} =   useMutation({
            mutationFn: logoutApi,
            onSuccess: ()=>{
                queryClient.removeQueries()
                toast.success("User signed out")
                navigate("/login",{replace: true})
            },
            onError: ()=>{
                toast.error("Failed to sign out")
            }
    })


    return {logout,isLoading}
}

export default useLogOut
