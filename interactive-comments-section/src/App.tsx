import React from 'react'
import './App.css'
import { CardContainer } from './components/CardContainer'
import { DeletePopUp } from './components/DeletePopUp'
import data from './data/data.json'
import { RootType, Comment } from './interfaces/Types'

function App() {
    const refinedData: RootType = data as RootType
    const [jsonData, setJsonData] = React.useState(refinedData)
    const [isShowing, setIsShowing] = React.useState(false)
    const dismiss = () => setIsShowing(false)
    const deletePost = (id: number) => {
        const newJsonData = jsonData.comments.filter(
            (post: Comment) => post.id !== id
        )
        setJsonData({ ...jsonData, comments: newJsonData })
        dismiss()
    }
    return (
        <div className="App">
            <DeletePopUp
                isShowing={isShowing}
                dismiss={dismiss}
                deletePost={deletePost}
            />
            {refinedData.comments.map((card: any) => {
                return <CardContainer {...card} />
            })}
        </div>
    )
}

export default App
