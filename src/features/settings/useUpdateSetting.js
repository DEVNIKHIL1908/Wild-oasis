import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";
import toast from "react-hot-toast";

function useUpdateSetting() {
  const queryClient = useQueryClient();

  const { isLoading: isUpdating, mutate: updateSetting } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success(" Setting Successfully Updated");
      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
      // reset();
    },
    onError: (err) => toast.error("Failed to change settings"),
  });

  return { isUpdating, updateSetting };
}

export default useUpdateSetting;
