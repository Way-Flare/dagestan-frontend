import { navFilters, navItems } from "../const/"
import { Button } from "@shared/ui"
import logo from "@shared/img/logo.png"
import showlist from "@shared/img/showlist.png"
import { Link, useLocation } from "react-router-dom"
import { paths } from "@app/providers/path"
import { useAppDispatch, useAppSelector } from "@app/store/hooks"
import { changeShowMap, selectShowMap } from "@shared/redux"

export const NavBar = () => {
  const { pathname } = useLocation()
  const showMap = useAppSelector(selectShowMap)
  const dispatch = useAppDispatch()
  // const changeShowMapHandler = dispatch(changeShowMap())

  return (
    <nav className="absolute w-full h-24 bottom-0 lg:top-0 z-50">
      <div className="px-4 mx-auto text-sm">
        <div className="flex justify-center lg:justify-between items-center py-2">
          <div className="flex items-center flex-shrink-0">
            <Link to="/">
              <img className="w-20 h-16 mr-2" src={logo} alt="logo" />
            </Link>
          </div>
          <div className="hidden lg:flex bg-white w-[290px] h-[64px] items-center justify-center rounded-2xl shadow-[0_1px_2px_0_#00103D14]">
            {navItems.map((item, index) => (
              <Link key={index} to={item.href}>
                <Button
                  key={index}
                  className={`w-[123px] h-[40px] rounded-2xl text-lg ${pathname === item.href ? "bg-[#F9FAFB]" : ""} `}
                  variant="ghost"
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex justify-center space-x-12 items-center bg-white w-[80px] h-[64px] rounded-2xl shadow-[0_1px_2px_0_#00103D14]">
            <div className="bg-[#001C3D14] h-10 w-10 rounded-full"></div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex-1 h-8"></div>
          <div className="hidden lg:flex h-[32px] items-center justify-center gap-1 flex-2">
            {navFilters.map((item, index) => (
              <a key={index} href={item.href}>
                <Button
                  className=" bg-white h-[30px] rounded-md shadow-[0_1px_2px_0_#00103D14] flex justify-between items-center"
                  variant="ghost"
                  size="sm"
                >
                  <img className="h-[16px] w-[16px] mr-1" src={item.icon} />
                  <div className="text-base">{item.label}</div>
                </Button>
              </a>
            ))}
          </div>
          <div className="flex-1 flex justify-end">
            {pathname === paths.MAIN && showMap ? (
              <Button
                className=" bg-white h-[30px] rounded-md shadow-[0_1px_2px_0_#00103D14] flex justify-between items-center"
                onClick={() => dispatch(changeShowMap())}
                variant="ghost"
                size="sm"
              >
                <img className="h-[16px] w-[16px] mr-2" src={showlist} />
                <div className="text-sm font-semibold">Показать список</div>
              </Button>
            ) : pathname === paths.MAIN && !showMap ? (
              <Button
                className=" bg-white h-[30px] rounded-md shadow-[0_1px_2px_0_#00103D14] flex justify-between items-center"
                onClick={() => dispatch(changeShowMap())}
                variant="ghost"
                size="sm"
              >
                <img className="h-[16px] w-[16px] mr-2" src={showlist} />
                <div className="text-sm font-semibold">Показать карту</div>
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </nav>
  )
}
