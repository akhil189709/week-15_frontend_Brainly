import { useState } from "react"

export const ToggleMessage = () => {
    const [messageVisible, setMessageVisible] = useState(false);
    return (
        <div>
            <button onClick={()=>setMessageVisible(c=>!c)}>Toggle Message</button>
            {messageVisible && <p>this is the message after the toggle</p>}
        </div>
    )
}
