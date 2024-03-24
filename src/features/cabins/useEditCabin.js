import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

function useEditCabin() {
  const queryClient = useQueryClient()
  
    const { isLoading: isUpdating, mutate: editCabin } = useMutation({
        mutationFn: ({newCabinData, id})=>createEditCabin(newCabinData,id),
        onSuccess: () => {
          toast.success(" Cabin Successfully edited");
          queryClient.invalidateQueries({
            queryKey: ["cabins"],
          });
          // reset();
        },
        onError: (err) => toast.error("Failed to edit cabin"),
      });

      return {isUpdating, editCabin}
}

export default useEditCabin
