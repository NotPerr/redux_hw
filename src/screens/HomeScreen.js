import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import {Center,NativeBaseProvider,Text} from "native-base";
import { useDispatch, useSelector } from 'react-redux';
import { setCounter } from '../redux/CounterSlice';
import { selectCounter } from '../redux/CounterSlice';


const HomeScreen = () => {

    const counterValue = useSelector(selectCounter);

    const dispatch = useDispatch();

    return (
        <NativeBaseProvider>
            <SafeAreaProvider>
                <SafeAreaView style={{ flex: 1 }}>
                    <Center style={{ flex: 1 }}>
                        <Text>
                        Look, I'm safe! Not under a status bar or notch or home indicator or
                        anything! Very cool
                        </Text>
                    </Center>
                </SafeAreaView>
            </SafeAreaProvider>

        </NativeBaseProvider>

        


        
        
        
    );
};








export default HomeScreen;