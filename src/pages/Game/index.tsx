import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons'
import { styles } from './styles';
import { Background } from './../../components/Background/index';
import { useNavigation, useRoute } from '@react-navigation/native';
import { GameParams } from './../../@types/navigation.d';
import { THEME } from './../../theme/index';


import logoImg from '../../assets/logo-nlw-esports.png';
import { Heading } from './../../components/Heading/index';
import { DuoCard, DuoCardProps } from '../../components/DuoCard';
import { DuoMatch } from '../../components/DuoMatch';
import { useEffect, useState } from 'react';

export function Game() {

    const [duos, setDuos] = useState<DuoCardProps[]>([]);
    const [discordDuoSelected, setDiscordDuoSelected] = useState('');

    const navigation = useNavigation();
    const route = useRoute();

    const game = route.params as GameParams;

    const handleGoBack = () => {
        navigation.goBack();
    }

    useEffect(() => {
        if (game.title === "Minecraft") {
            setDuos([{
                id: "1",
                name: 'ImFelippe365',
                hoursStart: '12:00',
                hoursEnd: '18:00',
                useVoiceChannel: true,
                weekDays: [0, 6],
                yearsPlaying: 8
            }])
        }
    }, [])

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={handleGoBack}>
                        <Entypo
                            name='chevron-thin-left'
                            color={THEME.COLORS.CAPTION_300}
                            size={20}
                        />
                    </TouchableOpacity>

                    <Image
                        source={logoImg}
                        style={styles.logo}
                    />

                    <View style={styles.right} />
                </View>

                <Image
                    source={{ uri: game.bannerUrl }}
                    style={styles.cover}
                    resizeMode='cover'
                />

                <Heading
                    title={game.title}
                    subtitle={"Conecte-se e comece a jogar!"}
                />

                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.containerList}
                    contentContainerStyle={duos.length === 0 ? styles.emptyListContent : styles.contentList}
                    keyExtractor={item => item.id}
                    data={duos}
                    renderItem={({ item }) =>
                        <DuoCard
                            data={item}
                            onConnect={() => setDiscordDuoSelected('ImFelippe365#2814')}
                        />
                    }
                    ListEmptyComponent={() =>
                        <Text style={styles.emptyListText}>
                            Não há anúncios publicados ainda.
                        </Text>
                    }
                />

                <DuoMatch
                    visible={discordDuoSelected.length > 0}
                    onClose={() => setDiscordDuoSelected('')}
                    discord={discordDuoSelected}
                />

            </SafeAreaView>
        </Background>
    );
}