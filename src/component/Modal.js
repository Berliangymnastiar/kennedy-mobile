import React from 'react';
import {View, Text, StyleSheet, Pressable, Modal} from 'react-native';

const ModalComponent = ({
  modalVisible,
  setModalVisible,
  nextHandler,
  buttonStyle,
  leftButtonText,
  rightButtonText,
  buttonText,
  leftButtonColor,
  rightButtonColor,
  titleText,
}) => {
  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{titleText}</Text>
            <View style={styles.flexRow}>
              <Pressable
                style={[styles.button, {backgroundColor: leftButtonColor}]}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  nextHandler();
                }}>
                <Text style={styles.textStyle}>{leftButtonText}</Text>
              </Pressable>
              <Pressable
                style={[styles.button, {backgroundColor: rightButtonColor}]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyleBtnCancel}>{rightButtonText}</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
        onPress={() => {
          setModalVisible(true);
        }}
        style={buttonStyle}>
        <Text style={styles.logoutBtnTxt}>{buttonText}</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.56)',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontFamily: 'Nunito-Bold',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    elevation: 2,
    marginHorizontal: 10,
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textStyleBtnCancel: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  flexRow: {flexDirection: 'row'},
  logoutBtnTxt: {fontSize: 14, fontFamily: 'Nunito-Bold'},
});

export default ModalComponent;
