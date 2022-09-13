import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import { styles } from './styles';
import { THEME } from './../../theme/index';

export function Loading() {
    return (
        <View style={styles.container}>
            <ActivityIndicator
                color={THEME.COLORS.PRIMARY}
                size={'large'}
            />
        </View>
    );
}