import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PokemonItem = ({ name, number }) => {
    const cardImageUrl = `https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_${number}-2x.png`;

    return (
        <View style={styles.itemContainer}>
            <Text style={styles.pokemonName}>{name}</Text>
            <Image source={{ uri: cardImageUrl }} style={styles.cardImage} />
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'column', // Changed to column to stack name on top of card
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        width: '100%',
        alignItems: 'center',
    },
    pokemonName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    cardImage: {
        width: 200,
        height: 300,
        borderRadius: 8,
    },
});

export default PokemonItem;
