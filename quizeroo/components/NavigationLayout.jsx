import { ScrollView, View, Text, Pressable } from "react-native";
/*import { s } from "react-native-wind";*/

const NavigationLayout = ({ children, navigation }) => {
  return (
    <View style={s`h-full flex flex-col justify-evenly`}>
      <ScrollView>{children}</ScrollView>
      <View /*style={s`flex flex-row border-t-2`}*/>
        <Pressable
          /*style={s`py-4 px-2 flex-1 text-center`}*/
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text>Home</Text>
        </Pressable>
        <Pressable /*style={s`py-4 border-l-2 border-r-2 flex-1 text-center`}*/>
          <Text>Search</Text>
        </Pressable>
        <Pressable
          /*style={s`py-4 px-2 flex-1 text-center`}*/
          onPress={() => {
            navigation.navigate("Profile");
          }}
        >
          <Text>Profile</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default NavigationLayout;