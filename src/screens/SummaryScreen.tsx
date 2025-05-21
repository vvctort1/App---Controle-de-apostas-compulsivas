import { Image, StyleSheet, Text, TextInput, View } from "react-native";




const SummaryScreen = () => {


    return(
        <View style={styles.container}>
            <View style={styles.container2}>
            </View>
            <View style={styles.card}>
                <Text style={styles.titutoTxtCard}>Olá, [nome]</Text>
                <Text style={styles.txtCard}>Você está a XX dias sem apostar.</Text>
                <Text style={styles.txtCardPeriodo}>12/23 - 01/03</Text>
            </View>
            <View style={styles.container3}>
                <View style={styles.container4}>
                    <Text style={styles.txtIcon}>Check-in</Text>
                    <View style={styles.divisoria}></View>
                    <Text style={styles.txtIcon}>Log Urge</Text>
                    <View style={styles.divisoria}></View>
                    <Text style={styles.txtIcon}>Reset</Text>
                </View>
                <Text style={styles.tituloTxt}>Motivação</Text>
                <TextInput style={styles.txtInput}/>
                <View style={styles.container5}>
                    <View style={styles.imgContainer}>
                        <Image source={require("../Images/forest.gif")} style={styles.img}/>
                        <Text style={styles.imgText}>Lorem {'\n'}Ipsum dior</Text>
                    </View>
                    <View style={styles.imgContainer}>
                        <Image source={require("../Images/forest.gif")} style={styles.img}/>
                        <Text style={styles.imgText}>Lorem {'\n'}Ipsum dior</Text>
                    </View>
                </View>
                <Text style={styles.tituloTxt}>Economias</Text>
                <TextInput style={styles.txtInput}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#eee",
    },
    container2: {
        backgroundColor: "#eee",
        height: "10%",
        width: "100%",
    },
    container3:{
        backgroundColor: "#fff",
        width: "100%",
        height: "90%",
        marginTop: "5%",
    },
    container4: {
        marginTop: "8%",
        flexDirection: "row",
        justifyContent: "space-around",
        paddingHorizontal: "17%",
        paddingTop: "24%"
    },
    container5: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    card: {
        backgroundColor: "#fff",
        width: "90%",
        height: "22%",
        borderRadius: 10,
        padding: "5%",
        marginTop: "3%",
        elevation: 5,
        position: 'absolute',
        zIndex: 1,
    },
    titutoTxtCard: {
        fontFamily: "Patrick Hand",
        fontSize: 28,
        marginBottom: "3%"
    },
    txtCard:{
        fontFamily: "Patrick Hand",
        fontSize: 18,
        marginBottom: "7%"
    },
    txtCardPeriodo:{
        fontFamily: "Patrick Hand",
        fontSize: 14
    },
    txtIcon: {
        marginTop: "15%"
    },
    divisoria: {
        width: 2,
        height: 25,
        backgroundColor: "#eee"
    },
    tituloTxt: {
        fontSize: 28,
        fontFamily: "Patrick Hand",
        marginTop: "8%",
        marginLeft: "6%"
    },
    txtInput: {
        borderWidth: 3,
        borderColor: "#1B1B1B",
        marginHorizontal: "6%",
        borderRadius: 8,
        marginTop: "4%",
        height: 48
    },
    imgContainer: {
        flexDirection: "row",
        height: 70,
        width: "38%",
        borderStyle: "dotted",
        borderWidth: 2,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "space-around",
        marginTop: "10%"
    },
    img: {
        height: "90%",
        width: "45%",
        borderRadius: 8,
    },
    imgText: {
        fontFamily: "Patrick Hand",
        fontSize: 14,
        marginRight: "7%"
    }
})

export default SummaryScreen;