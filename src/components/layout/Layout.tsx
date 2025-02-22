import React from "react"
import { useTheme } from "@/utils/themeProvider"

interface Props {
  children: React.ReactNode
  onClick: () => void
}

const Layout: React.FC<Props> = ({ children, onClick }) => {
  const { theme } = useTheme()

  return (
    <div
      className="text-xs"
      onClick={onClick}
      style={{
        color: theme.foreground,
      }}
    >
      <main
        className="size-full"
        style={{
          background: theme.background,
        }}
      >
        {children}
      </main>
    </div>
  )
}

export default Layout
