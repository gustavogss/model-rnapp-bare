import {StyleSheet} from 'react-native'
import { theme } from '../../theme';

const styles = StyleSheet.create({
    container:{
        flex: 1,       
        backgroundColor: theme.colors.secondColor 
    },
    title:{
        fontSize: 20,
        fontWeight: '300',
        textAlign: 'center',
        paddingTop: 20,
        color: theme.colors.textColorDark 
    }
});
export default styles;