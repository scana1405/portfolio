"use client"
import { Button } from "../ui/button"
import { Terminal, Sun, Moon, Divide } from "lucide-react"
import { useTheme } from "next-themes"
import  Typewriter from "typewriter-effect"
import { useEffect, useState } from "react"

export default function Header() {
const { resolvedTheme, setTheme } = useTheme()
const [ isMounted, setMounted ] = useState(false)
useEffect(() => {
    setMounted(true)
},[])
    return(
        <>
            <nav className="flex top-0 z-50 sticky items-center bg-background text-foreground font-fira font-medium dark:bg-gray-900/80 backdrop-blur-md dark:border-gray-800  pb-3">
                <div className="flex gap-4 ml-4 pt-4 ">
                    <span><Terminal /></span>
                    <span>
                    <Typewriter
                        onInit={(typewriter) => {
                        typewriter.typeString('Hey!')
                        .pauseFor(2500)
                        .deleteAll()
                        .typeString('Selim Can Aydin')
                        .start();
                        }}
                        />
                    </span>
                </div>
                <div className="ml-auto pt-4">
                    <ul className="flex gap-7">
                        <li>
                            <span>ABOUT</span>
                        </li>
                        <li>
                            <span>SKILLS</span>
                        </li>
                        <li>
                            <span>EXPERIENCE</span>
                        </li>
                        <li>
                            <span>PROJECTS</span>
                        </li>
                    </ul>
                </div>
                <div className="pt-4 ml-auto mr-4 flex gap-4 items-center">
                    
                    <button onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
                        {!isMounted ? (
                            <div className="w-6 h-6"></div> 
                            ) : (
                            resolvedTheme === "dark" ? <Sun /> : <Moon />
                            )}
                    </button>
                    <Button>{'<Contact />'}</Button>
                    
                </div>
            </nav>
        </>
    )
}