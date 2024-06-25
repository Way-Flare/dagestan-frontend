import { locationsShowNavfilters, navItems, navMobileItems } from "../const/"
import { Button } from "@shared/ui"
import logo from "@shared/img/logo.svg"
import showlist from "@shared/img/showlist.svg"
import { Link, useLocation } from "react-router-dom"
import { paths } from "@app/providers/path"
import { useAppDispatch, useAppSelector } from "@app/store/hooks"
import { changeShowMap, selectShowMap, setDesktop } from "@shared/redux"
import "./navbar.scss"
import { useEffect, useMemo } from "react"
import DeviceDetector from "device-detector-js"
import { NavFilters } from "./nav-filters"

export const NavBar = () => {
  const { pathname } = useLocation()
  const showMap = useAppSelector(selectShowMap)
  const dispatch = useAppDispatch()
  const location = useLocation()

  const showNavFilters = useMemo(
    () => locationsShowNavfilters.has(location.pathname),
    [location.pathname],
  )
  // const changeShowMapHandler = dispatch(changeShowMap())

  useEffect(() => {
    const deviceDetector = new DeviceDetector()
    const userAgent = navigator.userAgent
    const device = deviceDetector.parse(userAgent)
    const detectDesktop = device?.device?.type.includes("desktop")
    dispatch(setDesktop(Boolean(detectDesktop)))
  }, [dispatch])

  return (
    <nav className="absolute w-full h-[108px] lg:h-24 bottom-0 lg:top-0 z-50">
      <div className="flex flex-col-reverse gap-3 lg:gap-0 lg:block lg:px-4 mx-auto text-sm">
        <div className="flex justify-evenly lg:hidden bg-white h-[83px] w-[100vw] py-2">
          {navMobileItems.map((item, index) => {
            return (
              <Link key={index} to={item.href}>
                <div className="flex flex-col  items-center gap-1">
                  <div>
                    <img className="h-6 w-6" src={item.icon} />
                  </div>
                  <div>{item.label}</div>
                </div>
              </Link>
            )
          })}
        </div>
        <div className="hidden lg:flex justify-center lg:justify-between items-center py-2">
          <div className="flex items-center flex-shrink-0">
            <Link to="/">
              <div className="bg-white rounded-xl w-[80px] h-[64px] flex justify-center items-center">
                <img className="" src={logo} alt="logo" />
              </div>
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
        {showNavFilters && (
          <div className="flex justify-center lg:justify-between items-center">
            <div className="hidden lg:block flex-1 h-8"></div>
            <NavFilters />
            <div className="hidden flex-1 lg:flex justify-end">
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
        )}
      </div>
    </nav>
  )
}
