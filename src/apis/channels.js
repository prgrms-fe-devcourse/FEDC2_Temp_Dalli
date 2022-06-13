import axios from 'axios';
import Proptypes from 'prop-types';

// 채널 목록을 불러옵니다
export const getAllChannels = async () => {
  try {
    const channels = await axios.get(`/channels`);

    if (channels.status === 200) {
      return channels;
    }

    throw new Error(channels);
  } catch (e) {
    console.error(e);
  }

  return null;
};

// 특정 채널 정보를 불러옵니다.
export const getSpecificChannel = async (channelName) => {
  try {
    const specificChannel = await axios.get(`/channels/${channelName}`);

    if (specificChannel.status === 200) {
      return specificChannel;
    }
  } catch (e) {
    console.error(e);
  }
  return null;
};

getSpecificChannel.propTypes = {
  channelName: Proptypes.string.isRequired,
};