import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Checkbox, Text } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

const LandingPage = () => {
  const [checked, setChecked] = React.useState(false);
  const status = checked ? "Done" : "Ongoing";
  const HorizontalLine = () => {
    return <View style={styles.horizontalLine}></View>;
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.menu}>
          <TouchableOpacity>
            <AntDesign name="menufold" size={32} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.optionButton}>
          <TouchableOpacity>
            <SimpleLineIcons name="options-vertical" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.addTaskContainer}>
        <TouchableOpacity>
          <View style={styles.iconPlus}>
            <Entypo name="plus" size={24} color="#5BDDC7" />
          </View>
          <Text style={{ color: "white" }}>Add New Task</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.taskContainer}>
        <View style={styles.task}>
          <View style={styles.checkbox}>
            <Checkbox.Android
              status={checked ? "checked" : "unchecked"}
              onPress={() => setChecked(!checked)}
              color="#5BDDC7"
              uncheckedColor="white"
              style={styles.checkbox}
            />
          </View>
          <View style="taskBody">
            {/* TASK TITLE */}
            <Text
              variant="bodyLarge"
              style={{ color: "white", width: 150, margin: 5 }}
            >
              Sample
            </Text>
            <HorizontalLine />
            {/* TASK BODY */}
            <Text variant="bodyMedium" style={{ color: "white", width: 150 }}>
              dadawdawd
            </Text>
          </View>
          <View style={styles.taskStatus}>
            <View style={styles.time}>
              <Text variant="labelLarge" style={{ color: "black" }}>
                Time:{" "}
              </Text>
              <Text style={{ color: "black" }}>12/01/2002</Text>
            </View>

            <View style={styles.statusContainer}>
              <Text variant="labelLarge" style={{ color: "white" }}>
                Status:{" "}
                <Text variant="labelMedium" style={{ color: "white" }}>
                  {status}
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LandingPage;

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
