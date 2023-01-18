import { createContext, useContext, useState } from "react";

const imageContext = createContext()

export function useImage() {
    const context = useContext(imageContext)
    return context
}

export function ImageProvider({ children }) {
    const [image, setImage] = useState({})

    return <imageContext.Provider value={{ image, changeImage }}>{children}</imageContext.Provider>

    function changeImage(image) {setImage(image)}
}