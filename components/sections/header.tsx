"use client"
import { Button } from "../ui/button"
import { Terminal, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

export default function Header() {
const { theme ,setTheme } = useTheme()
    return(
        <>
            <nav className="flex items-center bg-background text-foreground font-fira font-medium">
                <div className="flex gap-4 ml-4 pt-4 ">
                    <span><Terminal /></span>
                    <span>Selim Can Aydin</span>
                </div>
                <div className="ml-auto pt-4">
                    <ul className="flex gap-4">
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
                    
                    <button><Sun/></button>
                    <Button className="">{'<Contact />'}</Button>
                    
                </div>
            </nav>
        </>
    )
}