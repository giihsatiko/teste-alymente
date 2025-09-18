import { AvatarLoading } from '../avatar-loading/avatar-loading';
import * as S from './avatar.styles';
import { AvatarProps } from './types';

export const Avatar = ({ isLoading, src }: AvatarProps) => {
  return (
    <S.AvatarWrapper>
      {isLoading ? <AvatarLoading /> : <S.Avatar src={src} />}
    </S.AvatarWrapper>
  );
};
