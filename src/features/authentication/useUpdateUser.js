import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuth";

function useUpdateUser() {
  const queryClient = useQueryClient()
  
    const { isLoading: isUpdating, mutate: updateUser } = useMutation({
        mutationFn: updateCurrentUser,
        onSuccess: ({user}) => {
          toast.success(" User Account Successfully Updated");
          queryClient.setQueryData(["user"],user)
        //   queryClient.invalidateQueries({
        //     queryKey: ["user"],
        //   });
          // reset();
        },
        onError: (err) => toast.error("Failed to edit cabin"),
      });

      return {isUpdating, updateUser}
}

export default useUpdateUser
