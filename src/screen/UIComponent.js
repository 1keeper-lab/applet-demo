import * as React from 'react';
import {ScrollView, View, Text} from 'react-native';
import {
  Appbar,
  Avatar,
  Banner,
  Checkbox,
  FAB,
  Menu,
  Button,
  Divider,
  IconButton,
  MD3Colors,
  Tooltip,
  TouchableRipple,
  SegmentedButtons,
  ProgressBar,
  Badge,
  ActivityIndicator,
  TextInput,
  Switch,
  Searchbar
} from 'react-native-paper';
import {Image} from 'react-native';

export default function UIComponent({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const [visible, setVisible] = React.useState(true);
  const [visible1, setVisible1] = React.useState(true);
  const [checked, setChecked] = React.useState(false);
  const openMenu = () => setVisible1(true);
  const closeMenu = () => setVisible1(false);
  const [status, setStatus] = React.useState('checked');
  const [text, setText] = React.useState('');
  const [value, setValue] = React.useState('');
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  return (
    <TouchableRipple
      onPress={() => console.log('Pressed')}
      rippleColor="rgba(0, 0, 0, .32)">
      <ScrollView>
        <View style={{flex: 1}}>
          <Appbar.Header>
            <Appbar.BackAction
              onPress={() => {
                navigation.goBack();
              }}
            />
            <Appbar.Content title="UIComponent" />
            <Appbar.Action icon="calendar" onPress={() => {}} />
            <Appbar.Action icon="magnify" onPress={() => {}} />
          </Appbar.Header>
          <Searchbar
           style={{margin: 10}}
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            inputStyle={{height:20}}
          />
          <SegmentedButtons
            style={{margin: 10}}
            value={value}
            onValueChange={setValue}
            buttons={[
              {
                value: 'walk',
                label: 'Walking',
              },
              {
                value: 'train',
                label: 'Transit',
              },
              {value: 'drive', label: 'Driving'},
            ]}
          />
          <Banner
            style={{margin: 10, borderRadius: 10}}
            visible={visible}
            actions={[
              {
                label: 'Fix it',
                onPress: () => setVisible(false),
              },
              {
                label: 'Learn more',
                onPress: () => setVisible(false),
              },
            ]}
            icon={({size}) => (
              <Image
                source={{
                  uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4',
                }}
                style={{
                  width: size,
                  height: size,
                }}
              />
            )}>
            There was a problem processing a transaction on your credit card.
          </Banner>
          <View
            style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
            <ActivityIndicator animating={true} color={MD3Colors.red800} />
            <Avatar.Icon size={40} icon="folder" style={{margin: 10}} />
            <Checkbox
              style={{margin: 10}}
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <FAB
              icon="plus"
              style={{width: 60, margin: 10}}
              onPress={() => console.log('Pressed')}
            />
            <Badge>3</Badge>
            <IconButton
              icon="camera"
              iconColor={MD3Colors.error50}
              size={20}
              onPress={() => console.log('Pressed')}
            />
            <Tooltip title="Selected Camera">
              <IconButton icon="camera" selected size={24} onPress={() => {}} />
            </Tooltip>
          </View>

          <Menu
            visible={visible1}
            onDismiss={closeMenu}
            anchor={<Button onPress={openMenu}>Show menu</Button>}>
            <Menu.Item onPress={() => {}} title="Item 1" />
            <Menu.Item onPress={() => {}} title="Item 2" />
            <Divider />
            <Menu.Item onPress={() => {}} title="Item 3" />
          </Menu>
          <ProgressBar
            style={{margin: 10}}
            progress={0.5}
            color={MD3Colors.error50}
          />
          <TextInput
            style={{margin: 10}}
            mode="outlined"
            label="Outlined input"
            placeholder="Type something"
            right={<TextInput.Affix text="/100" />}
          />
          <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
          <Image source={require('../assets/logo.png')} style={{width:60,height:60}} />
        </View>
      </ScrollView>
    </TouchableRipple>
  );
}
