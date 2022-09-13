import { FlatList, Image, View } from 'react-native';

import { styles } from './styles';

import logoImg from '../../assets/logo-nlw-esports.png';
import { Heading } from '../../components/Heading';
import { GameCard, GameCardProps } from '../../components/GameCard';
import { GAMES } from '../../utils/games';

export function Home() {
    return (
        <View style={styles.container}>
            <Image
                source={logoImg}
                style={styles.logo}
            />
            <Heading
                title="Encontre o seu duo!"
                subtitle="Selecione o game que deseja jogar..."
            />

            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.contentList}
                keyExtractor={item => item.id}
                data={GAMES}
                renderItem={({ item }) =>
                    <GameCard
                        data={{ ...item }}
                    />
                }
            />

        </View>
    );
}