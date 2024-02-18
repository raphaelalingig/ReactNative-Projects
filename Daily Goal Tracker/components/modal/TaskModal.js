import React, { useState } from "react";
import { Modal, View, TouchableOpacity, StyleSheet } from "react-native";
import { TextInput, Text, Button } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";

const TaskModal = ({ visible, onClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const handleSubmit = () => {
    // Check if title and description are not empty
    if (title.trim() !== '' && description.trim() !== '') {
      onSubmit({
        title: title,
        description: description,
        dueDate: date.toLocaleDateString()
      });
      // Reset inputs after submission
      setTitle('');
      setDescription('');
      onClose();
    } else {
      // Show error message or handle invalid input
      // For simplicity, you can alert the user
      alert('Title and Description are required!');
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.title}>
            <Text
              variant="bodyLarge"
              style={{ fontWeight: "bold", marginBottom: 10 }}
            >
              Add a new task
            </Text>
          </View>
          <View style={styles.inputs}>
            <TextInput
              label="Title: "
              mode="outlined"
              style={styles.textInput}
              activeOutlineColor="#5BDDC7"
              value={title}
              onChangeText={text => setTitle(text)}
            />
            <TextInput
              label="Description: "
              mode="outlined"
              style={styles.textInput}
              activeOutlineColor="#5BDDC7"
              value={description}
              onChangeText={text => setDescription(text)}
            />
          </View>
          <View style={{ flexDirection: "column", marginLeft: 10 }}>
            <View style={styles.dueDate}>
              <Text variant="bodyMedium" style={{ fontWeight: "bold" }}>
                Due Date:{" "}
              </Text>
              <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                <Text style={{ color: "#5BDDC7" }}>Pick a date</Text>
              </TouchableOpacity>
              {showDatePicker && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode="date"
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                />
              )}
            </View>
            <Text
              style={{ fontWeight: "bold" }}
            >{`Selected Date: ${date.toLocaleDateString()}`}</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              gap: 10,
              marginTop: 10,
              marginLeft: 130,
            }}
          >
            <TouchableOpacity onPress={onClose}>
              <Button style={styles.button2}>
                <Text style={{ color: "white" }}>Close</Text>
              </Button>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSubmit}>
              <Button style={styles.button}>
                <Text>OK</Text>
              </Button>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  modalContent: {
    backgroundColor: "white",
    width: 300,
    borderRadius: 10,
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  closeButton: {
    fontSize: 16,
    color: "#5BDDC7",
    marginTop: 8,
  },
  textInput: { width: 180, height: 28 },
  dueDate: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    marginTop: 5,
  },
  button: {
    backgroundColor: "#5BDDC7",
  },
  button2: { backgroundColor: "#131E24" },
});

export default TaskModal;
