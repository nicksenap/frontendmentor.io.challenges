import React from 'react'
import { ReactComponent as IconDelete } from '../../assets/images/icon-delete.svg'
import { ReactComponent as IconReply } from '../../assets/images/icon-reply.svg'
import { ReactComponent as IconEdit } from '../../assets/images/icon-edit.svg'

interface CardReplyDeleteProps {
    isShowingDelete: boolean
    commentId: number
    handleReply: (id: number) => void
    handleDelete: (id: number) => void
    handleEdit: (id: number) => void
}

export const CardReplyDelete: React.FC<CardReplyDeleteProps> = ({
    isShowingDelete,
    handleDelete,
    handleEdit,
    handleReply,
    commentId,
}) => {
    return (
        <div className="card-reply-delete">
            {isShowingDelete && (
                <div
                    className="card-delete"
                    onClick={() => handleDelete(commentId)}
                >
                    <IconDelete /> Delete
                </div>
            )}
            {isShowingDelete ? (
                <div
                    className="card-edit"
                    onClick={() => handleEdit(commentId)}
                >
                    <IconEdit /> Edit
                </div>
            ) : (
                <div
                    className="card-reply-button"
                    onClick={() => handleReply(commentId)}
                >
                    <IconReply /> Reply
                </div>
            )}
        </div>
    )
}
