import React from 'react'
import { colors } from './colors'

export const ThemeContext = React.createContext({
  colors: colors.dark
})

interface ThemeProviderProps {
  children: JSX.Element
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const isLightTheme = false // this is temporary, we will get back to it later

  const theme = {
    colors: isLightTheme ? colors.light : colors.dark
  }

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
