import "./index.scss"
import { withProviders } from "src/app/providers/withProviders"
import { Routing } from "src/app/providers/Routing"

function App() {
  return <Routing />
}

export default withProviders(App)
