import {useState,React} from "react";
const SignupPage = () => {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
  return (
    <>
      <main className="flex flex-row ">
      <section className="items-center w-1/3">
          <img className="object-fit" src="/10993431.jpg" alt="" />
        </section>
        <section className="w-2/3 flex flex-col items-center">
            <h1 style={{fontFamily:"monospace"}}className="font-bold h-auto text-3xl self-center text-black py-10">
            EVERY GREAT WORK BEGINS WITH A DREAM
            </h1>
          <div  className="flex flex-col p-10 justify-stretch">
            <div className="brutalist-container">
              <input
                placeholder="TYPE HERE"
                className="brutalist-input smooth-type"
                type="text"
                value={username}
                onChange={(e)=>{setUsername(e.target.value)}}
              />
              <label className="brutalist-label">NAME</label>
            </div>
            <div className="brutalist-container">
              <input
                placeholder="TYPE HERE"
                className="brutalist-input smooth-type"
                type="password"
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
              />
              <label className="brutalist-label">PASSWORD</label>
            </div>
          </div>
          <div className="flex items-center">
            <button
              style={{ fontFamily: "monospace" }}
              className="overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
              onClick={() => console.log(username, password)}
            >
              LOGIN
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-indigo-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-indigo-600 rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
              <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
                EXPLORE!
              </span>
            </button>
          </div>
        </section>
      </main>
    </>
  )
}

export default SignupPage