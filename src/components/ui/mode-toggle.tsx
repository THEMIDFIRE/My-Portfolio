import { Button } from "@/components/ui/button"
import { useTheme } from "./theme-provider"
import { Monitor, Moon, Sun } from "lucide-react"
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    const themes: ("light" | "dark" | "system")[] = ["light", "dark", "system"]
    const currentIndex = themes.indexOf(theme)
    const nextIndex = (currentIndex + 1) % themes.length
    setTheme(themes[nextIndex])
  }

  const getThemeLabel = () => {
    switch (theme) {
      case 'light':
        return 'Light mode (click to switch to dark mode)'
      case 'dark':
        return 'Dark mode (click to switch to system preference)'
      case 'system':
        return 'System preference (click to switch to light mode)'
    }
  }

  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            aria-label={getThemeLabel()}
            className="fixed right-0 bottom-1/4 w-11 rounded-s-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-0 dark:focus:ring-0"
          >
            <Sun className={`absolute size-5 transition-all ${theme === 'light' ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
            <Moon className={`absolute size-5 transition-all ${theme === 'dark' ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
            <Monitor className={`absolute size-5 transition-all ${theme === 'system' ? 'opacity-100' : 'opacity-0 -rotate-90'}`} />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{getThemeLabel()}</p>
        </TooltipContent>
      </Tooltip>
    </>
  )
}