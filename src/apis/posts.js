import axios from 'axios';
import Proptypes from 'prop-types';

const END_POINT = '/posts';

// 특정 채널의 포스트 목록을 불러옵니다.
// 프로그래머스 스쿨 API 문서와 다른 점: channels => channel (projects 슬랙 참조)
export const getChannelPosts = async (channelId, offset = 0, limit = 10) => {
  try {
    const channelPosts = await axios.get(
      `${END_POINT}/channel/${channelId}?offset=${offset}&limit=${limit}`,
    );

    if (channelPosts.statusText === 'OK') {
      return channelPosts;
    }

    throw new Error(channelPosts);
  } catch (e) {
    console.error(e);
  }

  return null;
};

getChannelPosts.propTypes = {
  channelId: Proptypes.string.isRequired,
  offset: Proptypes.number,
  limit: Proptypes.number,
};

// 특정 사용자의 포스트 목록을 불러옵니다.
export const getAuthorPosts = async (authorId, offset = 0, limit = 10) => {
  try {
    const authorPosts = await axios.get(
      `${END_POINT}/author/${authorId}?offset=${offset}&limit=${limit}`,
    );

    if (authorPosts.statusText === 'OK') {
      return authorPosts;
    }

    throw new Error(authorPosts);
  } catch (e) {
    console.error(e);
  }

  return null;
};

getAuthorPosts.propTypes = {
  authorId: Proptypes.string.isRequired,
  offset: Proptypes.number,
  limit: Proptypes.number,
};

// 특정 채널에 포스트를 작성합니다.
export const createPost = async (
  JWTtoken,
  channelId,
  title = '',
  image = null,
) => {
  try {
    const newPost = await axios.post(
      `${END_POINT}/create`,
      { channelId, title, image },
      {
        headers: {
          Authorization: `bearer ${JWTtoken}`,
        },
      },
    );

    if (newPost.statusText === 'OK') {
      return newPost;
    }

    throw new Error(newPost);
  } catch (e) {
    console.error(e);
  }
  return null;
};

createPost.propTypes = {
  JWTtoken: Proptypes.string.isRequired,
  channelId: Proptypes.string.isRequired,
  title: Proptypes.string,
  // image : Binary 형식
};

// api 명세서에는 post method라고 되어있는데 사실 get을 해야 되네요!
// ^^
// 특정 포스트의 정보를 불러옵니다. !의문점: 불러오는 건데 왜 post일까? 불러오는 거라 네이밍을 get으로함
export const getSpecificPost = async (postId) => {
  try {
    const specificPost = await axios.get(`${END_POINT}/${postId}`);

    if (specificPost.statusText === 'OK') {
      return specificPost;
    }
  } catch (e) {
    console.error(e);
  }
  return null;
};

getSpecificPost.propTypes = {
  postId: Proptypes.string.isRequired,
};

// 내가 작성한 포스트를 수정합니다.
export const putPost = async (
  JWTtoken,
  postId,
  channelId,
  title = '',
  image = null,
  imagePublicId = '',
) => {
  try {
    const res = await axios.put(
      `${END_POINT}/update`,
      {
        postId,
        channelId,
        title,
        image,
        imageToDeletePublicId: imagePublicId, // 이미지 삭제
      },
      {
        headers: {
          Authorization: `bearer ${JWTtoken}`,
        },
      },
    );

    if (res.status === 200) {
      return res;
    }

    throw new Error(res);
  } catch (e) {
    console.error(e);
  }

  return null;
};

putPost.propTypes = {
  JWTtoken: Proptypes.string.isRequired,
  postId: Proptypes.string.isRequired,
  channelId: Proptypes.string.isRequired,
  title: Proptypes.string,
  // image : Binary 어떻게?
  imagePublicId: Proptypes.string,
};

// 내가 작성한 포스트를 삭제합니다.
export const deletePost = async (JWTtoken, id) => {
  try {
    const res = await axios.delete(`${END_POINT}/delete`, {
      headers: {
        Authorization: `bearer ${JWTtoken}`,
      },
      data: {
        id,
      },
    });

    if (res.status === 200) {
      return res;
    }

    throw new Error(res);
  } catch (e) {
    console.error(e);
  }

  return null;
};

deletePost.propTypes = {
  JWTtoken: Proptypes.string.isRequired,
  id: Proptypes.string.isRequired,
};