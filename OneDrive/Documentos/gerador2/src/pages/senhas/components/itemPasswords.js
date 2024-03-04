import React, { useState } from 'react';
import { Text, StyleSheet, Pressable, Alert, Modal } from 'react-native';
import * as Clipboard from 'expo-clipboard';

const Container = ({ children, onPress, onLongPress }) => (
    <Pressable style={styles.container} onLongPress={onLongPress} onPress={onPress}>
        {children}
    </Pressable>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
        borderRadius: 8,
        height: '10%',
        padding: 6,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    password: {
        color: '#000',
        fontSize: 35,
        padding: 4,
    },
});

export function ItemPasswords({ data, removePassword }) {
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleLongPress = () => {
        Alert.alert(
            'Apagar senha',
            'Tem certeza que deseja apagar esta senha?',
            [
                {
                    text: 'Cancelar',
                    onPress: () => console.log('Cancelado'),
                    style: 'cancel'
                },
                {
                    text: 'Apagar',
                    onPress: () => removePassword(data),
                    style: 'destructive'
                }
            ],
            { cancelable: false }
        );
    };

    const handlePress = () => {
        Clipboard.setString(data);
        Alert.alert('Senha copiada!', 'Pronta para colar...');
    };

    return (
        <Container onLongPress={handleLongPress} onPress={handlePress}>
            <Text style={styles.password}>{data}</Text>
        </Container>
    );
}
