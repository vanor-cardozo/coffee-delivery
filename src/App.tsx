import { ThemeProvider } from 'styled-components'
import { Home } from './pages/Home'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/themes/global'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
      <h1>Coffee Delivery</h1>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
