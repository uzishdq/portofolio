import { getMainColor, getPlatform } from "@/api"
import { gun } from "@/data/art"
import { formatDistanceToNow } from "date-fns"

import packageJson from "../../../package.json"
import { isMobile } from "../isMobile"
import * as bin from "./index"

export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(", ")
  const _isMobile = isMobile()

  let message = `Available commands:\n${commands}`

  if (!_isMobile) {
    message +=
      "\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command."
  }

  return message
}

export const whoami = async (args: string[]): Promise<string> => {
  return "guest"
}

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString()
}

export const website = async (args: string[]): Promise<string> => {
  setTimeout(function () {
    window.open(
      "https://legendary-engineer-e96.notion.site/Portfolio-1ffbc437b6654805abb6384c830d4e4d",
      "_blank"
    )
  }, 1000)

  return "Opening website..."
}

export const email = async (args: string[]): Promise<string> => {
  window.open("mailto:qqfauzi99@gmail.com")

  return "Opening email..."
}

export const notepad = async (args?: string[]): Promise<string> => {
  return `${gun}`
}

export const banner = (args?: string[]): string => {
  const mainColor = getMainColor()
  const desktopBanner = ` 
  ██╗   ██╗███████╗██╗███████╗██╗  ██╗██████╗  ██████╗ 
  ██║   ██║╚══███╔╝██║██╔════╝██║  ██║██╔══██╗██╔═══██╗
  ██║   ██║  ███╔╝ ██║███████╗███████║██║  ██║██║   ██║
  ██║   ██║ ███╔╝  ██║╚════██║██╔══██║██║  ██║██║▄▄ ██║
  ╚██████╔╝███████╗██║███████║██║  ██║██████╔╝╚██████╔╝
   ╚═════╝ ╚══════╝╚═╝╚══════╝╚═╝  ╚═╝╚═════╝  ╚══▀▀═╝ 

faujiShiddiq Terminal v${packageJson.version}

--
Type 'help' to see list of avaible commands.
--`

  const mobileBanner = ` 
  ██╗   ██╗███████╗██╗███████╗██╗  ██╗██████╗  ██████╗ 
  ██║   ██║╚══███╔╝██║██╔════╝██║  ██║██╔══██╗██╔═══██╗
  ██║   ██║  ███╔╝ ██║███████╗███████║██║  ██║██║   ██║
  ██║   ██║ ███╔╝  ██║╚════██║██╔══██║██║  ██║██║▄▄ ██║
  ╚██████╔╝███████╗██║███████║██║  ██║██████╔╝╚██████╔╝
   ╚═════╝ ╚══════╝╚═╝╚══════╝╚═╝  ╚═╝╚═════╝  ╚══▀▀═╝ 
--
faujiShiddiq Terminal v${packageJson.version}
--
Type 'help' to see list of avaible commands.
--`
  return window.innerWidth > 768 ? desktopBanner : mobileBanner
}

export const getInfo = () => {
  const os = getPlatform()
  const visitedAt = new Date(
    localStorage.getItem("visitedAt") || new Date().toString()
  )
  const hostname = window.location.hostname
  const theme = localStorage.getItem("theme")
  const resolution = `${window.screen.availWidth}x${window.screen.availHeight}`
  const packages = Object.keys(packageJson.dependencies)
  const devPackages = Object.keys(packageJson.devDependencies)
  const mainColor = getMainColor()

  let message = ""

  message += `<span style="color: ${mainColor}">Host</span>: ${hostname}\n`
  message += `<span style="color: ${mainColor}">OS</span>: ${os}\n`
  message += `<span style="color: ${mainColor}">Packages</span>: ${
    packages.length + devPackages.length
  } (npm)\n`
  message += `<span style="color: ${mainColor}">Resolution</span>: ${resolution}\n`
  message += `<span style="color: ${mainColor}">Theme</span>: ${theme}\n`
  message += `<span style="color: ${mainColor}">Version</span>: ${packageJson.version}\n`
  message += `<span style="color: ${mainColor}">Uptime</span>: ${formatDistanceToNow(
    visitedAt
  )}\n`
  message += `<span style="color: ${mainColor}">Author</span>: ${packageJson.author.name} (${packageJson.author.email})\n`
  message += `<span style="color: ${mainColor}">Source</span>: <a href="${packageJson.repository.url}">${packageJson.repository.url}\n</a>`

  return message
}
