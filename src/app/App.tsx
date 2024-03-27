import "./index.scss"
import { Routing } from "./providers/Routing"
import { withProviders } from "./providers/withProviders"

function App() {
  return <Routing />
}

export default withProviders(App)
