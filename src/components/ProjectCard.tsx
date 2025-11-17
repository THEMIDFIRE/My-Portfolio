import { Github, Link2 } from 'lucide-react'
import { Button } from './ui/button'
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'
import { Link } from '@tanstack/react-router'

export default function ProjectCard({ project }: { project: any }) {
    return (
        <Card className='shadow-lg dark:bg-slate-800 gap-4'>
            <CardHeader>
                <CardTitle>{project.name}</CardTitle>
                <CardDescription>{project.description ? project.description : "No description added"}</CardDescription>
                <CardAction className='space-x-2'>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="outline" size="icon" >
                                <Link to={project.homepage} target="_blank">
                                    <Link2 />
                                </Link>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Live preview</p>
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="outline" size="icon" >
                                <Link to={project.html_url} target="_blank">
                                    <Github />
                                </Link>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Repository</p>
                        </TooltipContent>
                    </Tooltip>
                </CardAction>
            </CardHeader>
            <CardFooter>
                <div className="flex flex-wrap gap-2 text-xs">
                    {project.topics.length ? project.topics?.map((topic: string, index: number) => (
                        <span key={index} className='bg-gray-200 dark:bg-slate-600 text-gray-800 dark:text-slate-200 px-2 py-1 rounded text-xs'>{topic}</span>
                    )) : "No tags added"}
                </div>
            </CardFooter>
        </Card>
    )
}
