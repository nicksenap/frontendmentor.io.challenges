import React, { createContext, ReactNode, useReducer } from 'react'

interface CountContextProps {}

type Action = { type: 'increment' } | { type: 'decrement' }

type Dispatch = (action: Action) => void

type State = { score: number }

type CountProviderProps = { children: ReactNode }

const CountContext = createContext<CountContextProps | undefined>(undefined)

function countReducer(state: State, action: Action) {
    switch (action.type) {
        case 'increment': {
            return { count: state.score + 1 }
        }
        case 'decrement': {
            return { count: state.score - 1 }
        }

        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

function CountProvider({ children }: CountProviderProps) {
    const [state, dispatch] = useReducer(countReducer, { count: 0 })

    // NOTE: you *might* need to memoize this value

    // Learn more in http://kcd.im/optimize-context

    const value = { state, dispatch }

    return (
        <CountContext.Provider value={value}>{children}</CountContext.Provider>
    )
}
