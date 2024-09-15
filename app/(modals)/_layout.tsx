import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { View , Image} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Collapsible } from '@/components/Collapsible';
import { NavLink } from '@/components/ui/navlinks';
import { Href } from 'expo-router';
import { categories, sideItems } from '@/constants/links';





export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{title: "How Are You"}} drawerContent={(props) => (
        <View className="flex flex-col gap-3">
        <Image
          alt="logo"
          style = {{aspectRatio: 7/4}}
          width={100}
          source={{
            uri: "assets/images/To-do List.png",
            "height": 200,
            
          }}
        />
        {sideItems.map((item, id) => (
          <NavLink
            variant={"ghost"}
            className="justify-start gap-4"
            key={id}
            {...item}
          />
        ))}
        <Collapsible title={"Category"}>
          {categories.map((item, id) => (
            <NavLink
              variant={"ghost"}
              className="justify-start"
              key={id}
              {...item}
            />
          ))}
        </Collapsible>
      </View>

      )}>
       
        {/* <Drawer.Screen
          name="user/[id]" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'User',
            title: 'overview',
          }}
        /> */}
      </Drawer>
    </GestureHandlerRootView>
  );
}
