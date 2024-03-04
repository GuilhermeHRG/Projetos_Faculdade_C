import React, { useEffect } from 'react';
import { View, Image, Text, StyleSheet, Animated } from 'react-native';

const SplashScreen = ({ navigation }) => {
    const fadeIn = new Animated.Value(0);

    useEffect(() => {
        Animated.timing(fadeIn, {
            toValue: 1,
            duration: 2000, // Ajuste conforme necessário
            useNativeDriver: true,
        }).start(() => {
            // Navega para a próxima tela após a animação
            navigation.replace('MainScreen'); // Substitua 'MainScreen' pelo nome da sua tela principal
        });
    }, [fadeIn, navigation]);

    return (
        <View style={styles.container}>
            <Animated.View style={{ opacity: fadeIn }}>
                <Image source={require('./assets/splash.png')} style={styles.image} />
                <Text style={styles.text}>Seu Texto Aqui</Text>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#025951',
    },
    image: {
        width: '80%', // Ajuste conforme necessário
        height: '50%', // Ajuste conforme necessário
        resizeMode: 'contain',
    },
    text: {
        color: 'white',
        fontSize: 20,
        marginTop: 10,
    },
});

export default SplashScreen;
