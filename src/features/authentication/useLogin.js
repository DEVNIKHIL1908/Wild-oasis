import { useMutation, useQueryClient } from "@tanstack/react-query";
import login from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: loginFn, isLoading: isLoggingIn } = useMutation({
    mutationFn: ({ email, password }) => login({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      navigate("/dashboard", { replace: true });
      toast.success("Login successfully ");
    },
    onError: () => {
      toast.error("Provided email or password are the incorrect");
    },
  });

  return { loginFn, isLoggingIn };
}

export default useLogin;
