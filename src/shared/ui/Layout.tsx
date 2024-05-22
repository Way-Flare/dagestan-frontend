import React, { FC } from "react"

type Props = {
  children: React.ReactNode
}

export const Layout: FC<Props> = ({ children }) => {
  return <div className="px-4 pt-36">{children}</div>
}
