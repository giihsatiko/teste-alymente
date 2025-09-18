import { FontAwesome } from '@expo/vector-icons';

export type LinkButtonProps = {
  label: string;
  url: string;
  params?: any;
  iconName?: keyof typeof FontAwesome.glyphMap;
  shouldDecode?: boolean;
};
