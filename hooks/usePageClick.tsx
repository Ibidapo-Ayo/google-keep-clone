import { useEffect } from "react"

export const usePageClick = (setterFunction: React.Dispatch<React.SetStateAction<boolean>>, id: string) => {
    useEffect(() => {
        document.body.addEventListener("click", (event) => {
            const excludedDiv = document.getElementById(id)

            if (!excludedDiv || !excludedDiv.contains(event?.target as Node)) {
                setterFunction(true)
            }
        })

        return () => {
            document.body.removeEventListener('click', (event) => {
                const excludedDiv = document.getElementById(id)

                if (!excludedDiv || !excludedDiv.contains(event?.target as Node)) {
                    setterFunction(true)
                }
            });
        };
    }, [])

    return
}