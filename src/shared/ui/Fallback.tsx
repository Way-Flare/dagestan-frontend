import { Spin } from "antd"

export const Fallback = () => {
  return (
    <div
      className={
        "w-full h-[100vh] flex direction-col justify-center items-center"
      }
    >
      <Spin fullscreen={"true"} size={"large"} spinning={true} />
    </div>
  )
}
