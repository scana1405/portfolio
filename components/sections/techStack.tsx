import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Server, Box, AppWindow } from "lucide-react"
export default function TechStack(){
    return(
        <>
        <section className="h-150 w-screen grid items-center justify-center bg-stack-section-background pb-50">
            <div className="mt-12">
            <p className="font-fira font-bold text-3xl">Technical_Proficiency</p>
            <p className="max-w-4xl mt-5 font-fira">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam eveniet necessitatibus laborum et, quia accusantium. Quasi in odio quae fugit tempora! Incidunt, repellat. Nihil magnam dolor fuga maxime hic quisquam!</p>
            </div>
            <div className="flex gap-5 mt-20 items-center justify-center">
                <Card className="w-full max-w-sm bg-card-background">
      <CardHeader>
        <CardTitle className="flex gap-2 items-center font-fira">
            <div className="bg-cyan-800/20 w-10 h-10 flex items-center justify-center border-2 rounded-md border-cyan-600/50">
            <AppWindow className="text-cyan-600 z-30" />
            </div>
            <h1 className="text-primary-text">Frontend</h1>
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-3 text-tech-text">
        <HoverCard >
            <HoverCardTrigger className="h-full w-20 bg-tag-background flex items-center justify-center border-2 border-tag-border rounded-md font-fira">
                <h1>React</h1>
            </HoverCardTrigger>
                <HoverCardContent>
                    The React Framework – created and maintained by @vercel.
            </HoverCardContent>
    </HoverCard>
    <HoverCard>
            <HoverCardTrigger className="h-full w-28 bg-tag-background flex items-center justify-center p-1 border-2 border-tag-border rounded-md font-fira">
                <h1>Typescript</h1>
            </HoverCardTrigger>
                <HoverCardContent>
                    The React Framework – created and maintained by @vercel.
            </HoverCardContent>
    </HoverCard>
    <HoverCard>
            <HoverCardTrigger className="h-full w-35 bg-tag-background flex justify-center p-1 border-2 border-tag-border rounded-md font-fira">
                <h1>Tailwind CSS</h1>
            </HoverCardTrigger>
                <HoverCardContent>
                    The React Framework – created and maintained by @vercel.
            </HoverCardContent>
    </HoverCard>
    <HoverCard>
            <HoverCardTrigger className="h-full w-25 bg-tag-background flex justify-center p-1 border-2 border-tag-border rounded-md font-fira">
                <h1>Next.js</h1>
            </HoverCardTrigger>
                <HoverCardContent>
                    The React Framework – created and maintained by @vercel.
            </HoverCardContent>
    </HoverCard>
    <HoverCard>
            <HoverCardTrigger className="h-full w-30 bg-tag-background flex justify-center p-1 border-2 border-tag-border rounded-md font-fira">
                <h1>Javascript</h1>
            </HoverCardTrigger>
                <HoverCardContent>
                    The React Framework – created and maintained by @vercel.
            </HoverCardContent>
    </HoverCard>
      </CardContent>
    </Card>
                 <Card className="w-full max-w-sm bg-card-background">
      <CardHeader>
        <CardTitle className="flex gap-2 items-center font-fira">
            <div className="bg-indigo-800/20 w-10 h-10 flex items-center justify-center border-2 rounded-md border-indigo-600/50">
            <Server className="text-indigo-600 z-30" />
            </div>
            <h1 className="text-primary-text">Backend</h1>
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-3 text-secondary-text">
         <HoverCard>
             <HoverCardTrigger className="h-full w-30 bg-tag-background flex justify-center p-1 border-2 border-tag-border rounded-md font-fira">
                <h1>Node.js</h1>
            </HoverCardTrigger>
                <HoverCardContent>
                    The React Framework – created and maintained by @vercel.
            </HoverCardContent>
    </HoverCard>
    <HoverCard>
            <HoverCardTrigger className="h-full w-30 bg-tag-background flex justify-center p-1 border-2 border-tag-border rounded-md font-fira">
                <h1>Python</h1>
            </HoverCardTrigger>
                <HoverCardContent>
                    The React Framework – created and maintained by @vercel.
            </HoverCardContent>
    </HoverCard>
    <HoverCard>
            <HoverCardTrigger className="h-full w-30 bg-tag-background flex justify-center p-1 border-2 border-tag-border rounded-md font-fira">
                <h1>MySQL</h1>
            </HoverCardTrigger>
                <HoverCardContent>
                    The React Framework – created and maintained by @vercel.
            </HoverCardContent>
    </HoverCard>
    <HoverCard>
            <HoverCardTrigger className="h-full w-30 bg-tag-background flex justify-center p-1 border-2 border-tag-border rounded-md font-fira">
                <h1>PostgreSQL</h1>
            </HoverCardTrigger>
                <HoverCardContent>
                    The React Framework – created and maintained by @vercel.
            </HoverCardContent>
    </HoverCard>
    <HoverCard>
            <HoverCardTrigger className="h-full w-30 bg-tag-background flex justify-center p-1 border-2 border-tag-border rounded-md font-fira">
                <h1>REST API</h1>
            </HoverCardTrigger>
                <HoverCardContent>
                    The React Framework – created and maintained by @vercel.
            </HoverCardContent>
    </HoverCard>
      </CardContent>
    </Card>
                 <Card className="w-full max-w-sm bg-card-background">
      <CardHeader>
        <CardTitle className="flex gap-2 items-center font-fira">
            <div className="bg-orange-800/20 w-10 h-10 flex items-center justify-center border-2 rounded-md border-orange-600/50">
            <Box className="text-orange-600 z-30" />
            </div>
            <h1 className="text-primary-text">DevOps_&_Tools</h1>
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-3 text-tech-text">
         <HoverCard>
  <HoverCardTrigger className="h-full w-30 bg-tag-background flex justify-center p-1 border-2 border-tag-border rounded-md font-fira">
                <h1>Docker</h1>
            </HoverCardTrigger>
  <HoverCardContent>
    The React Framework – created and maintained by @vercel.
  </HoverCardContent>
</HoverCard>
<HoverCard>
  <HoverCardTrigger className="h-full w-30 bg-tag-background flex justify-center p-1 border-2 border-tag-border rounded-md font-fira">
                <h1>Kubernetes</h1>
            </HoverCardTrigger>
  <HoverCardContent>
    The React Framework – created and maintained by @vercel.
  </HoverCardContent>
</HoverCard>
<HoverCard>
  <HoverCardTrigger className="h-full w-30 bg-tag-background flex justify-center p-1 border-2 border-tag-border rounded-md font-fira">
                <h1>Git/Github</h1>
            </HoverCardTrigger>
  <HoverCardContent>
    The React Framework – created and maintained by @vercel.
  </HoverCardContent>
</HoverCard>
<HoverCard>
  <HoverCardTrigger className="h-full w-30 bg-tag-background flex justify-center p-1 border-2 border-tag-border rounded-md font-fira">
                <h1>Linux</h1>
            </HoverCardTrigger>
  <HoverCardContent>
    The React Framework – created and maintained by @vercel.
  </HoverCardContent>
</HoverCard>
<HoverCard>
  <HoverCardTrigger className="h-full w-40 bg-tag-background flex justify-center p-1 border-2 border-tag-border rounded-md font-fira">
                <h1>Shell Script</h1>
            </HoverCardTrigger>
  <HoverCardContent>
    The React Framework – created and maintained by @vercel.
  </HoverCardContent>
</HoverCard>
      </CardContent>
    </Card>
            </div>
        </section>
        </>
    )
}