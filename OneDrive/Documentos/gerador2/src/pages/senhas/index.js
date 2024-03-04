import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, TouchableWithoutFeedback } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { FlatList } from 'react-native';
import useStorage from '../../hooks/useStorage';
import { LinearGradient } from 'expo-linear-gradient';


import { ItemPasswords } from './components/itemPasswords';

export function Senhas() {
    const [listPasswords, setListPasswords] = useState([]);

    const focused = useIsFocused();

    const { getItem, removeItem, clearStorage } = useStorage();

    useEffect(() => {
        async function loadPasswords() {
            const passwords = await getItem('@pass');
            setListPasswords(passwords);
        }
        loadPasswords();
    }, [focused]);

    async function handleDelete(item) {
        const passwords = await removeItem("@pass", item);
        setListPasswords(passwords);
    }

    async function handleDeleteAll() {
        await clearStorage();
        setListPasswords([]);
    }



    return (
        <LinearGradient
            colors={['#034159', '#025951']}
            style={styles.container}
        >
            <View style={{ flex: 1 }}>
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>Minhas senhas</Text>
                </View>
                <Text style={{ fontSize: 18, marginTop: 8, color: '#fff', textAlign: 'center' }}>Segure apagar</Text>
                <Text style={{ fontSize: 18, marginTop: 8, color: '#fff', textAlign: 'center' }}>Clique para copiar</Text>
                <View style={styles.containerPass}>
                    <FlatList
                        style={{ flex: 1, margin: 14 }}
                        data={listPasswords}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => (
                            <TouchableWithoutFeedback onLongPress={() => handleLongPress(item)}>

                                <ItemPasswords data={item} removePassword={() => handleDelete(item)} />

                            </TouchableWithoutFeedback>

                        )}
                    />


                </View>
                <TouchableOpacity style={styles.deleteAllButton} onPress={handleDeleteAll}>
                    <Text style={styles.deleteAllButtonText}>Apagar Todas as Senhas</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        textAlign: 'center',
    },
    containerTitle: {
        backgroundColor: '#fff',
        width: '100%',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        height: '10%',
        marginTop: 60,
        marginLeft: 8,
    },
    title: {
        fontSize: 30,
        padding: 8,
        textAlign: 'center',
        color: '#034159',
    },
    containerPass: {
        flex: 1,
        width: '95%',
        marginTop: 20,
        padding: 14,
    },
    deleteAllButton: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 8,
        marginTop: 20,
        marginBottom: 20,
    },
    deleteAllButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        backgroundColor: '#fff',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    addDescriptionContainer: {
        marginTop: 10,
    },
    addButton: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 8,
    },
    addButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
    },
});
