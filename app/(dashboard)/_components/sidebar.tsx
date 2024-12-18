import { Logo } from "./logo"
import { SidebarRoutes } from "./sidebar-routes"

export const Sidebar = () => {
    return <div className="h-full border-r overflow-y-auto flex flex-col shadow-sm bg-white">
        <div className="p-6">
            <Logo/>
        </div>
        <div className="flex flex-col w-full">
            <SidebarRoutes/>
        </div>
    </div>
}