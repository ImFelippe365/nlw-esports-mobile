import { useEffect, useState } from 'react';
import { FlatList, Image, View } from 'react-native';

import { Heading } from '../../components/Heading';
import { GameCard, GameCardProps } from '../../components/GameCard';

import logoImg from '../../assets/logo-nlw-esports.png';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../components/Background';
import { useNavigation } from '@react-navigation/native';
import { games } from '../../utils/games';

export function Home() {

    const navigation = useNavigation();

    const handleOpenGame = (game: GameCardProps) => {
        navigation.navigate('game', game);
    }

    return (
        <Background>
            <SafeAreaView style={styles.container}>
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
                    data={games}
                    renderItem={({ item }) =>
                        <GameCard
                            data={item}
                            onPress={() => handleOpenGame(item)}
                        />
                    }
                />

            </SafeAreaView>
        </Background>
    );
}