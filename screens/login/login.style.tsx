import { StyleSheet } from 'react-native';
import {colors} from '../../assets/colors';

export const styles = StyleSheet.create({
    backgroundWrapper:{
        width: '100%',
        height: '100%',
    },
    backgroundImage:{
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    container:{
        width: '100%',
        height: '100%',
    },
    titleContainer:{
        width: '100%',
        height: 50,
        marginTop: 35,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontSize: 25,
        color: colors['primary-text-color'],
        fontWeight: "700"
    },
    loginContainer:{
        height: '80%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button:{
        width: 275,
        height: 75,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(229, 229, 229, 0.8)',
        borderWidth: 0.5,
        borderColor: 'white',
        borderRadius: 15,
        padding: 25,
    },
    loadingContainer:{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonTxt:{
        color: colors['primary-text-color'],
        paddingLeft: 20,
        fontSize: 18,
        fontWeight: '600'
    },
    cta:{
        marginTop: 5,
        fontSize: 10,
        color: colors['warning-text-color'],
        fontWeight: "700"
    }
})