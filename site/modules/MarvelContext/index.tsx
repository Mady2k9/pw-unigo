import { createContext, FC, ReactNode, useCallback, useContext, useMemo, useReducer } from 'react'

interface state {
    completedStepTill: number
}
const initialState = {
    completedStepTill: 0
}
export const MarvelContext = createContext<state | any>(initialState)

export const useMarvelContext = () => {
    const context = useContext(MarvelContext)
    if (context === undefined) {
        throw new Error(`useUI must be used within a UIProvider`)
    }
    return context
}

type Action =
|   {
        type: 'UPDATE_STEPS_COMPLETION'
        value: number
    }
export const MarvelContextWrapper :FC<{children: ReactNode}>= ({ children, ...props }) => {
    const reducerFunc = (state: state, action: Action) => {
        switch(action.type) {
            case 'UPDATE_STEPS_COMPLETION': 
                return {
                    ...state,
                    completedStepTill: action.value
                }
        }
    }
    const [state, dispatch] = useReducer(reducerFunc, initialState)

    const updateCompletedSteps = useCallback((step: number) => {
        dispatch({
            type: 'UPDATE_STEPS_COMPLETION',
            value: step
        })
    }, [dispatch])

    const value = useMemo(() => {
        return {
            ...state,
            updateCompletedSteps
        }
    }, [
        state,
        updateCompletedSteps
    ])
    return (
        <MarvelContext.Provider value={value} {...props}>
            {children}
        </MarvelContext.Provider>
    )
}