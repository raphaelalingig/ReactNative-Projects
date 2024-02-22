import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View, ScrollView, Alert, TouchableWithoutFeedback } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Checkbox, Text, Switch } from "react-native-paper";
import TaskModal from "../modal/TaskModal";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Settings from "./Settings";

const LandingPage = ({ navigation }) => {
  const HorizontalLine = ({ isLightMode }) => {
    return (
      <View
        style={[
          styles.horizontalLine,
          isLightMode ? styles.lightHorizontalLine : null,
        ]}
      />
    );
  };

  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const [tasks, setTasks] = useState([]);
  const [checkedTasks, setCheckedTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
    setCheckedTasks([...checkedTasks, false]);
  };

  const toggleTaskStatus = (index) => {
    const updatedCheckedTasks = [...checkedTasks];
    updatedCheckedTasks[index] = !updatedCheckedTasks[index];
    setCheckedTasks(updatedCheckedTasks);
  };
  const handleLongPress = (index) => {
    Alert.alert(
      "Delete Task",
      "Are you sure you want to delete this task?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => deleteTask(index),
          style: "destructive",
        },
      ],
      { cancelable: true }
    );
  };
  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);

    const updatedCheckedTasks = [...checkedTasks];
    updatedCheckedTasks.splice(index, 1);
    setCheckedTasks(updatedCheckedTasks);
  };

  return (
    <View
      style={[styles.container, isSwitchOn ? styles.lightModeContainer : null]}
    >
      
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.menu}>
            <TouchableWithoutFeedback onPress={() => navigation.toggleDrawer()}>
              <AntDesign
                name="menufold"
                size={28}
                color={isSwitchOn ? "#000" : "#FFF"}
              />
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.optionButton}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialCommunityIcons
                name="white-balance-sunny"
                size={24}
                color={isSwitchOn ? "#000" : "#FFF"}
                style={{ marginBottom: 3 }}
              />
              <TouchableOpacity>
                <Text>
                  <Switch
                    value={isSwitchOn}
                    onValueChange={onToggleSwitch}
                    color="#5BDDC7"
                  />
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.addTaskContainer}>
          <TouchableOpacity onPress={toggleModal}>
            <View style={styles.iconPlus}>
              <Entypo name="plus" size={24} color="#5BDDC7" />
            </View>
            <Text
              style={{
                fontWeight: "bold",
                color: isSwitchOn ? "#000" : "#FFF",
              }}
            >
              Add New Task
            </Text>
          </TouchableOpacity>
          <TaskModal
            visible={modalVisible}
            onClose={toggleModal}
            onSubmit={addTask}
          />
        </View>
        <View>
          {tasks.map((task, index) => (
            <TouchableWithoutFeedback
              key={index}
              onLongPress={() => handleLongPress(index)}
            >
              <View
                style={[
                  styles.taskContainer,
                  isSwitchOn ? styles.lightModeTaskContainer : null,
                ]}
              >
                <View style={styles.task}>
                  <View style={styles.checkbox}>
                    <Checkbox.Android
                      status={checkedTasks[index] ? "checked" : "unchecked"}
                      onPress={() => toggleTaskStatus(index)}
                      color={isSwitchOn ? "#5BDDC7" : "#5BDDC7"}
                      uncheckedColor={isSwitchOn ? "#000" : "#FFF"}
                      style={styles.checkbox}
                    />
                  </View>
                  <View style="taskBody">
                    <Text
                      variant="bodyLarge"
                      style={{
                        color: isSwitchOn ? "#000" : "#FFF",
                        width: 150,
                        fontWeight: "bold",
                      }}
                    >
                      {task.title}
                    </Text>
                    <HorizontalLine isLightMode={isSwitchOn} />
                    <Text
                      variant="bodyMedium"
                      style={{
                        color: isSwitchOn ? "#000" : "#FFF",
                        width: 150,
                        fontWeight: "bold",
                      }}
                    >
                      {task.description}
                    </Text>
                  </View>
                  <View style={styles.taskStatus}>
                    <View
                      style={[
                        styles.time,
                        isSwitchOn ? styles.lightStatusContainer : null,
                      ]}
                    >
                      <Text variant="labelLarge" style={{ color: "#000" }}>
                        Time:{" "}
                      </Text>
                      <Text style={{ color: "#000" }}>{task.dueDate}</Text>
                    </View>
                    <View style={styles.statusContainer}>
                      <Text
                        variant="labelLarge"
                        style={{ color: isSwitchOn ? "#000" : "#FFF" }}
                      >
                        Status:{" "}
                        <Text
                          variant="labelMedium"
                          style={{ color: isSwitchOn ? "#000" : "#FFF" }}
                        >
                          {checkedTasks[index] ? "Done" : "Ongoing"}
                        </Text>
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#131E24" },
  lightStatusContainer: { backgroundColor: "white", borderColor: "#5BDDC7" },
  lightModeContainer: { backgroundColor: "#E6E6EA" },
  lightModeTaskContainer: { backgroundColor: "#F5F5F5" },
  lightHorizontalLine: { borderBottomColor: "#5BDDC7" },

  textTitle: { color: "#FFF" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  menu: { marginHorizontal: 20, marginTop: 6 },
  optionButton: { marginHorizontal: 20 },
  addTaskContainer: { alignItems: "center", marginTop: 20 },
  iconPlus: { alignSelf: "center" },
  taskContainer: {
    backgroundColor: "#242D37",
    marginHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  task: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
  },
  checkbox: { marginLeft: 3 },
  taskStatus: { flexDirection: "column" },
  horizontalLine: {
    borderBottomColor: "#FFF",
    borderBottomWidth: 1,
    marginHorizontal: "auto",
  },
  time: {
    flexDirection: "column",
    backgroundColor: "#5BDDC7",
    padding: 5,
    borderRadius: 5,
    margin: 2,
    borderWidth: 1,
    borderColor: "#5BDDC7",
  },
});
// #5BDDC7 color green

export default LandingPage;
