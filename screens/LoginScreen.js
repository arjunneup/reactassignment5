import React, { Component } from 'react';
import { Alert, Button, TextInput,AsyncStorage, View, StyleSheet,Image } from 'react-native';

const LoginScreen = (props) => {{
 
  
    _signInAsync = async () => {
        // await AsyncStorage.setItem('userToken', 'abc');
        props.navigation.navigate('Main');
      };


    return (
      <View style={styles.container}>
          <View style={{paddingBottom : 10}}>
                  <Image
                    source={{ uri: 'https://ih0.redbubble.net/image.503922301.6502/flat,750x1000,075,t.u3.jpg' }}
                    style={{
                      
                      height: 200,
                      width: 400
                    }}
                  />
                </View>
        <TextInput
          
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
         
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />

<Button
          title={'Login'}
          color="black"
         onPress={this._signInAsync}
        />
        
        <Button
          title={'Sign Up'}
          color="black"
         //onPress={this}
        />


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:  '#ffffff',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    color:"#ffad33",
  },
});

export default LoginScreen;

LoginScreen.navigationOptions = {
    title: 'MELLOWWW',
    headerStyle: {
      backgroundColor: '#0a0a09',
    },
    headerTintColor: '#cc7a00',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };