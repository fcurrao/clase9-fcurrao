import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import Navigator from './src/Navigation/Navigator';

export default function App() {

  // const [productSelected, setProductSelected] = useState("")
  // const [categorySelected, setCategorySelected] = useState("")

  const [fontsLoaded] = useFonts({
    'Josefin': require('./src/Assets/Fonts/Josefin_Sans/JosefinSans-Regular.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }
  //Acá se manejará el estado para seleccionar una category y un producto
  
  return (
    <Navigator/>

  );
}

const styles = StyleSheet.create({
  
})
