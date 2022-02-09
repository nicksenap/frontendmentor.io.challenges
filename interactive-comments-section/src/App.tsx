import React from 'react'
import './App.css'
import { Card } from './components/Card'
import data from './data/data.json'
import { RootType } from './interfaces/Types'

function App() {
    const refinedData: RootType = data as RootType
    return (
        <div className="App">
            {refinedData.comments.map((card: any) => {
                return <Card {...card} />
            })}
        </div>
    )
}

export default App
