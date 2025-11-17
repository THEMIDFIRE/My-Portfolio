import { IconBrandBootstrap, IconBrandCss3, IconBrandFacebook, IconBrandGit, IconBrandGithub, IconBrandHtml5, IconBrandInstagram, IconBrandJavascript, IconBrandLinkedin, IconBrandNextjs, IconBrandReact, IconBrandSass, IconBrandTailwind, IconBrandTwitter, IconBrandTypescript } from '@tabler/icons-react'
import { ChevronUp, Mail, MapPin, Smartphone } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Card } from './ui/card'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { useQuery } from '@tanstack/react-query'
import API from '../lib/API'
import { useRouterState } from '@tanstack/react-router'

export default function About() {
    const routerState = useRouterState()
    const showReposNum = !routerState.location.pathname.endsWith('/') && !routerState.location.pathname.endsWith('/My-Portfolio')


    const { data } = useQuery({
        queryKey: ['about'],
        queryFn: () => API.get('/themidfire').then(res => res.data),
        refetchOnWindowFocus: false,
        staleTime: Infinity,
        gcTime: 60 * 60 * 1000,
    })
    return (
        <aside className='w-full h-fit md:max-w-1/3 order-2 md:order-1'>
            <Card className="text-center p-6 shadow-xl flex flex-col items-center gap-3 bg-gray-100 dark:bg-slate-800">
                <Avatar className='size-40'>
                    <AvatarImage src={data?.avatar_url} />
                    <AvatarFallback>
                        <span>MM</span>
                    </AvatarFallback>
                </Avatar>
                <h2 className="md:text-xl text-2xl lg:text-3xl font-bold text-center">
                    {data?.name}
                </h2>
                <p className="text-slate-500 dark:text-slate-400 text-center animate-pulse">
                    {data?.bio}
                </p>
                <p>
                    {data?.company}
                </p>
                <div className="flex flex-col gap-3">
                    <div className="flex gap-2 items-center">
                        <Smartphone />
                        <p>+20 1030356638</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Mail className="text-xl" />
                        <p>chaoticoder@gmail.com</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <MapPin className="text-xl" />
                        <p>
                            {data?.location}
                        </p>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-6 w-full">
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="ghost" className='hover:bg-gray-200 dark:hover:bg-slate-600'>Skills <ChevronUp className="gap-1" /></Button>
                        </PopoverTrigger>
                        <PopoverContent className='max-w-fit space-y-2'>
                            <span className='flex gap-2'>
                                <IconBrandNextjs />Next.js
                            </span>
                            <span className='flex gap-2'>
                                <IconBrandReact />React.js
                            </span>
                            <span className='flex gap-2'>
                                <IconBrandGit />Git
                            </span>
                            <span className='flex gap-2'>
                                <IconBrandGithub />Github
                            </span>
                            <span className='flex gap-2'>
                                <IconBrandTypescript />TypeScript
                            </span>
                            <span className='flex gap-2'>
                                <IconBrandTailwind />Tailwind CSS
                            </span>
                            <span className='flex gap-2'>
                                <IconBrandJavascript />JavaScript
                            </span>
                            <span className='flex gap-2'>
                                <IconBrandBootstrap />Bootstrap
                            </span>
                            <span className='flex gap-2'>
                                <IconBrandSass />Sass
                            </span>
                            <span className='flex gap-2'>
                                <IconBrandCss3 />CSS3
                            </span>
                            <span className='flex gap-2'>
                                <IconBrandHtml5 />HTML5
                            </span>
                        </PopoverContent>
                    </Popover>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="ghost" className='hover:bg-gray-200 dark:hover:bg-slate-600'>Socials <ChevronUp className="gap-1" /></Button>
                        </PopoverTrigger>
                        <PopoverContent className='max-w-fit space-y-2'>
                            <a href="https://github.com/THEMIDFIRE" target="_blank" className="flex gap-2 items-center hover:underline underline-offset-4"><IconBrandGithub />Github</a>
                            <a href="https://linkedin.com/in/THEMIDFIRE" target="_blank" className="flex gap-2 items-center hover:underline underline-offset-4"><IconBrandLinkedin />Linkedin</a>
                            <a href="https://twitter.com/TH3MIDFIRE" target="_blank" className="flex gap-2 items-center hover:underline underline-offset-4"><IconBrandTwitter />Twitter</a>
                            <a href="https://facebook.com/TH3MIDFIRE" target="_blank" className="flex gap-2 items-center hover:underline underline-offset-4"><IconBrandFacebook />Facebook</a>
                            <a href="https://instagram.com/themidfire.dev" target="_blank" className="flex gap-2 items-center hover:underline underline-offset-4"><IconBrandInstagram />Instagram</a>
                        </PopoverContent>
                    </Popover>
                </div>
                <p className="text-center text-slate-500 dark:text-slate-400">Available for freelance work</p>
                {showReposNum && <p className="text-center text-slate-500 dark:text-slate-400">Total repos: {data?.public_repos}</p>}
                <Button variant="default" className='w-4/5' onClick={() => window.open("/src/assets/Mohamed Magdy - Front end - CV.pdf", "_blank")}>
                    Download CV
                </Button>
            </Card>
        </aside>
    )
}
