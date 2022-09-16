import React, { useState } from 'react';
import { View, Modal, ModalProps, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons'
import { styles } from './styles';
import { THEME } from '../../theme';
import { CheckCircle } from 'phosphor-react-native';
import { Heading } from '../Heading';
import * as Clipboard from 'expo-clipboard';


interface Props extends ModalProps {
    discord: string;
    onClose: () => void;
}

export function DuoMatch({ discord, onClose, ...rest }: Props) {

    const [isCopping, setIsCopping] = useState(false);

    const handleCopyDiscordToClipboard = async () => {
        setIsCopping(true);
        await Clipboard.setStringAsync(discord);

        Alert.alert('Discord copiado!', 'Usuário copiado para você colar no Discord.')
        setIsCopping(false);
    }

    return (
        <Modal
            animationType='fade'
            transparent
            statusBarTranslucent
            {...rest}
        >
            <View style={styles.container}>

                <View style={styles.content}>
                    <TouchableOpacity
                        onPress={onClose}
                        style={styles.closeIcon}
                    >
                        <MaterialIcons
                            name="close"
                            color={THEME.COLORS.CAPTION_500}
                            size={20}
                        />
                    </TouchableOpacity>

                    <CheckCircle
                        size={64}
                        color={THEME.COLORS.SUCCESS}
                        weight={"bold"}
                    />


                    <Heading
                        title="Let's play!"
                        subtitle='Agora é só começar a jogar!'
                        style={{ alignItems: 'center', justifyContent: 'center' }}
                    />

                    <Text style={styles.label}>
                        Adicione no discord
                    </Text>

                    <TouchableOpacity
                        disabled={isCopping}
                        onPress={handleCopyDiscordToClipboard}
                        style={styles.discordButton}
                    >
                        <Text style={styles.discord}>
                            {isCopping ? <ActivityIndicator color={THEME.COLORS.PRIMARY} /> : discord}
                        </Text>
                    </TouchableOpacity>
                </View>



            </View>
        </Modal>
    );
}