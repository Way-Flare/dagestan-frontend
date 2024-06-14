import courthouse from "@shared/img/courthouse.png"
import fork from "@shared/img/fork.png"
import tree from "@shared/img/tree.png"
import heart from "@shared/img/navbarIcons/heart.png"
import map from "@shared/img/navbarIcons/map.png"
import profileCircle from "@shared/img/navbarIcons/profile-circle.png"
import routing from "@shared/img/navbarIcons/routing.png"

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
  { icon: tree, label: "Природа", href: "#", tag: "nature" },
  { icon: fork, label: "Еда", href: "#", tag: "food" },
  {
    icon: courthouse,
    label: "Достопримечательности",
    href: "#",
    tag: "landmark",
  },
]
