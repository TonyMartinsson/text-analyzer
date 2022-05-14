import { Container } from '@mui/material'
import { CSSProperties } from '@mui/styled-engine'
import InitialScreen from './screens/InitialScreen'
import Header from './components/Header'

function App() {
    return (
        <>
            <Header />
            <Container maxWidth="md" sx={appContainer}>
                <InitialScreen />
            </Container>
        </>
    )
}

const appContainer: CSSProperties = {
    display: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
}

export default App
