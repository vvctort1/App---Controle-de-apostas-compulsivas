import { Text, View, StyleSheet } from "react-native";




const SavingsScreen = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.txt}>Economias totais**</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
        margin: "5%",
        borderRadius: 10,
        padding: "3%"
    },
    txt: {
        fontSize: 28,
        fontFamily: "Patrick Hand",
        color: "#1B1B1B"
    }
})

export default SavingsScreen;