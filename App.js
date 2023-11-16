/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';



function App() {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header1}>Trở lại</Text>
        <Text style={styles.header2}>SẢN PHẨM</Text>
        <Text style={styles.header1}>Menu</Text>
      </View>
      <View style={styles.body}>
        <ScrollView>
          <View style={styles.items}>
            <View style={styles.viewImage}>
              <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                style={{ width: 64, height: 64, borderRadius: 14 }}
              />
            </View>

            <View style={styles.viewText}>
              <Text style={styles.textItem1}>
                Nước ngọt coca cola1
              </Text>
              <Text style={styles.textItem2}>
                Loại: nước ngọt
              </Text>
            </View>
          </View>

          <View style={styles.items}>
            <View style={styles.viewImage}>
              <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                style={{ width: 64, height: 64, borderRadius: 14 }}
              />
            </View>

            <View style={styles.viewText}>
              <Text style={styles.textItem1}>
                Nước ngọt coca cola2
              </Text>
              <Text style={styles.textItem2}>
                Loại: nước ngọt
              </Text>
            </View>
          </View>

          <View style={styles.items}>
            <View style={styles.viewImage}>
              <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                style={{ width: 64, height: 64, borderRadius: 14 }}
              />
            </View>

            <View style={styles.viewText}>
              <Text style={styles.textItem1}>
                Nước ngọt coca cola3
              </Text>
              <Text style={styles.textItem2}>
                Loại: nước ngọt
              </Text>
            </View>
          </View>

          <View style={styles.items}>
            <View style={styles.viewImage}>
              <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                style={{ width: 64, height: 64, borderRadius: 14 }}
              />
            </View>

            <View style={styles.viewText}>
              <Text style={styles.textItem1}>
                Nước ngọt coca cola4
              </Text>
              <Text style={styles.textItem2}>
                Loại: nước ngọt
              </Text>
            </View>
          </View>

          <View style={styles.items}>
            <View style={styles.viewImage}>
              <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                style={{ width: 64, height: 64, borderRadius: 14 }}
              />
            </View>

            <View style={styles.viewText}>
              <Text style={styles.textItem1}>
                Nước ngọt coca cola5
              </Text>
              <Text style={styles.textItem2}>
                Loại: nước ngọt
              </Text>
            </View>
          </View>

          <View style={styles.items}>
            <View style={styles.viewImage}>
              <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                style={{ width: 64, height: 64, borderRadius: 14 }}
              />
            </View>

            <View style={styles.viewText}>
              <Text style={styles.textItem1}>
                Nước ngọt coca cola6
              </Text>
              <Text style={styles.textItem2}>
                Loại: nước ngọt
              </Text>
            </View>
          </View>

          <View style={styles.items}>
            <View style={styles.viewImage}>
              <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                style={{ width: 64, height: 64, borderRadius: 14 }}
              />
            </View>

            <View style={styles.viewText}>
              <Text style={styles.textItem1}>
                Nước ngọt coca cola7
              </Text>
              <Text style={styles.textItem2}>
                Loại: nước ngọt
              </Text>
            </View>
          </View>

          <View style={styles.items}>
            <View style={styles.viewImage}>
              <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                style={{ width: 64, height: 64, borderRadius: 14 }}
              />
            </View>

            <View style={styles.viewText}>
              <Text style={styles.textItem1}>
                Nước ngọt coca cola8
              </Text>
              <Text style={styles.textItem2}>
                Loại: nước ngọt
              </Text>
            </View>
          </View>

        </ScrollView>

      </View>
      <View style={styles.footer}>
        <View>
          <Text style={styles.textInfo}>Tổng số sản phẩm: 14</Text>
        </View>
        <TouchableOpacity style={styles.click}>
          <Text style={styles.textClick}>Thêm</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008000'
  },
  header: {
    height: 60,


    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center'

  },
  header1: {
    color: '#fff',
    fontSize: 15

  },

  header2: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold'
  },




  body: {
    flex: 1

  },

  items: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 100,
    marginBottom: 10

  },
  viewText: {
    marginLeft: 10

  },
  viewImage: {
    marginLeft: 15,
  },

  textItem1: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18
  },
  textItem2: {
    color: '#000'

  },

  footer: {
    height: 58,
    backgroundColor: '#fff',
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    borderStyle: 'solid',
    borderTopColor: '#000',
    borderTopWidth: 1,
    paddingHorizontal: 10

  },

  textInfo: {
    color: '#000'
  },

  click: {
    height: 40,
    width: 80,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#008000',
    justifyContent: 'center',
    alignItems: 'center'
  },

  textClick: {
    color: '#008000',
    fontWeight: 'bold'
  },


 
  

});




export default App;
