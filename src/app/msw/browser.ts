import { setupWorker } from "msw/browser"
import { handlers } from "./handlers"
import { __serverStartDatabaseMigration } from "@shared/lib/server"

handlers.forEach(
  (handler) =>
    (handler.info.path = `${process.env.API_HOST}${handler.info.path}`),
)

export const worker = setupWorker(...handlers)

__serverStartDatabaseMigration()
