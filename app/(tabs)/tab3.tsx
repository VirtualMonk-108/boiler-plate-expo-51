import { StyleSheet, View, Text } from 'react-native';
import { ThemedText } from '@/components/ThemedText';

export default function TabThreeScreen() {
  return (
        <View style={{flex: 1, flexDirection:'row', alignItems: 'center', justifyContent:'center'}}>
            <ThemedText type="title">Tab 3</ThemedText>   
        </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
