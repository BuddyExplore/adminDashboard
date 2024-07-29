import { createContext, useReducer, useEffect } from 'react'

export const AuthContext = createContext()

export const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN" :
            return { user : action.payload.user , token: action.payload.token }
        case "LOGOUT" :
            return { user : null, token: null }
        default :
            return state
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    })

    console.log("AuthContext State : ", state)

    useEffect(() => {
        const user = localStorage.getItem("user")
        const token = localStorage.getItem("token")
        if (user && token) {
            dispatch({ type: "LOGIN", payload: {user: JSON.parse(user), token: token} })
        }
    }, [])


    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}