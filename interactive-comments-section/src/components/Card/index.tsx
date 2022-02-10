import React, { useState } from 'react'
import { Comment } from '../../interfaces/Types'
import { Pile } from '../Pile'

export const Card: React.FC<Comment> = (props) => {
    const [score, setScore] = useState(props.score)
    const updateScore = (value: number) => {
        setScore(score + value)
    }
    return (
        <div className="card">
            <div className="card-row">
                <Pile score={score} updateScore={updateScore} />
                <div className="card-body">
                    <div className="card-author-row">
                    <div className="card-author-date">
                        <img
                            src="https://i.ibb.co/BZqhB8m/image-amyrobson.png"
                            alt="author"
                            className="card-author-image"
                        />
                        <div className="card-author">{props.user.username}</div>
                        <div className="card-date">{props.createdAt}</div>
                    </div>
                    <div className="card-reply-and-delete"></div>
                    </div>
                    <div className="card-content">
                        {props.replyingTo && (
                            <div className="card-content__replyingTo">
                                @{props.replyingTo}
                            </div>
                        )}
                        {props.content}
                    </div>
                </div>
            </div>
        </div>
    )
}
