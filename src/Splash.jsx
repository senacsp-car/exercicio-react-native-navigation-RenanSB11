import { useEffect } from "react";
import { View, Text } from "react-native";

const Splash = ({navigation}) => {

    const tempoFinalizado = () => {navigation.replace('Tela1')}

    const componenteRenderizado = () => {setTimeout(tempoFinalizado, 2000)}

    navigation.setOpitions=({headerShown:false,})

    useEffect(componenteRenderizado, []);
    
    return (
         <View>
            <Text>
                Splash
            </Text>
         </View> 
    );
}
 
export default Splash;