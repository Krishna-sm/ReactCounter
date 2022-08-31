import React, { useState } from "react";
import './index.css';

const App =()=>{
    const [num,setnum]=useState(0);
        return(
            <>
                <div className="main_div">
                    <div className="center_div">
                        <h1>{num}</h1>
                        <div className="btn_div">
                            <button
                            onClick={()=>{
                                setnum(num+1)
                            }}
                            >Increement+</button>
                            <button
                            onClick={()=>{
                                if(num===0)
                                {
                                    alert("Sorry We are Unable To Decrese 😜");
                                }
                                else
                                {
                                    setnum(num-1)
                                }
                            }}
                            >Decrement-</button>
                        </div>
                    </div>
                </div>
            </>
        );
}

export default App;