import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {
    const getItem = async (key) => {
        try {
            const passwords = await AsyncStorage.getItem(key);
            return JSON.parse(passwords) || [];
        } catch (error) {
            alert("erro ao buscar ", error);
            return [];
        }
    };

    const saveItem = async (key, value) => {
        try {
            let passwords = await getItem(key);
            passwords.push(value);
            await AsyncStorage.setItem(key, JSON.stringify(passwords));
        } catch (error) {
            alert("erro ao salvar ", error);
        }
    };

    const removeItem = async (key, item) => {
        try {
            let passwords = await getItem(key);
            let mypass = passwords.filter((password) => {
                return password !== item;
            });
            await AsyncStorage.setItem(key, JSON.stringify(mypass));
            return mypass;
        } catch (error) {
            alert("erro ao deletar ", error);
        }
    };
    const clearStorage = async () => {
        await AsyncStorage.clear();
    };


    return {
        getItem,
        saveItem,
        removeItem,
        clearStorage,
    };
};

export default useStorage;
