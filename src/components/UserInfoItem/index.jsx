import PropTypes from 'prop-types';
import * as S from './style';
import Avatar from '../Avatar';

const UserInfoItem = ({
  rank,
  avatarImg,
  userName,
  coinCount = -1,
  TTaBongCount = -1,
}) => {
  return (
    <S.UserInfoItem>
      <S.ImageContainer>
        {rank && (
          <S.RankContainer rank={rank}>
            <S.Rank>{rank}</S.Rank>
          </S.RankContainer>
        )}
        <S.AvatarContainer>
          <Avatar src={avatarImg} size={40} />
        </S.AvatarContainer>
      </S.ImageContainer>
      <S.UserNameContainer>{userName}</S.UserNameContainer>
      <S.TotalCountContainer>
        {coinCount >= 0 && (
          <S.CountContainer>
            <S.CountTitle>총 코인수</S.CountTitle>
            <S.CountSpan>{coinCount}</S.CountSpan>
          </S.CountContainer>
        )}
        {TTaBongCount >= 0 && (
          <S.CountContainer>
            <S.CountTitle>총 따봉수</S.CountTitle>
            <S.CountSpan>{TTaBongCount}</S.CountSpan>
          </S.CountContainer>
        )}
      </S.TotalCountContainer>
    </S.UserInfoItem>
  );
};

UserInfoItem.propTypes = {
  rank: PropTypes.number,
  avatarImg: PropTypes.string,
  userName: PropTypes.string.isRequired,
  coinCount: PropTypes.number,
  TTaBongCount: PropTypes.number,
  // coinCount와 TTaBongCount 둘 중 하나 이상은 필수
};

export default UserInfoItem;
