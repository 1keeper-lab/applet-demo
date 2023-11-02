import * as React from 'react';
import {ScrollView, View} from 'react-native';
import {Button,Snackbar,Portal,Dialog,Text,Modal} from 'react-native-paper';
import Applet from 'applet-base'
import Web3 from 'web3';
const web3 = new Web3(new Web3.providers.HttpProvider(`https://binance.llamarpc.com`));

export default function HomeScreen({navigation}) {
  const [visible, setVisible] = React.useState(false);
  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);
  const [visibleDialog, setVisibleDialog] = React.useState(false);
  const showDialog = () => setVisibleDialog(true);
  const hideDialog = () => setVisibleDialog(false);
  const [visibleModal, setVisibleModal] = React.useState(false);
  const showModal = () => setVisibleModal(true);
  const hideModal = () => setVisibleModal(false);
  const containerStyle = {backgroundColor: 'white', margin: 20,padding:30};
  const [info, setInfo] = React.useState("");
  const setDeviceInfo = (info) => setInfo(info);

  return (
    <ScrollView>
      <View style={{flex:1,padding:20}}>
        <Text>UI - 0000 </Text>
        <View style={{flex:1,padding:20}}>
          <Button mode="contained-tonal" style={{margin:10}} onPress={()=>navigation.push('UIComponent')}>Components</Button>
          <Button mode="contained-tonal" style={{margin:10}} onPress={()=>navigation.push('Tab')}>Tab</Button>
          <Button mode="contained-tonal" style={{margin:10}} onPress={()=>navigation.push('Web')}>Web</Button>
          <Button mode="contained-tonal" style={{margin:10}} onPress={showDialog}>Dialog</Button>
          <Button mode="contained-tonal" style={{margin:10}} onPress={()=>navigation.push('Drawer')}>Drawer</Button>
          <Button mode="contained-tonal" style={{margin:10}} onPress={()=>navigation.push('Top')}>Top</Button>
          <Button mode="contained-tonal" style={{margin:10}} onPress={showModal}>Modal</Button>
          <Button mode="contained-tonal" style={{margin:10}} onPress={onToggleSnackBar}>SnackBar</Button>
          <Snackbar
              visible={visible}
              onDismiss={onDismissSnackBar}
              action={{
                  label: 'Undo',
                  onPress: () => {
                      onDismissSnackBar()
                  },
              }}>
              Hey there! I'm a Snackbar.
          </Snackbar>
          <Portal>
            <Dialog visible={visibleDialog} onDismiss={hideDialog}>
              <Dialog.Title>Alert</Dialog.Title>
              <Dialog.Content>
                <Text variant="bodyMedium">This is simple dialog</Text>
              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={hideDialog}>Done</Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
          <Portal>
            <Modal visible={visibleModal} onDismiss={hideModal} contentContainerStyle={containerStyle}>
              <Text>Example Modal.  Click outside this area to dismiss.</Text>
            </Modal>
          </Portal>
        </View>
        <Text>Common</Text>
        <View style={{flex:1,padding:20}}>
          <Button mode="contained-tonal" style={{margin:10}} onPress={() => { Applet.common.loading("Loading"); setTimeout(() => { Applet.common.loadingDismiss() }, 3000) } }>Loading</Button>
          <Button mode="contained-tonal" style={{margin:10}} onPress={() => Applet.common.alert("Alert","Hello world","Cancel","Ok").then(result => Applet.common.toast(""+result)) }>Alert</Button>
          <Button mode="contained-tonal" style={{margin:10}} onPress={() => Applet.common.toast("toast") }>Toast</Button>
          <Button mode="contained-tonal" style={{margin:10}} onPress={() => Applet.common.deviceInfo().then(result => {Applet.common.toast(""+result);console.log(JSON.stringify(result))} )}>DeviceInfo</Button>
          <Button mode="contained-tonal" style={{margin:10}} onPress={() => Applet.common.existApp("com.keeper.wallet").then(result => Applet.common.toast(""+result)) }>App exist</Button>
          <Button mode="contained-tonal" style={{margin:10}} onPress={() => Applet.common.openApp("com.keeper.wallet") }>App Open</Button>
          <Button mode="contained-tonal" style={{margin:10}} onPress={() => Applet.common.hiddenToolBar() }>Hidden TooBar</Button>
          <Button mode="contained-tonal" style={{margin:10}} onPress={() => Applet.common.showToolBar() }>Show TooBar</Button>
          <Button mode="contained-tonal" style={{margin:10}} onPress={() => Applet.common.exit() }>exit</Button>
          <Button mode="contained-tonal" style={{margin:10}} onPress={() => Applet.common.more() }>more</Button>
        </View>
        <Text>Chain</Text>
        <View style={{flex:1,padding:20}}>
        <Button mode="contained-tonal" style={{margin:10}} onPress={() => Applet.chain.add("314","Filecoin","FIL","18","https://icons.llamao.fi/icons/chains/rsz_filecoin.jpg","https://api.node.glif.io","").then(result => Applet.common.alert("Alert",""+JSON.stringify(result),"","Ok")) }>Add</Button>
        <Button mode="contained-tonal" style={{margin:10}} onPress={() => Applet.chain.switch("56").then(result => Applet.common.alert("Alert",""+JSON.stringify(result),"","Ok")) }>Switch</Button>
        <Button mode="contained-tonal" style={{margin:10}} onPress={() => Applet.chain.get("").then(result => Applet.common.alert("Alert",""+JSON.stringify(result),"","Ok")) }>Info</Button>
        </View>
        <Text>Wallet</Text>
        <View style={{flex:1,padding:20}}>
        <Button mode="contained-tonal" style={{margin:10}} onPress={() => Applet.wallet.connect().then(result => Applet.common.alert("Alert",""+JSON.stringify(result),"","Ok")) }>Connect</Button>
        <Button mode="contained-tonal" style={{margin:10}} onPress={() => Applet.wallet.disConnect().then(result => Applet.common.alert("Alert",""+JSON.stringify(result),"","Ok")) }>disConnect</Button>
        <Button mode="contained-tonal" style={{margin:10}} onPress={() => Applet.wallet.signMessage("sign message hello world").then(result => Applet.common.alert("Alert",""+JSON.stringify(result),"","Ok")) }>Sign Message</Button>
        <Button mode="contained-tonal" style={{margin:10}} onPress={() => Applet.wallet.signHashMessage("0x416363657373205a4b53776170206163636f756e742e0a0a4f6e6c79207369676e2074686973206d65737361676520666f722061207472757374656420636c69656e7421").then(result => Applet.common.alert("Alert",""+JSON.stringify(result),"","Ok")) }>Sign Hash Message</Button>
        <Button mode="contained-tonal" style={{margin:10}} onPress={() => Applet.wallet.switch().then(result => Applet.common.alert("Alert",""+JSON.stringify(result),"","Ok")) }>Switch</Button>
        <Button mode="contained-tonal" style={{margin:10}} onPress={() => Applet.wallet.validAddress("evm","0x95222290dd7278aa3ddd389cc1e1d165cc4bafe5").then(result => Applet.common.alert("Alert",""+JSON.stringify(result),"","Ok")) }>validAddress</Button>
        <Button mode="contained-tonal" style={{margin:10}} onPress={() => Applet.wallet.checksumAddress("evm","0x95222290dd7278aa3ddd389cc1e1d165cc4bafe5").then(result => Applet.common.alert("Alert",""+JSON.stringify(result),"","Ok")) }>checksumAddress</Button>

        <Button mode="contained-tonal" style={{margin:10}} onPress={() => Applet.store.set("userId","111111").then(result => Applet.common.alert("Alert",""+JSON.stringify(result),"","Ok")) }>StoreSet</Button>
        <Button mode="contained-tonal" style={{margin:10}} onPress={() => Applet.store.get("userId").then(result => Applet.common.alert("Alert",""+JSON.stringify(result),"","Ok")) }>StoreGet</Button>

        <Button mode="contained-tonal" style={{margin:10}} onPress={() => Applet.wallet.balanceOf("1","token","","0x").then(result => Applet.common.alert("Alert",""+JSON.stringify(result),"","Ok")) }>BalanceOf</Button>
        <Button mode="contained-tonal" style={{margin:10}} onPress={() => Applet.wallet.selectAsset("1","token","").then(result => Applet.common.alert("Alert",""+JSON.stringify(result),"","Ok")) }>Select Token Asset</Button>
        <Button mode="contained-tonal" style={{margin:10}} onPress={() => Applet.wallet.selectAsset("1","nft","").then(result => Applet.common.alert("Alert",""+JSON.stringify(result),"","Ok")) }>Select Nft Asset</Button>
        <Button mode="contained-tonal" style={{margin:10}} onPress={() => Applet.common.scan().then(result => Applet.common.alert("Alert",""+JSON.stringify(result),"","Ok")) }>Scan</Button>
        <Button mode="contained-tonal" style={{margin:10}} onPress={() => Applet.common.go("https://1keeper.com") }>Open web</Button>
        <Button mode="contained-tonal" style={{margin:10}} onPress={() => Applet.common.go("1keeper-app://com.keeper.applet.demo") }>Open Applet</Button>
        <Button mode="contained-tonal" style={{margin:10}} onPress={() => Applet.common.go("1keeper://app/AboutUs") }>Open Native</Button>
        <Button mode="contained-tonal" style={{margin:10}} onPress={() => {
          var contract = new web3.eth.Contract([{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}],"0x55d398326f99059ff775485246999027b3197955");
            contract.methods.balanceOf('0x95222290dd7278aa3ddd389cc1e1d165cc4bafe5').call().then(v => {
              alert(v)
            }).then(e => {

            })
          }}>Web3 Call</Button>
        <Button mode="contained-tonal" style={{margin:10}} onPress={() => { Applet.wallet.send("0x95222290dd7278aa3ddd389cc1e1d165cc4bafe5","0xc607b68e05e20dbc6488fb69c2ab2ffafa26441e","","","","",{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},["0xa5116f4b4834c3389f8b62643aa1be82644c8bf0","60000000000000"]).then(result => Applet.common.alert("Alert",""+JSON.stringify(result),"","Ok")) } }>Transfer</Button>
        </View>
      </View>
    </ScrollView>
  );
}
