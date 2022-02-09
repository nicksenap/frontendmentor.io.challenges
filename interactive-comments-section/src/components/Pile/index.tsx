import React from 'react'
import { ReactComponent as IconPlus } from '../../assets/images/icon-plus.svg'
import { ReactComponent as IconMinus } from '../../assets/images/icon-minus.svg'

interface PileProps {
    score: number
    updateScore: (value: number) => void
}

export const Pile: React.FC<PileProps> = (props) => {
    return (
        <div className="pile">
            <IconPlus onClick={() => props.updateScore(1)} />
            <div className="">{props.score}</div>
            <IconMinus onClick={() => props.updateScore(-1)} />
        </div>
    )
}
