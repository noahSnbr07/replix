import { Disc, Home, Library, User } from "lucide-react";

//structure
interface SettingsEntry {
    id: number;
    title: string;
    href: string;
    icon: React.JSX.Element;
}

//static file
const settingsEntries: SettingsEntry[] = [
    { id: 0, title: "Account", href: "/settings/account", icon: <User /> },
    { id: 1, title: "Discography", href: "/settings/discography", icon: <Disc /> },
    { id: 2, title: "Library", href: "/settings/library", icon: <Library /> },
    { id: 3, title: "Home", href: "/home", icon: <Home /> },
];

//export data
export default settingsEntries;