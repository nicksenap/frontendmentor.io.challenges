import React from 'react'
import { Card } from '../Card'
import { Comment } from '../../interfaces/Types'

export const CardContainer = (props: Comment) => {
    return (
        <div className="">
            <Card {...props} />
            <div className="">
                <div className="card-reply">
                    {props.replies &&
                        props.replies.map((reply: Comment) => {
                            return <Card {...reply} />
                        })}
                </div>
            </div>
        </div>
    )
}
