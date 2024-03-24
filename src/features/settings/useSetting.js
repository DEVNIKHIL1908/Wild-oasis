import { useQuery } from "@tanstack/react-query"
import { getSettings } from "../../services/apiSettings"
function useSetting() {
    const {isLoading,error,data} = useQuery({
        queryKey: ['settings'],
        queryFn: getSettings
    })
    return {isLoading,error, data}
}

export default useSetting
