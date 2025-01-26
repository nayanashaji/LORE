import { useState } from "react";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    return (
        <div
            className="flex flex-col items-center justify-center h-screen w-screen"
            style={{
                backgroundImage: "url('https://www.victoria-raikel.com/content/images/2024/02/Folklore-Elements-in-Contemporary-Literature.jpg')",
                backgroundSize: "100% 95%",
                backgroundPosition: "center",
            }}
        >
            <div className="flex flex-col gap-2 bg-blue-950 border-[0.5px] p-7 rounded-lg items-center">
                <label className="input input-bordered flex items-center gap-2 text-white font-serif font-semibold text-2xl justify-center">Email</label>
                <input type="email" className="bg-white shadow-inner shadow-black p-2 border-none rounded-2xl w-32 h-10 justify-center items-center" placeholder="abcd@gmail.com" onChange={(e)=>{
                    setEmail(e.target.value);
                }}/>
                <div className="flex flex-col gap-2  bg-blue-950 border-[0.5px] p-7 rounded-lg items-center">
                    <label className="input input-bordered flex items-center gap-2  text-white font-serif font-semibold text-2xl">
                    Password</label>
                    <input type="password" className="w-32 h-10 justify-center bg-white shadow-inner shadow-black p-2 border-none rounded-2xl " placeholder="password" onChange={(e)=>{
                        setPassword(e.target.value);
                    }}/>
                
                </div>
                
                <button className="btn hover:bg-blue-900 transition-all rounded-2xl py-3 shadow-black bg-white font-semibold shadow-inner justify-center w-50 "onClick={()=>{ 
                        if (email && password) {
                            console.log("Signing in with:", { email, password });
                            navigate("/mainPage"); // Navigate to the main page
                        } else {
                            alert("Please enter both email and password.");
                        }
                }}>Sign In</button>
            </div>
            </div>
    )
}

export default WelcomePage;