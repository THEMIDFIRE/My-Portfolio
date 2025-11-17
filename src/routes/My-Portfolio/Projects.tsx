import ProjectCard from '@/components/ProjectCard'
import { useTheme } from '@/components/ui/theme-provider'
import API from '@/lib/API'
import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import CircleLoader from 'react-spinners/CircleLoader'

export const Route = createFileRoute('/My-Portfolio/Projects')({
    component: RouteComponent,
})

function RouteComponent() {
    const { theme } = useTheme()
    const {data, isLoading, isError} = useQuery({
        queryKey: ['projects'],
        queryFn: () => API.get('/THEMIDFIRE/repos?sort=created').then(res => res.data.slice(0, 6)),
        refetchOnWindowFocus: false,
        staleTime: Infinity,
        gcTime: 60 * 60 * 1000,
    })
    return (
        <>
            {isLoading ? <div className='w-full grow md:max-h-[calc(100vh-7rem)] xl:max-h-dvh rounded-2xl md:overflow-y-auto mb-6 md:mb-0 lg:py-7 order-2 self-center'>
                <CircleLoader color={`${theme === `dark` ? `#e5e5e5` : `#90a1b9`}`} loading={true} size={110} className="mx-auto"/>
            </div> : 
            <section className='w-full grow h-fit sm:max-h-[calc(100vh-7rem)] md:max-h-screen xl:max-h-3/4 overflow-y-auto rounded-2xl overflow-y-none mb-6 md:mb-0 order-2'>
                <div className="container grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5 md:max-h-screen xl:max-h-[calc(100vh-7rem)]">
                    {data?.map((project: any, index: number) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </section>}
            {isError && <div className='w-full grow md:max-h-[calc(100vh-7rem)] xl:max-h-dvh rounded-2xl md:overflow-y-auto mb-6 md:mb-0 lg:py-7 order-2 self-center'>
                <p className='text-center text-red-500'>Something went wrong</p>
            </div>}
        </>
    )
}
