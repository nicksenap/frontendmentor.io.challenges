import React from 'react'

interface DeletePopUpProps {
    isShowing: boolean
    dismiss: () => void
    deletePost: (id: number) => void
}

export const DeletePopUp: React.FC<DeletePopUpProps> = ({ isShowing }) => {
    if (isShowing) {
        return (
            <div className="delete-pop">
                <div className="delete-pop-up">
                    <div className="delete-pop-up__title"> Delete comment</div>
                    <div className="delete-pop-up__content">
                        Are you sure you want to delete this comment? This will
                        remove the comment and can't be undone.
                    </div>
                    <div className="btn-group">
                        <div className="btn grey center">No, Cancel</div>
                        <div className="btn red center">Yes, Delete </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return <div className=""></div>
    }
}
