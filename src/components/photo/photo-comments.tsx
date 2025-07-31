"use client";
import React from "react";
import PhotoCommentsForm from "@/components/photo/photo-comments-form";
import styles from "@/components/photo/photo-comments.module.css";
import { useUser } from "@/context/user-context";
import { Comment } from "@/actions/photo-get";

const PhotoComments = (props: {
  single: boolean;
  id: number;
  comments: Comment[];
}) => {
  const [comments, setComments] = React.useState(() => props.comments);
  const data = useUser();
  const commentSection = React.useRef<HTMLUListElement>(null);

  React.useEffect(() => {
    if (commentSection.current) {
      commentSection.current.scrollTop = commentSection.current.scrollHeight;
    }
  }, [comments]);

  return (
    <>
      <ul
        ref={commentSection}
        className={`${styles.comments} ${props.single ? styles.single : ""}`}
      >
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}:</b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>

      {data && (
        <PhotoCommentsForm
          single={props.single}
          id={props.id}
          setComments={setComments}
        />
      )}
    </>
  );
};

export default PhotoComments;
