import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

function useCreateCabin() {
    const queryClient = useQueryClient();


    const { isLoading: isCreating, mutate: createCabin } = useMutation({
      mutationFn: createEditCabin,
      onSuccess: () => {
        toast.success("New Cabin Successfully created");
        queryClient.invalidateQueries({
          queryKey: ["cabins"],
        });
      },
      onError: (err) => toast.error("Failed to add cabin"),
    });

    return {isCreating, createCabin}
}

export default useCreateCabin
