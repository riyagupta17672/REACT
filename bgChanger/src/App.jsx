import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-400"
        style= {{backgroundColor: color}}>

          <div className="flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

                <div className="flex flex-wrap justify-center shadow-lg bg-white rounded-3xl gap-3 px-2 py-3 my-6">

                  <button onClick= {() => setColor("red")}
                  className="outline-none shadow-lg text-white px-4 py-1 rounded-full"
                  style={{backgroundColor: "red"}}>Red</button>

                  <button onClick= {() => setColor("green")}
                  className="outline-none shadow-lg text-white px-4 py-1 rounded-full"
                  style={{backgroundColor: "green"}}>Green</button>

                  <button onClick= {() => setColor("blue")}
                  className="outline-none shadow-lg text-white px-4 py-1 rounded-full"
                  style={{backgroundColor: "blue"}}>Blue</button>

                  <button onClick= {() => setColor("olive")}
                  className="outline-none shadow-lg text-white px-4 py-1 rounded-full"
                  style={{backgroundColor: "olive"}}>Olive</button>

                  <button onClick= {() => setColor("grey")}
                  className="outline-none shadow-lg text-white px-4 py-1 rounded-full"
                  style={{backgroundColor: "grey"}}>Grey</button>

                  <button onClick= {() => setColor("yellow")}
                  className="outline-none shadow-lg text-black px-4 py-1 rounded-full"
                  style={{backgroundColor: "yellow"}}>Yellow</button>

                  <button onClick= {() => setColor("pink")}
                  className="outline-none shadow-lg text-black px-4 py-1 rounded-full"
                  style={{backgroundColor: "pink"}}>Pink</button>

                  <button onClick= {() => setColor("purple")}
                  className="outline-none shadow-lg text-white px-4 py-1 rounded-full"
                  style={{backgroundColor: "purple"}}>Purple</button>

                  <button onClick= {() => setColor("lavender")}
                  className="outline-none shadow-lg text-black px-4 py-1 rounded-full"
                  style={{backgroundColor: "lavender"}}>lavender</button>

                  <button onClick= {() => setColor("white")}
                  className="outline-none shadow-lg text-black px-4 py-1 rounded-full"
                  style={{backgroundColor: "white"}}>White</button>

                  <button onClick= {() => setColor("black")}
                  className="outline-none shadow-lg text-white px-4 py-1 rounded-full"
                  style={{backgroundColor: "black"}}>Black</button>
                                                
                </div>
          </div>
      </div>
    </>
  )
}

export default App
