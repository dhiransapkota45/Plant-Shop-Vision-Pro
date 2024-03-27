import { CartIcon, FlowerIcon, HomeIcon, SettingIcon } from "@/assets/icons";

// Routes for the application
export const routes = [
    {
        title:"home",
        link:"/",
        icon: HomeIcon
    },
    {
        title:"Products",
        link:"/products",
        icon : FlowerIcon
    },
    {
        title:"Cart",
        link:"/cart",
        icon:CartIcon
    },
    {
        title:"Settings",
        link:"/settings",
        icon:SettingIcon
    }
]