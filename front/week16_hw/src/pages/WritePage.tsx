import React from "react";
import Button from "../components/Button";
import CommentForm from "../components/CommentForm";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const WritePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = Boolean(id);
  const [author, setAuthor] = useState("");
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(isEdit);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const baseURL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    if (!isEdit) return;

    setIsLoading(true);
    axios
      .get(`${baseURL}/entries/${id}/`)
      .then((res) => {
        setAuthor(res.data.author);
        setComment(res.data.comment);
      })
      .catch((err) => {
        console.log(err);
        alert("게시글을 불러오지 못했습니다.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id, isEdit, baseURL]);

  const postComment = () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    const request = isEdit
      ? axios.put(`${baseURL}/entries/${id}/`, { author, comment })
      : axios.post(`${baseURL}/entries/`, { author, comment });

    request
      .then(() => {
        alert(
          isEdit
            ? "게시글 수정이 완료되었어요 !!"
            : "게시글 작성이 완료되었어요 !!",
        );
        navigate(-1);
      })
      .catch((err) => {
        console.log(err);
        alert(
          isEdit
            ? "게시글 수정에 실패했어요 .. ㅠ"
            : "게시글 작성에 실패했어요 .. ㅠ",
        );
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  if (isLoading) {
    return <WritePageWrapper>불러오는 중...</WritePageWrapper>;
  }

  return (
    <WritePageWrapper>
      <CommentForm
        author={author}
        comment={comment}
        setAuthor={setAuthor}
        setComment={setComment}
      />
      <ButtonWrapper>
        <Button
          text={isEdit ? "수정하기" : "작성하기"}
          onBtnClick={postComment}
        />
        <Button text="취소" onBtnClick={() => navigate(-1)} />
      </ButtonWrapper>
    </WritePageWrapper>
  );
};

export default WritePage;

const WritePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2.25rem 4.2rem 3.88rem;
  background-color: var(--bg-light);
  gap: 2rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.75rem;
`;
