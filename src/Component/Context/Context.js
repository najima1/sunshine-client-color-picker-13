import { createContext, useContext, useState } from "react"

const AuthContext = createContext()

const Context_provider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    // const [currentUser, setCurrentUser] = useState(null)
    const [color_Bg, setColor_bg] = useState(null)
    const [showBg, setShowBg] = useState(false)




    const value = { loading, setLoading, color_Bg, setColor_bg, showBg, setShowBg }


    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}

const useProvider = () => {
    const res = useContext(AuthContext)
    return res
}

export default Context_provider
export { useProvider }
