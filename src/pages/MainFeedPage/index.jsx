import React, { useState, useEffect } from 'react';
import * as S from './style';
import PageTemplate from '../../feature/pageTemplate/PageTemplate';
import Banner from '../../feature/pageTemplate/Banner';
import MainCard from '../../feature/Cards/MainCard';

import DummyData from '../../assets/data/dummyData';
import { useScrollDown } from '../../hooks/useScrollDown';

const MainFeedPage = () => {
  const { Posts, Users } = DummyData;
  const [posts, setPosts] = useState([]);

  const [ref, isScrollDown] = useScrollDown();

  // 후에 axios를 통해 Channel을 거쳐 post를 받아오는 작업 필요.
  useEffect(() => {
    setPosts(Posts);
  }, []);

  return (
    <PageTemplate page="mainFeed">
      <S.MainFeedPageContainer
        ref={ref}
        className={!isScrollDown ? 'bannerShown' : null}
      >
        <Banner isScrollDown={isScrollDown} />
        {posts.map((post) => {
          const { likes, comments, title, author } = post;
          const { type, receiver, content } = JSON.parse(title);
          const { fullName } = author;

          const receiverName = Users.map((user) => {
            return user._id === receiver ? user.fullName : null;
          });

          return (
            <S.MainCardWrapper>
              <MainCard
                authorName={fullName}
                receiverName={receiverName}
                commenCount={comments.length}
                likeCount={likes.length}
                likeReason={content}
                // 라벨 타입은 일단 임시로 하드코딩 해 두었습니다...!!
                labelTypes={['warm', 'moved', 'praise']}
              />
            </S.MainCardWrapper>
          );
        })}
      </S.MainFeedPageContainer>
    </PageTemplate>
  );
};

export default MainFeedPage;
