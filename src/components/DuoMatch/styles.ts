import { StyleSheet } from 'react-native';
import { THEME } from './../../theme/index';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: THEME.COLORS.OVERLAY
    },

    content: {
        backgroundColor: THEME.COLORS.SHAPE,
        width: 311,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },

    discordButton: {
        width: 231,
        height: 48,
        backgroundColor: THEME.COLORS.BACKGROUND_900,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 4,
        marginBottom: 32,
    },

    discord: {
        color: THEME.COLORS.TEXT,
        fontSize: THEME.FONT_SIZE.MD,
        fontFamily: THEME.FONT_FAMILY.REGULAR
    },

    closeIcon: {
        alignSelf: 'flex-end',
        margin: 16,
    },

    label: {
        color: THEME.COLORS.TEXT,
        fontSize: THEME.FONT_SIZE.MD,
        fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
        marginTop: 24,
        marginBottom: 8
    }

});