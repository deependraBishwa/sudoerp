import Colors from '@/colors/colors';
import React from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native'
const CustomAlert = ({ visible, title, message, onConfirm, onCancel }) => {
  return (
    <Modal
    transparent={true}
    visible={visible}
    animationType="fade"
    onRequestClose={onCancel}
  >
    <View style={styles.overlay}>
      <View style={styles.alertBox}>
        {title && <Text style={styles.title}>{title}</Text>}
        {message && <Text style={styles.message}>{message}</Text>}
        <View style={styles.buttons}>
          {onCancel && (
            <TouchableOpacity onPress={onCancel}>
              <Text style={[styles.buttonText,{color: 'gray'}]}>CANCEL</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={onConfirm}>
            <Text style={styles.buttonText}>CONFIRM</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </Modal>
  );
}

const styles = StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    alertBox: {
      width: Dimensions.get('window').width * 0.8,
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 20,
      elevation: 5,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'left',
    },
    message: {
      fontSize: 16,
      color: 'gray',
      marginBottom: 20,
      textAlign: 'left',
    },
    buttons: {
      flexDirection: 'row',
      gap: 15,
      justifyContent: 'flex-end',
    },
   
    buttonText: {
      color: Colors.main_color,
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  
  export default CustomAlert;