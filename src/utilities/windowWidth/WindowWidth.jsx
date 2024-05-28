import { useEffect, useState } from "react";

const WindowWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleScroll = () => {
            setWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleScroll);

        return () => {
            window.removeEventListener("resize", handleScroll);
        }
    }, [])

    return width;
}

export default WindowWidth;