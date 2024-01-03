import { StyleSheet } from "react-native";
import { width } from "../../theme";


const styles = StyleSheet.create({
    container: {
        width: width,
        aspectRatio: 16 / 9,
        alignSelf: 'center',
    },
    videoPlayer: {
        width: '100%',
        height: '100%',
    },
    palyIcon: {
        width: 45,
        height: 45,
        tintColor: '#fff',
    },
    playIconContainer: {
        backgroundColor: '#fff',
        position: 'absolute',
        alignSelf: 'center',
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'center',
        width: 54,
        height: 54,
        alignContent: 'center',
        top: '30%',
        opacity: 0.8,
    },
});

export default styles;