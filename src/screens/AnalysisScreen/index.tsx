import { Button, Typography } from '@mui/material'
import { CSSProperties } from '@mui/styled-engine'
import { Box } from '@mui/system'

interface Props {
    text: string
}

const AnalysisScreen = ({ text }: Props) => {
    return (
        <Box sx={container}>
            <Box sx={textContainer}>
                <Typography variant="h5">{text}</Typography>
            </Box>
            <Box sx={buttonContainer}>
                <Button
                    sx={button}
                    onClick={() => window.location.reload()}
                    variant="contained"
                    size="large"
                >
                    Reload
                </Button>
            </Box>
        </Box>
    )
}

const container: CSSProperties = {
    margin: 'auto',
    width: '100%',
}
const textContainer: CSSProperties = {
    border: '1px solid #1976d2',
    height: '250px',
    borderRadius: '4px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
}
const buttonContainer: CSSProperties = {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '1rem',
}
const button: CSSProperties = {
    alignSelf: 'right',
}

export default AnalysisScreen
