import React from 'react';
import { View, Button, SectionList, StyleSheet } from 'react-native';
import PokemonItem from './PokemonItem';
import SectionHeader from './SectionHeader';
import pokemonData from './pokemonData';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
    const handleAddPokemon = () => {
        console.log('Add Pokemon button clicked');
    };

    return (
        <View style={styles.container}>
            <Button title="Add Pokemon" onPress={handleAddPokemon} style={styles.addButton} />
            <SectionList
                sections={pokemonData}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => <PokemonItem name={item.name} number={item.number} />}
                renderSectionHeader={({ section }) => (
                    <SectionHeader
                        title={section.title}
                        icon={section.icon}
                        color={section.color}
                    />
                )}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        paddingTop: 40,
    },
    addButton: {
        marginBottom: 10,
    },
    listContainer: {
        paddingHorizontal: 10,
    },
});

export default App;
