import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Animated, Modal } from 'react-native';
import Slider from '@react-native-community/slider';
import { LinearGradient } from 'expo-linear-gradient';
import { ModalPassword } from '../../components/modal';

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const MySlider = () => {
    const [sliderValue, setSliderValue] = useState(8);
    const scaleValue = useRef(new Animated.Value(1)).current;
    const [passwordValue, setPasswordValue] = useState("");
    const [modalVisible, setModalVisible] = useState(false);

    const onSliderValueChange = (value) => {
        setSliderValue(value);
    };

    const handleButtonPress = () => {
        Animated.sequence([]).start(() => {
            let password = "";
            for (let i = 0, n = charset.length; i < sliderValue; i++) {
                const isUppercase = Math.random() < 0.5;

                if (isUppercase) {
                    password += charset.charAt(Math.floor(Math.random() * 26)).toUpperCase();
                } else {
                    password += charset.charAt(26 + Math.floor(Math.random() * 36 - 26));
                }
            }
            setPasswordValue(password);
            setModalVisible(true);
        });
    };

    return (

        <View style={styles.container}>

            <Text style={styles.sliderValueText}>{sliderValue} Caracteres</Text>
            <View style={styles.sliderContainer}>
                <Slider
                    style={styles.slider}
                    minimumValue={8}
                    maximumValue={20}
                    value={sliderValue}
                    step={1}
                    onValueChange={onSliderValueChange}
                    thumbTintColor='#025951'
                    minimumTrackTintColor='#025951'
                    maximumTrackTintColor='#BFBFBF'
                />
            </View>
            <TouchableOpacity
                style={[styles.buttonSalvar, { transform: [{ scale: scaleValue }] }]}
                onPress={handleButtonPress}
            >
                <Text style={styles.textSalvar}>Gerar Senha</Text>
            </TouchableOpacity>

            <Modal visible={modalVisible} animationType='fade' transparent={true} >
                <ModalPassword password={passwordValue} handleClose={() => setModalVisible(false)} />
            </Modal>

        </View>

    );
};

export function Home() {
    return (
        <LinearGradient
            colors={['#034159', '#025951']}
            style={styles.gradientBackground}
        >
            <View style={styles.container}>
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>Gerador de Senhas</Text>
                </View>
                <Image
                    source={require("../../../assets/splash.png")}
                    style={styles.logo}
                />
                <MySlider />
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerTitle: {
        backgroundColor: '#fff',
        width: '100%',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        height: '10%',
        marginTop: 60,
    },
    title: {
        fontSize: 30,
        padding: 4,
        color: '#034159',
    },
    logo: {
        alignItems: 'center',
        marginTop: 150,
    },
    gradientBackground: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sliderValueText: {
        fontSize: 30,
        padding: 8,
        backgroundColor: '#034159',
        borderRadius: 8,
        color: '#fff',
    },
    sliderContainer: {
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 10,
        padding: 10,
        borderRadius: 10,
    },
    slider: {
        width: 300,
        height: 50,
        thumbTintColor: '#034159',
    },
    buttonSalvar: {
        marginTop: 30,
        backgroundColor: '#038C3E',
        width: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        borderRadius: 8,
    },
    textSalvar: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 28,
        textTransform: 'uppercase',
    },
    containerModal: {
        flex: 1,
        backgroundColor: '#000',
        zIndex: 999,
    },
});
