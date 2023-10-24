import React, { createRef, useState } from 'react';
import { NativeBaseProvider, Box } from 'native-base'
import { StatusBar, DrawerLayoutAndroid } from 'react-native';
import Article from './screens/article';
import Header from './components/header';
import Button from './components/button';
import List from './screens/list';
import Separator from './components/separator';

const App = () => {
  const [page, setPage] = useState('list');
  const drawer = createRef();
  const changePage = (drawer, pageName) => {
    drawer.current.closeDrawer();
    setPage(pageName);
  };
  const NavigationView = (props) => (
    <Box style={{ padding: 30, backgroundColor: '#222222', flex: 1 }}>
      <Button text="Jasmine Lazuardi " />
      <Separator height={30} />
      <Button text="List" onPress={() => changePage(props.drawer, 'list')} />
      <Separator height={30} />
      <Button
        text="Article"
        onPress={() => changePage(props.drawer, 'article')}
      />
      <Separator height={30} />
      <Button text="Close" onPress={() => props.drawer.current.closeDrawer()} />
    </Box>
  );
  return (
    <NativeBaseProvider>
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition="left"
        renderNavigationView={() => <NavigationView drawer={drawer} />}>
        <Box style={{ paddingTop: 0 }}>
          <StatusBar style="auto" backgroundColor="#AA0002" />
          <Header drawer={drawer} />
          {page == 'list' && <List />}
          {page == 'article' && <Article />}
        </Box>
      </DrawerLayoutAndroid>
    </NativeBaseProvider>
  );
};
export default App;
