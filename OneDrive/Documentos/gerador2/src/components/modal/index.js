import React from 'react';
import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import useStorage from '../../hooks/useStorage';

export function ModalPassword({ password, handleClose }) {
    const { saveItem } = useStorage();

    async function handleCopyPassword() {
        await Clipboard.setStringAsync(password);
        await saveItem('@pass', password);

        alert("Senha salva");

        handleClose();
    }
    async function handleSavePassword() {
        await saveItem('@pass', password);
        alert("Senha salva");
        handleClose();
    }
    


    return (
        <View style={styles.container}>
            <View style={styles.modal}>
                <Text style={styles.title}>Senha Gerada</Text>
                <Text style={styles.title2}>Pressione e segure para copiar</Text>
                <Pressable style={styles.containerPassword} onLongPress={handleCopyPassword}>
                    <Text style={styles.password}>{password}</Text>
                </Pressable>

                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.voltar} onPress={handleClose}>
                        <Text style={styles.textButton}>Voltar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.salvar} onPress={handleSavePassword}>
                        <Text style={styles.textButtonSave}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    modal: {
        backgroundColor: '#025951',
        width: '90%',
        height: 'auto',
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'auto',
    },
    title: {
        fontSize: 32,
        textAlign: 'center',
        marginTop: 30,
        marginBottom: 25,
        fontFamily: 'monospace',
        fontWeight: 'bold',
        color: '#fff',
    },
    title2: {
        fontSize: 20,
        textAlign: 'center',
        margin: 2,
        marginBottom: 35,
        color: '#fff',
    },
    containerPassword: {
        backgroundColor: '#000000',
        width: 'auto',
        height: 'auto',
        borderRadius: 8,
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    password: {
        color: '#FFFFFF',
        fontSize: 28,
        padding: 2,
        textAlign: 'center',
        fontFamily: 'monospace',
    },
    buttonArea: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    voltar: {
        backgroundColor: '#4C5958',
        width: 'auto',
        height: 'auto',
        margin: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    salvar: {
        width: 'auto',
        height: 'auto',
        backgroundColor: '#107361',
        marginRight: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButtonSave: {
        fontSize: 28,
        color: '#fff',
        padding: 8,
        fontWeight: 'bold',
    },
    textButton: {
        fontSize: 28,
        color: '#fff',
        padding: 8,
    },
});