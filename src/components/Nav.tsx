import * as React from "react"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const projects: { title: string; href: string; description: string }[] = [
    {
        title: "Zcashd Deprecation",
        href: "/diagrams/zcashd-deprecation",
        description: "Deprecation DAG for zcashd"
    },
    {
        title: "ZIP 320",
        href: "/diagrams/zip-320",
        description: "ZIP 320 DAG"
    }
]

export default function Nav() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <ListedMenuItem items={projects} title="Projects" />
                <SimpleMenuItem title="Documentation" href="/docs" />
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

type MenuItem = {
    title: string;
    href: string;
    description: string;
}

const ListedMenuItem = ({ items, title }: { items: MenuItem[], title: string }) => {
    return (
        <NavigationMenuItem>
            <NavigationMenuTrigger>{title}</NavigationMenuTrigger>
            <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {items.map((item) => (
                        <ListItem
                            key={item.title}
                            title={item.title}
                            href={item.href}
                        >
                            {item.description}
                        </ListItem>
                    ))}
                </ul>
            </NavigationMenuContent>
        </NavigationMenuItem>
    )
}

const SimpleMenuItem = ({ title, href }: { title: string, href: string }) => {
    return (
        <NavigationMenuItem>
            <NavigationMenuLink asChild>
                <a
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                    )}
                    href={href}
                >
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {title}
                    </p>
                </a>
            </NavigationMenuLink>
        </NavigationMenuItem>
    )
}