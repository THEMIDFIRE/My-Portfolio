import { Link } from "@tanstack/react-router";
import { ArrowBigLeftDash, MenuIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "./ui/navigation-menu";

export default function Navbar() {
    interface Greeting {
        name: string;
    }

    const [greeting, setGreeting] = useState<Greeting>({ name: "" });

    useEffect(() => {
        const time = new Date().getHours();
        if (time >= 5 && time < 12) {
            setGreeting({ name: "Good Morning," });
        } else if (time >= 12 && time < 18) {
            setGreeting({ name: "Good Afternoon," });
        } else {
            setGreeting({ name: "Good Evening," });
        }

    }, []);

    return (
        <>
            <NavigationMenu className="sticky top-0 z-50 max-w-full w-full mx-auto justify-evenly py-5 hidden md:flex bg-white dark:bg-slate-900/50 backdrop-blur-xl">
                <Button variant={"link"}>
                    <Link to="/" className="text-sm flex gap-2 items-center justify-center">
                        <ArrowBigLeftDash className="size-4" /> <span className="hidden sm:block">Go Home</span>
                    </Link>
                </Button>
                <h1 className="mx-4 text-lg md:text-2xl lg:text-3xl font-bold">{greeting.name} {localStorage.getItem("name") || "Guest"}</h1>
                <NavigationMenuList className="gap-6 hidden md:flex">
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link to="/Projects" className="[&.active]:border-2 [&.active]:border-primary [&.active]:rounded-lg [&.active]:p-2 text-xl">Projects</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link to="/Services" className="[&.active]:border-2 [&.active]:border-primary [&.active]:rounded-lg [&.active]:p-2 text-xl">Services</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            {/* Mobile menu */}
            <NavigationMenu className="sticky top-0 z-50 max-w-full w-full mx-auto justify-evenly py-6 md:hidden bg-white dark:bg-slate-900/50 backdrop-blur-xl">
                <Button variant={"link"}>
                    <Link to="/" className="text-sm flex gap-2 items-center justify-center">
                        <ArrowBigLeftDash className="size-4" /> <span className="hidden sm:block">Go Home</span>
                    </Link>
                </Button>
                <h1 className="mx-4 text-lg md:text-2xl lg:text-3xl font-bold">{greeting.name} {localStorage.getItem("name") || "Guest"}</h1>
                <NavigationMenuList className="md:hidden md:order-2">
                    <NavigationMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <MenuIcon className="size-4" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        <NavigationMenuLink>
                                            <Link to="/Projects" className="[&.active]:border-2 [&.active]:border-primary [&.active]:rounded-lg [&.active]:p-2 text-xl">Projects</Link>
                                        </NavigationMenuLink>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <NavigationMenuLink>
                                            <Link to="/Services" className="[&.active]:border-2 [&.active]:border-primary [&.active]:rounded-lg [&.active]:p-2 text-xl">Services</Link>
                                        </NavigationMenuLink>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </>
    )
}
