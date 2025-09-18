import LottieView from 'lottie-react-native';
import { useTheme } from 'styled-components/native';

export const AvatarLoading = () => {
  const theme = useTheme();
  
  return (
    <LottieView
      source={require('./avatar-loading.json')}
      autoPlay
      loop
      style={{ width: theme.sizes.spacing.XL, height: theme.sizes.spacing.XL }}
         colorFilters={[
        {
          keypath: '*',
          color: theme.palette.text.primary,
        },
      ]}
    />
  );
};
