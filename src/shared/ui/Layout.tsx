import React, { FC } from "react"

type Props = {
  children: React.ReactNode
  px?: string
  flex?: boolean
}

export const Layout: FC<Props> = ({ children, flex = false, px = "4" }) => {
  return (
    <div
      className={`px-${px} lg:pt-24 ${flex ? "flex" : ""} justify-center container`}
    >
      {children}
    </div>
  )
}
