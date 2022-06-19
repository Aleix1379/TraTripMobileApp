import useTheme from './useTheme'

const useThemedStyles = (styles: any) => {
  console.info('styles:', styles)
  const theme = useTheme()
  return styles(theme)
}

export default useThemedStyles
