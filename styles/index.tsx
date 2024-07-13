import { extendTheme } from '@chakra-ui/react'
import '@fontsource/mulish';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#faf9f5',
        color: '#333'
      }
    }
  },
  fonts: {
    heading: 'Mulish, sans-serif',
    body: 'Mulish, sans-serif',
  },
})

export default theme