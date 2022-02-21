import React, { useState, createContext } from 'react'
import rawdata from '../data/data.json'
import { RootType, Comment, CommentType, User } from '../interfaces/Types'

export const AppContext = createContext(null)

const AppContextProvider: React.FC = ({ children }) => {
    const data: RootType = rawdata as RootType
    const [refinedData, setRefinedData] = React.useState<RootType>(data)
    const [currentUser, setCurrentUser] = useState<string>('juliusomo')
    const deleteComment = (id: number, type: CommentType) => {
        const newJsonData = refinedData.comments.filter((comment: Comment) =>
            type === CommentType.Comment
                ? comment.id !== id
                : comment.replies
                ? comment.replies.filter((reply) => reply.id !== id)
                : true
        )
        setRefinedData({ ...refinedData, comments: newJsonData })
    }
    const addComment = (
        content: string,
        username: string,
        type: CommentType,
        rootCommentId?: number
    ) => {
        const newComment: Comment = {
            id: refinedData.comments.length + 1,
            user: { username } as User,
            content,
            replies: [],
            createdAt: 'seconds ago',
            score: 0,
        }
        if (type === CommentType.Comment) {
            setRefinedData({
                ...refinedData,
                comments: [...refinedData.comments, newComment],
            })
        } else {
            const rootComment = refinedData.comments.find(
                (com) => com.id === rootCommentId
            )
            if (rootComment && rootComment.replies) {
                rootComment.replies = [...rootComment.replies, newComment]
            }
        }
    }

    const editComment = (id: number, content: string, type: CommentType) => {
        const comment = refinedData.comments.find((com) => com.id === id)
        if (comment) {
            comment.content = content
        }
    }
    return <> {children} </>
}

export default AppContextProvider
