import React, {useState} from 'react';
import {Header, Left, Body, Button, Title, Right} from 'native-base';
import {Image, StatusBar,View, StyleSheet, TouchableOpacity, Modal, Text} from 'react-native';
import {colors} from '../utils/theme';

function HeaderComponent(props) {
    const [modalVisible, setModalVisible] = useState(false)

    const filterModel = () => {
        setModalVisible(true)
    }

    const onPressFilterText = (value) => {
        //props.setParentValue(value)
        setModalVisible(!modalVisible)
    }

    return (
    <>
      <Header style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Left style={{paddingLeft: 10}}>
          {props.backButton ? (
            <Button transparent onPress={() => props.handleNavigate.goBack()}>
              <Image
                source={require('../assets/img/back-button.png')}
                style={{height: 24, width: 24}}
              />
            </Button>
          ) : (
            <Button
              transparent
              onPress={() => props.handleNavigate.openDrawer()}>
              <Image
                source={require('../assets/img/menu.png')}
                style={{height: 24, width: 24}}
              />
            </Button>
          )}
        </Left>
        <Body>
          <Title style={styles.title}>Movie App</Title>
        </Body>
        <Right>
          {props.filterButton ? (
            <Button
              transparent
              onPress={filterModel}>
              <Image
                source={require('../assets/img/filter-button.png')}
                style={{height: 30, width: 30}}
              />
            </Button>
          ) : null}
        </Right>
      </Header>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity onPress={() => onPressFilterText(0)}>
              <Text style={styles.modalText}>Önerilen</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPressFilterText(1)}>
              <Text style={styles.modalText}>En Yüksek Puan</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPressFilterText(2)}>
              <Text style={styles.modalText}>En Düşük Puan</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPressFilterText(3)}>
              <Text style={styles.modalText}>En Çok Yorum Yapılan</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPressFilterText(4)}>
              <Text style={styles.modalText}> En Yeniler</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{...styles.openButton, backgroundColor: colors.RED.primary}}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>Kapat</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.RED.primary,
    marginBottom: 2,
    borderBottomWidth: 1,
    borderBottomColor: '#FFF',
  },
  title: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 20,
  },
    modalView: {
        width: '70%',
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 25,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: '#F194FF',
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        width: '100%'
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        fontSize: 17,
        marginBottom: 10,
        paddingBottom: 15
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)'
    },
});

export default HeaderComponent;
