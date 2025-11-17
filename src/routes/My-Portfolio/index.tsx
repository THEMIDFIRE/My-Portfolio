import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'

export const Route = createFileRoute('/My-Portfolio/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    const storedName = localStorage.getItem('name');
    if (storedName) {
      setName(storedName);
    }
  }, []);

  const handleName = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const nameInput = form.elements.namedItem('name') as HTMLInputElement;
    const newName = nameInput.value.trim();
    if (newName) {
      localStorage.setItem('name', newName);
      setName(newName);
    }
  };

  return (
    <div className='container h-full flex flex-col justify-center items-center gap-4 md:order-2 my-8 md:mt-0'>
      <h1 className="md:text-4xl text-3xl font-bold text-center max-w-[23ch]">
        {name ? `Welcome to my Portfolio, ${name}` : `Welcome to my Portfolio`}
      </h1>
      <p className='md:text-xl text-lg text-center'>
        Here you can find my
        <Tooltip>
          <TooltipTrigger asChild>
            <Link to="/My-Portfolio/Projects" className="underline underline-offset-4 ml-1.5 motion-safe:animate-pulse">Projects</Link>
          </TooltipTrigger>
          <TooltipContent side='bottom'>
            My latest projects showcasing my skills
          </TooltipContent>
        </Tooltip> and
        <Tooltip>
          <TooltipTrigger asChild>
            <Link to="/My-Portfolio/Services" className="underline underline-offset-4 ml-1.5 motion-safe:animate-pulse">Services</Link>
          </TooltipTrigger>
          <TooltipContent side='bottom'>
            My services as a freelancer
          </TooltipContent>
        </Tooltip>
      </p>
      {!name && (
        <form className='space-y-2' onSubmit={handleName}>
          <p className='md:text-lg text-base text-muted-foreground text-center'>Please enter your name to get started</p>
          <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-2">
            <Input placeholder='Your name' name='name' className='border-2 border-primary rounded-lg p-2' />
            <Button type='submit' className='border-2 border-primary rounded-lg p-2'>Submit</Button>
          </div>
        </form>
      )}
    </div>
  )
}
