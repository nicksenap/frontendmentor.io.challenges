import React, { useState } from "react";
import { createContext } from "react";
import { RootType, Comment, User } from "../interfaces/Types";
import data from "../data/data.json";

interface IAppContext {
  commentData: RootType;
  currentUser: User;
  showDeleteModal: boolean;
  deleteComment?: (id: number) => void;
  addComment?: (content: string) => void;
  addReply?: (
    content: string,
    replyingTo: number,
    rootCommentId: number
  ) => void;
}

const refinedData: RootType = data as RootType;

const defaultState: IAppContext = {
  commentData: refinedData,
  currentUser: refinedData.currentUser,
  deleteComment: function(id: number): void {
    throw new Error("Function not implemented.");
  },
  addComment: function(content: string): void {
    throw new Error("Function not implemented.");
  },
  showDeleteModal: false
};

export const AppContext = createContext<IAppContext>(defaultState);

const AppProvider: React.FC = ({ children }) => {
  const [commentData, setCommentData] = React.useState(
    defaultState.commentData
  );
  const [currentUser] = useState(commentData.currentUser);
  const [showDeleteModal, SetShowDeleteModal] = useState(false);

  const createComment = (content: string, replyTo?: string) => {
    return {
      id: Math.random(),
      content,
      createdAt: Date.now(),
      replies: [],
      score: 0,
      user: { ...currentUser },
      replyTo: replyTo ? replyTo : null
    } as Comment;
  };

  const deleteComment = (id: number) => {
    const newCommentData = commentData.comments.filter(
      (comment: Comment) => comment.id !== id
    );
    setCommentData({ ...commentData, comments: newCommentData });
  };

  const addComment = (content: string) => {
    const newComment = createComment(content);
    setCommentData({
      ...commentData,
      comments: [...commentData.comments, newComment]
    });
  };

  const addReply = (
    content: string,
    rootCommentId: number,
    replyTo: string
  ) => {
    const newReply = createComment(content, replyTo);
    const rootComment = commentData.comments.find(
      com => com.id === rootCommentId
    );
    if (rootComment) {
      if (rootComment.replies) {
        rootComment.replies.push(newReply);
      } else {
        rootComment.replies = [newReply];
      }
    }
    setCommentData({
      ...commentData,
      comments: [
        rootComment!,
        ...commentData.comments.filter(com => com.id !== rootCommentId)
      ]
    });
  };
  return (
    <AppContext.Provider
      value={{
        commentData,
        currentUser,
        deleteComment,
        addComment,
        showDeleteModal
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
