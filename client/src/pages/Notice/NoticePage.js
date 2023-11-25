import { useState } from "react";
import {
  BtnWrapper,
  Container,
  ExpandBtn,
  HorizontalLine,
  NoticeAuthor,
  NoticeDate,
  NoticeLink,
  NoticeMeta,
  NoticeViews,
  Option,
  Select,
  SelectAndBtnWrapper,
  SelectOptionWrapper,
  Seperation,
  Title,
  Btn,
} from "./styled";

const NoticePage = () => {
  const noticeList = [
    {
      id: 1,
      title: "첫 번째 공지사항",
      date: "2023-07-01",
      author: "작성자1",
      views: 10,
      content: "첫 번째 공지사항의 내용입니다.",
    },
    {
      id: 2,
      title: "두 번째 공지사항",
      date: "2023-07-02",
      author: "작성자2",
      views: 15,
      content: "두 번째 공지사항의 내용입니다.",
    },
    {
      id: 3,
      title: "세 번째 공지사항",
      date: "2023-07-03",
      author: "작성자3",
      views: 12,

      content: "세 번째 공지사항의 내용입니다.",
    },
    {
      id: 4,
      title: "네 번째 공지사항",
      date: "2023-07-04",
      author: "작성자4",
      views: 8,
      content: "네 번째 공지사항의 내용입니다.",
    },
    {
      id: 5,
      title: "다섯 번째 공지사항",
      date: "2023-07-05",
      author: "작성자5",
      views: 14,
      content: "다섯 번째 공지사항의 내용입니다.",
    },
    {
      id: 6,
      title: "여섯 번째 공지사항",
      date: "2023-07-06",
      author: "작성자6",
      views: 9,
      content: "여섯 번째 공지사항의 내용입니다.",
    },
    {
      id: 7,
      title: "일곱 번째 공지사항",
      date: "2023-07-07",
      author: "작성자7",
      views: 11,
      content: "일곱 번째 공지사항의 내용입니다.",
    },
    {
      id: 8,
      title: "여덟 번째 공지사항",
      date: "2023-07-08",
      author: "작성자8",
      views: 7,
      content: "여덟 번째 공지사항의 내용입니다.",
    },
    {
      id: 9,
      title: "아홉 번째 공지사항",
      date: "2023-07-09",
      author: "작성자9",
      views: 13,
      content: "아홉 번째 공지사항의 내용입니다.",
    },
    {
      id: 10,
      title: "열 번째 공지사항",
      date: "2023-07-10",
      author: "작성자10",
      views: 6,
      content: "열 번째 공지사항의 내용입니다.",
    },
  ];

  return (
    <>
      <Title>공지 사항</Title>
      <SelectAndBtnWrapper>
        <SelectOptionWrapper>
          <Select>
            <Option>년도 선택</Option>
            <Option>2023</Option>
          </Select>
          <Select>
            <Option>전체 공지</Option>
            <Option>팀 공지</Option>
            <Option>감독 공지</Option>
            <Option>회계 공지</Option>
          </Select>
        </SelectOptionWrapper>
        <Btn>글쓰기</Btn>
      </SelectAndBtnWrapper>
      <HorizontalLine />
      <Container>
        {noticeList.map((notice) => (
          <NoticeLink key={notice.id} to={`/notice/${notice.id}`}>
            {notice.title}
            <NoticeMeta>
              <NoticeDate>{notice.date}</NoticeDate>
              <Seperation>|</Seperation>
              <NoticeAuthor>{notice.author}</NoticeAuthor>
              <Seperation>|</Seperation>
              <NoticeViews>{notice.views}</NoticeViews>
            </NoticeMeta>
          </NoticeLink>
        ))}
        <BtnWrapper>
          <ExpandBtn>더보기</ExpandBtn>
        </BtnWrapper>
      </Container>
    </>
  );
};

export default NoticePage;
