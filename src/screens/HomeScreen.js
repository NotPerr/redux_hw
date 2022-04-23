import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import {Center,NativeBaseProvider,Text, HStack, Button} from "native-base";
import { useDispatch, useSelector } from 'react-redux';
import { decreaseOne, increaseOne, setCounter } from '../redux/CounterSlice';
import { selectCounter } from '../redux/CounterSlice';


const HomeScreen = () => {

    const counterValue = useSelector(selectCounter);

    const dispatch = useDispatch();

    return (
        <NativeBaseProvider>
            <SafeAreaProvider>
                <SafeAreaView flex={1} >
                    <Center flex={1} bgColor={"#711F8C"}>
                        <HStack space={20}>
                            <Button bgColor={"#2C8C1F"} borderRadius={0} width={70} onPress = {() => dispatch(increaseOne())}>
                                <Text fontSize={40} color="white">+</Text>
                            </Button>
                            <Button bgColor={"#F08B18"} borderRadius={0} width={70} onPress = {() => dispatch(decreaseOne())}>
                                <Text fontSize={40} color="white">-</Text>
                            </Button>
                        </HStack>
                        <Text fontSize={40} mt={20} color="white">
                            {counterValue}
                        </Text>
                    </Center>
                </SafeAreaView>
            </SafeAreaProvider>

        </NativeBaseProvider>

        


        
        
        
    );
};








export default HomeScreen;