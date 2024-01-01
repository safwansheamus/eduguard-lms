"use client"

import { Category } from "@prisma/client";

import { GrShieldSecurity} from "react-icons/gr"
import { MdOutlineVpnLock} from "react-icons/md"
import { SiDesignernews} from "react-icons/si"

import {
    FcEngineering,
    FcFilmReel,
    FcMultipleDevices,
    FcMusic,
    FcOldTimeCamera,
    FcSalesPerformance,
    FcSportsMode,
    
} from "react-icons/fc"
import { IconType } from "react-icons";

import { CategoryItem } from "./category-item";

interface CategoriesProps {
    items: Category[];
}

const iconMap: Record<Category["name"], IconType> = {
    "Cybersecurity": GrShieldSecurity,
    "Ethical Hacker": MdOutlineVpnLock,
    "Computer Science": FcMultipleDevices,
    "Enginering": FcEngineering,
    "Digital Designer" : SiDesignernews,
    "Video Editor": FcFilmReel,
    "Photo Editor": FcOldTimeCamera 
}

export const Categories = ({
    items,
}: CategoriesProps) => {
    return ( 
        <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
            {items.map((item) => (
                <CategoryItem 
                    key={item.id}
                    label={item.name}
                    icon={iconMap[item.name]}
                    value={item.id}
                />
            ))}
        </div>
     );
}
 
