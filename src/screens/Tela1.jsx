import { Text, View,  } from "react-native";
import { Button } from "react-native-web";

const Tela1 = ({navigation}) => {
    const botaoTela3Pressionado =() => {
        navigation.navigate('Tela3');
    };
    const botaoTela2Pressionado = () => {
        navigation.navigate('Tela2');
    };
    return ( 
        <View>
            <Text>Tela 1</Text>
            <Button title='Tela 2' onPress={botaoTela2Pressionado}  />
            <Button title='Tela 3' onPress={botaoTela3Pressionado} />
        </View>
     );
}
 
export default Tela1;