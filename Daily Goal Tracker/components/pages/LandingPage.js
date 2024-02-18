import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Modal,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Checkbox, Text } from "react-native-paper";
import TaskModal from "../modal/TaskModal";

const LandingPage = () => {
  const HorizontalLine = () => {
    return <View style={styles.horizontalLine}></View>;
  };
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

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

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.menu}>
            <TouchableOpacity>
              <AntDesign name="menufold" size={28} color="white" />
            </TouchableOpacity>
          </View>
          <View style={styles.optionButton}>
            <TouchableOpacity>
              <SimpleLineIcons
                name="options-vertical"
                size={24}
                color="white"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.addTaskContainer}>
          <TouchableOpacity onPress={toggleModal}>
            <View style={styles.iconPlus}>
              <Entypo name="plus" size={24} color="#5BDDC7" />
            </View>
            <Text style={{ color: "white" }}>Add New Task</Text>
          </TouchableOpacity>
          <TaskModal
            visible={modalVisible}
            onClose={toggleModal}
            onSubmit={addTask}
          />
        </View>
        <View>
          {tasks.map((task, index) => (
            <View key={index} style={styles.taskContainer}>
              <View style={styles.task}>
                <View style={styles.checkbox}>
                  <Checkbox.Android
                    status={checkedTasks[index] ? "checked" : "unchecked"}
                    onPress={() => toggleTaskStatus(index)}
                    color="#5BDDC7"
                    uncheckedColor="white"
                    style={styles.checkbox}
                  />
                </View>
                <View style="taskBody">
                  {/* TASK TITLE */}
                  <Text
                    variant="bodyLarge"
                    style={{ color: "white", width: 150, fontWeight: "bold" }}
                  >
                    {task.title}
                  </Text>
                  <HorizontalLine />
                  {/* TASK BODY */}
                  <Text
                    variant="bodyMedium"
                    style={{ color: "white", width: 150, fontWeight: "bold" }}
                  >
                    {task.description}
                  </Text>
                </View>
                <View style={styles.taskStatus}>
                  <View style={styles.time}>
                    <Text variant="labelLarge" style={{ color: "black" }}>
                      Time:{" "}
                    </Text>
                    <Text style={{ color: "black" }}>{task.dueDate}</Text>
                  </View>

                  <View style={styles.statusContainer}>
                    <Text variant="labelLarge" style={{ color: "white" }}>
                      Status:{" "}
                      <Text variant="labelMedium" style={{ color: "white" }}>
                        {checkedTasks[index] ? "Done" : "Ongoing"}
                      </Text>
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#131E24" },
  textTitle: { color: "white" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  menu: { marginHorizontal: 20, marginTop: 6 },
  optionButton: { marginHorizontal: 20, marginTop: 6 },
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
    borderBottomColor: "white",
    borderBottomWidth: 1,
    marginHorizontal: "auto",
  },
  time: {
    flexDirection: "column",
    backgroundColor: "#5BDDC7",
    padding: 5,
    borderRadius: 5,
    margin: 2,
  },
});

export default LandingPage;
