import {StyleSheet} from 'react-native'
import global from '../../theme/global';

const styles = StyleSheet.create({
    container:{
        height: '15%',     
        backgroundColor: global.primaryColor,
        justifyContent: 'center',
    },
    title:{
        fontSize: 20,
        fontWeight: '300',
        textAlign: 'center',
        padding: 10,
        color: global.textColorLigth
    }
});
export default styles;