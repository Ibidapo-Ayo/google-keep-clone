import { Archive, Bell, Edit, Hexagon, Lightbulb, Trash, Brush, CheckSquare2, Image, } from "lucide-react";



export const sideBarItems = [
    {
        text: "Notes",
        Icon: Lightbulb
    },
    {
        text: "Reminder",
        Icon: Bell
    },
    {
        text: "Label",
        Icon: Hexagon
    },
    {
        text: "Edit",
        Icon: Edit
    },
    {
        text: "Archive",
        Icon: Archive
    },
    {
        text: "Bin",
        Icon: Trash
    }
]

export const preInputIcons = [
    {
        Icon: CheckSquare2,
        action: "list"
    },
    {
        Icon: Brush,
        action: "brush"
    },

    {
        Icon: Image,
        action: "image"
    }
]