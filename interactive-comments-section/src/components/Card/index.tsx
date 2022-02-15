import React, { useState, useContext } from "react";
import { Comment } from "../../interfaces/Types";
import { Pile } from "../Pile";
import DeleteEditReply from "../DeleteEditReply";
import { AppContext } from "../../context/AppContext";

export const Card: React.FC<Comment> = props => {
  const [score, setScore] = useState(props.score);
  const { currentUser } = useContext(AppContext);
  const updateScore = (value: number) => {
    setScore(score + value);
  };
  const isCurrentUser = currentUser.username === props.user.username;
  return (
    <div className="card">
      <div className="card-row">
        <Pile score={score} updateScore={updateScore} />
        <div className="card-body">
          <div className="card-author-row">
            <div className="card-author-date-wrapper">
              <div className="card-author-date">
                <img
                  src="https://i.ibb.co/BZqhB8m/image-amyrobson.png"
                  alt="author"
                  className="card-author-image"
                />
                <div className="card-author">
                  {props.user.username}
                  {isCurrentUser && <span className="you-tag">You</span>}
                </div>
                <div className="card-date">
                  {props.createdAt}
                </div>
              </div>
              <DeleteEditReply isOwnComment={isCurrentUser} />
            </div>
            <div className="card-reply-and-delete" />
          </div>
          <div className="card-content">
            {props.replyingTo &&
              <div className="card-content__replyingTo">
                @{props.replyingTo}
              </div>}
            {props.content}
          </div>
        </div>
      </div>
    </div>
  );
};
