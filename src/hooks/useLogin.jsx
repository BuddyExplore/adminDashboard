import { useState } from "react"
import { useAuthContext } from "./useAuthContext"
import axios from "axios"

export const useLogin = () => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const { dispatch } = useAuthContext()

  const handleLogin = async (email, password) => {
    setLoading(true);
    setError(null);

    const response = await axios.post("http://localhost:8080/api/auth/login", {
      email,
      password,
    });

    if (response.status !== 200) {
      setLoading(false);
      setError(response.data.message);
    }

    if (response.status === 200) {
      console.log(response);

      if (response.data.code === "00") {
        // Saving content in the local storage
        localStorage.setItem("token", response.data.content.jwtToken)
        localStorage.setItem("user", JSON.stringify(response.data.content.user))

        // Updating the auth context
        dispatch({ type: "LOGIN", payload: {user: response.data.content.user, token: response.data.content.jwtToken} })
        setLoading(false)
      }
    }
  }

  return {
    error,
    loading,
    handleLogin,
  }
}
