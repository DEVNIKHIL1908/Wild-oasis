import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteBooking } from "../../services/apiBookings"
import toast from "react-hot-toast"

function useDeleteBooking(id) {
    const queryClient = useQueryClient()
    const {isLoading: isDeletingBooking , mutate: deletingBookingFn} = useMutation({
        mutationFn: deleteBooking,
        onSuccess:()=> {
            toast.success("Booking delete successfully"),
            queryClient.invalidateQueries({
                queryKey: ["bookings"]
            })
        },
        onError: ()=>{
            toast.error("Faild to delete booking")
        }
    })

    return {isDeletingBooking,deletingBookingFn}
    
}

export default useDeleteBooking
