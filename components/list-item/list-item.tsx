import { TouchableOpacity, View } from 'react-native';
import * as S from './list-item.styles';
import { ListItemProps } from './types';

export const ListItem = ({children, onPress}: ListItemProps) => {
    return (
        <S.Item as={onPress ? TouchableOpacity : undefined} onPress={onPress}>
            <View>
                {children}
            </View>
        </S.Item>
    )
}