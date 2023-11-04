import { useEffect, useState } from "react"
import Accordion from "./components/Accordion"
import Navbar from "./components/Navbar"

function App() {
  const [theme, setTheme] = useState(()=> JSON.parse(localStorage.getItem("theme")) || "light")

  useEffect(()=>{
    if(theme === "dark"){
      document.documentElement.classList.add("dark")
    }else{
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  useEffect(()=>{
    localStorage.setItem("theme", JSON.stringify(theme))
  }, [theme])

  const handleTheme = ()=>{
    setTheme(theme === "dark" ? "light" : "dark")
  }
  return (
    <div className='w-screen h-screen dark:bg-slate-900 dark:text-white dark:border-slate-50'>
      <section className="max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-6xl h-full flex container mx-auto border-2 border-black p-1 relative">
        <Navbar onTheme={handleTheme} theme={theme} />
        <Accordion/>
      </section>

    </div>
  )
}

export default App
