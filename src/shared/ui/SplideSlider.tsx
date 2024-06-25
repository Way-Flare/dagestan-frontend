import { FC, useMemo, useState } from "react"
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide"
import "./progress-bar.scss"
import "@splidejs/react-splide/css"
import imgNotAvailable from "@shared/img/img_nov_available.png"

type Props = {
  children?: React.ReactNode
  height?: string
  images: {
    name: string
    file: string
  }[]
}

export const SplideSlider: FC<Props> = ({
  children,
  height = "15rem",
  images,
}) => {
  const [hoveredSlider, setHoveredSlider] = useState(false)
  const showProgress = useMemo(() => images.length > 1, [images.length])
  const startStripes = useMemo(
    () => ({
      images: images.map((_, i) => {
        if (i === 0) {
          return {
            active: true,
            completed: false,
          }
        }
        return {
          active: false,
          completed: false,
        }
      }),
    }),
    [images],
  )
  const [imageStripes, setImageStripes] = useState(startStripes)

  if (images.length === 0) {
    return (
      <div>
        <img
          className={`h-[${height}] w-full object-cover`}
          src={imgNotAvailable}
        />
      </div>
    )
  }

  return (
    <div style={{ position: "relative" }}>
      {children}
      <Splide
        className="relative"
        onMove={(splide, newIndex, oldIndex) => {
          splide.Components.Autoplay.play()
          if (
            (oldIndex === images.length - 1 && newIndex === 0) ||
            (newIndex === images.length - 1 && oldIndex === 0)
          ) {
            setImageStripes(startStripes)
          } else if (newIndex < oldIndex) {
            setImageStripes((state) => {
              return {
                images: state.images.map((el, i) => {
                  if (i === oldIndex) {
                    return {
                      active: false,
                      completed: false,
                    }
                  } else if (i === newIndex) {
                    return {
                      active: true,
                      completed: false,
                    }
                  }
                  return el
                }),
              }
            })
          } else {
            setImageStripes((state) => {
              return {
                images: state.images.map((el, i) => {
                  if (i === oldIndex) {
                    return {
                      active: false,
                      completed: true,
                    }
                  } else if (i === newIndex) {
                    return {
                      active: true,
                      completed: false,
                    }
                  }
                  return el
                }),
              }
            })
          }
        }}
        options={{
          type: "loop",
          gap: "1rem",
          cover: true,
          autoplay: true,
          interval: 4000,
          pauseOnHover: false,
          resetProgress: true,
          height,
          pagination: false,
        }}
        hasTrack={false}
      >
        <div>
          <SplideTrack className="w-full">
            {(images ?? []).map((image, index) => (
              <SplideSlide
                key={`${index}${Math.random()}`}
                className="rounded-md"
                onMouseEnter={() => {
                  console.log(hoveredSlider)
                  setHoveredSlider(true)
                }}
                onMouseLeave={() => {
                  console.log(hoveredSlider)
                  setHoveredSlider(false)
                }}
              >
                <img
                  // className="h-[243px] w-[388px] object-cover object-center rounded-md bg-cover"
                  src={image.file}
                />
              </SplideSlide>
            ))}
          </SplideTrack>
          <div
            className={`absolute bottom-2 flex gap-1 w-full px-2 ${!showProgress ? "hidden" : ""}`}
          >
            {imageStripes.images.map((image, index, arr) => {
              const stripeLength = `${100 / arr.length}%`
              return (
                <div key={index} style={{ width: stripeLength }}>
                  <div
                    className={`meter ${image.completed ? "progress-completed" : ""}`}
                  >
                    <div className={image.active ? "progress" : ""}></div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="splide__pagination"></div>
          <div
            className={`splide__arrows ${!showProgress || !hoveredSlider ? "hidden" : ""}`}
          ></div>
        </div>
      </Splide>
    </div>
  )
}
