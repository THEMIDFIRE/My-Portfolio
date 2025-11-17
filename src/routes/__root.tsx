import * as React from 'react'
import { Outlet, createRootRoute, useRouterState } from '@tanstack/react-router'
import Navbar from '@/components/Navbar'
import { ModeToggle } from '@/components/ui/mode-toggle'
import About from '@/components/About'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const routerState = useRouterState()
  const showNavbar = routerState.location.pathname !== '/My-Portfolio/'
  return (
    <React.Fragment>
      <ModeToggle />
      {showNavbar && <Navbar />}
      <main className='mb-6'>
        <div className={`container max-w-11/12 mx-auto flex flex-wrap md:flex-nowrap gap-7 md:gap-6 ${!showNavbar ? 'h-fit justify-center items-center min-h-dvh' : ''}`}>
          <About />
          <Outlet />
        </div>
      </main>
    </React.Fragment>
  )
}
