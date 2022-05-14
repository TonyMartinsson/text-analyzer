import React, { useState } from 'react'
import {
    Box,
    Button,
    CircularProgress,
    TextField,
    Typography,
} from '@mui/material'
import { analyzeText } from '../../analysis'
import AnalysisScreen from '../AnalysisScreen'
import { CSSProperties } from '@mui/styled-engine'

const InitialScreen = () => {
    // Hooks
    const [stateUserInput, setStateUserInput] = useState<string>('')
    const [numberOfWords, setNumberOfWords] = useState<number>()
    const [numberOfLetters, setNumberOfLetters] = useState<number>()
    const [isClicked, setIsClicked] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    // Functions
    const handleSubmit = () => {
        setIsLoading(true)
        analyzeText(stateUserInput).then((stateUserInput) => {
            setNumberOfWords(stateUserInput.numWords)
            setNumberOfLetters(stateUserInput.numLetters)
            setIsClicked(true)
            setIsLoading(false)
        })
    }

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const userInput = event.target.value
        setStateUserInput(userInput)
    }

    // Variables
    const analyzedText = `Your text consists of ${numberOfWords} words (${numberOfLetters} letters)`
    const submitButton = isLoading ? (
        <CircularProgress size={30} />
    ) : (
        'Process Text'
    )

    return (
        <>
            {!isClicked ? (
                <Box sx={container}>
                    <Typography variant="h6" marginBottom={1}>
                        Enter text here:
                    </Typography>
                    <TextField
                        fullWidth
                        multiline
                        autoFocus
                        maxRows={10}
                        minRows={10}
                        type="text"
                        disabled={isLoading}
                        onChange={handleOnChange}
                    >
                        {stateUserInput}
                    </TextField>
                    <Box sx={buttonContainer}>
                        <Button
                            sx={button}
                            onClick={handleSubmit}
                            variant="contained"
                            disabled={isLoading}
                            size="large"
                        >
                            {submitButton}
                        </Button>
                    </Box>
                </Box>
            ) : (
                <AnalysisScreen text={analyzedText} />
            )}
        </>
    )
}

const container: CSSProperties = {
    width: '100%',
}
const buttonContainer: CSSProperties = {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '1rem',
}
const button: CSSProperties = {
    alignSelf: 'right',
}

export default InitialScreen
