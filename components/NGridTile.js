import { useNavigation } from "@react-navigation/native";
import { Pressable, View, Text, StyleSheet, Platform } from "react-native";

const NGridTile = ({ id, title, color }) => {
  const navigation = useNavigation();

  function navigateToList () {
    navigation.navigate('CategoryItems', {
      categoryId: id
    });
  }

  return (
    <View style={[styles.gridTile, {backgroundColor: color}]}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({pressed}) => [
          styles.button,
          pressed ? styles.buttonPressed : null
        ]}
        onPress={navigateToList}
      >
        <Text style={styles.title}>{ title }</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  gridTile: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    margin: 8,
    height: 120,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#ccc',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    backgroundColor: '#fff',
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  buttonPressed: {
    opacity: 0.5,
  },
  title: {
    color: '#fff',
    fontSize: 16
  }
});

export default NGridTile;