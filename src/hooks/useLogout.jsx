import { useAuthContext } from "./useAuthContext"

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const handleLogout = () => {

        localStorage.removeItem("token")
        localStorage.removeItem("user")

        dispatch({ type: "LOGOUT" })
    }
    return {
        handleLogout
    }
}