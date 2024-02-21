import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const DeleteModal = ({ isVisible, onDelete, onCancel }) => {
  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <Text style={styles.modalText}>
          Are you sure you want to delete this task?
        </Text>
        <View style={styles.modalButtons}>
          <TouchableOpacity onPress={onDelete}>
            <Text style={styles.deleteButton}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onCancel}>
            <Text style={styles.cancelButton}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: 300,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  deleteButton: {
    color: "red",
    fontSize: 16,
  },
  cancelButton: {
    color: "blue",
    fontSize: 16,
  },
});

export default DeleteModal;
