import "./index.scss"
import { Routing } from "./providers/Routing"

function App() {
  console.log(process.env.API_HOST)
  return <Routing />
}

export default App
