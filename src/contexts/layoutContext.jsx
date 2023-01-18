import { createContext, useContext, useState } from "react";

const layoutContext = createContext()

export function useLayout() {
    const context = useContext(layoutContext)
    return context
}

export function LayoutProvider({ children }) {
    const [layout, setLayout] = useState('Upload')
    const [loading, setLoading] = useState(false)

    return <layoutContext.Provider value={{ layout, changeLayout, loading, changeLoading}}>{children}</layoutContext.Provider>

    function changeLayout(layout) {setLayout(layout)}

    function changeLoading(loading) {setLoading(loading)}
}