import {StyleSheet} from 'react-native'
import global from '../../theme/global';

const styles = StyleSheet.create({
    container:{
        flex: 1,       
        backgroundColor: global.secondColor
    },
    title:{
        fontSize: 20,
        fontWeight: '300',
        textAlign: 'center',
        paddingTop: 20,
        color: global.textColorDark
    }
});
export default styles;