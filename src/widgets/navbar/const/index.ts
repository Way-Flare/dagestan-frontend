import courthouse from "@shared/img/navFilters/courthouse.svg"
import fork from "@shared/img/navFilters/fork.svg"
import tree from "@shared/img/navFilters/tree.svg"
import courthouseActive from "@shared/img/navFilters/courthouse_active.svg"
import forkActive from "@shared/img/navFilters/fork_active.svg"
import treeActive from "@shared/img/navFilters/tree_active.svg"
import heart from "@shared/img/navbarIcons/heart.svg"
import map from "@shared/img/navbarIcons/map.svg"
import profileCircle from "@shared/img/navbarIcons/profile-circle.svg"
import routing from "@shared/img/navbarIcons/routing.svg"

export const navItems = [
  { label: "Места", href: "/" },
  { label: "Маршруты", href: "/routes" },
]

export const navMobileItems = [
  { label: "Места", href: "/", icon: map },
  { label: "Маршруты", href: "/routes", icon: routing },
  { label: "Избранное", href: "/", icon: heart },
  { label: "Профиль", href: "/", icon: profileCircle },
]

export const navFilters = [
  {
    icon: tree,
    iconActive: treeActive,
    label: "Природа",
    href: "#",
    tag: "nature",
  },
  { icon: fork, iconActive: forkActive, label: "Еда", href: "#", tag: "food" },
  {
    icon: courthouse,
    iconActive: courthouseActive,
    label: "Достопримечательности",
    href: "#",
    tag: "landmark",
  },
]

export const locationsShowNavfilters = new Set(["/"])
