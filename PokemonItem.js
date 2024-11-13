import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PokemonItem = ({ name, number }) => {
    const cardImageUrl = `https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_${number}-2x.png`;

    return (
        <View style={styles.itemContainer}>
            <View style={styles.nameBox}>
                <Text style={styles.pokemonName}>{name}</Text>
            </View>

            <View style={styles.imageBox}>
                <Image source={{ uri: cardImageUrl }} style={styles.cardImage} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
    },
    nameBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginRight: 5,
    },
    imageBox: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    pokemonName: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    cardImage: {
        width: 150,
        height: 225,
        borderRadius: 8,
    },
});

export default PokemonItem;
