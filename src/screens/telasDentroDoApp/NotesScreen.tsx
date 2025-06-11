import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"



const NotesScreen = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.txtTitulo1}>Escrever nova entrada</Text>
            <TextInput style={styles.txtInput}/>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.txtBtn}>Button</Text>
            </TouchableOpacity>
            <Text style={styles.txtTitulo2}>Minhas razões para parar</Text>
            <View style={styles.galery}>
                <View style={styles.foto1}><FontAwesomeIcon icon={faImage}/></View>
                <View style={styles.fotos2e3container}>
                    <View style={styles.foto2}><FontAwesomeIcon icon={faImage}/></View>
                    <View style={styles.foto3}><FontAwesomeIcon icon={faImage}/></View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
    },
    txtTitulo1: {
        fontFamily: "Patrick Hand",
        fontSize: 28,
        marginLeft: "6%",
        marginTop: "40%"
    },
    txtTitulo2: {   
        fontFamily: "Patrick Hand",
        fontSize: 28,
        marginLeft: "6%",
        marginTop: "9%"
    },
    txtInput: {
        borderWidth: 3,
        borderColor: "#1B1B1B",
        marginHorizontal: "6%",
        borderRadius: 8,
        marginTop: "4%",
        height: 48
    },
    btn: {
        backgroundColor: "#1B1B1B",
        borderRadius: 8,
        height: 52,
        marginHorizontal: "6%",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "4%"
    },
    txtBtn: {
        color: "#FFF",
        fontSize: 22,
        fontFamily: "Patrick Hand"
    },
    galery:{
        alignSelf: "center",
        width: "90%",
        height: "43%",
        alignItems: 'center',
        flexDirection: "row"
    },
    foto1: {
        backgroundColor: "#EEE",
        width: "46%",
        height: "90%",
        marginHorizontal: "2%",
        alignItems: "center",
        justifyContent: "center"
    },
    fotos2e3container:{
        height: "100%",
        width: "50%",
        alignItems: "center",
        justifyContent: "space-around"
    },
    foto2:{
        backgroundColor: "#EEE",
        width: "90%",
        height: "40%",
        alignItems: "center",
        justifyContent: "center"
    },
    foto3: {
        backgroundColor: "#EEE",
        width: "90%",
        height: "40%",
        alignItems: "center",
        justifyContent: "center"
    }
})

export default NotesScreen;