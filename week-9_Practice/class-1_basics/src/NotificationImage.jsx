import { useState } from "react";

export function NotificationImage() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div style={{ display: "flex"  }}>
        <img
          style={{ width: 50, height: 50,}}
          src="https://cdn-icons-png.flaticon.com/128/2529/2529521.png"
          alt=""
        />
        <div style={{backgroundColor:"red", height:20, width:20,borderRadius:30,paddingLeft:2}}>{count}</div>
          </div>
          <br />
          <button onClick={()=>(setCount(count+1))}>Increasecount</button>
    </div>
  );
}
