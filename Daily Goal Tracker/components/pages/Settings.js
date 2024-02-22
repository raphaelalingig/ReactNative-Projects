import {
  StyleSheet,
  TouchableOpacity,
  View,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { Appbar, Avatar, Button, Card, Title, Text } from "react-native-paper";
import React, { useState, useEffect, useCallback } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Zocial } from "@expo/vector-icons";

const Settings = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleModalPress = (e) => {
    e.stopPropagation();
  };
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <View style={[styles.container]}>
      <View style={styles.featureContainer}>
        <View style={styles.userLogoSettings}>
          <Avatar.Icon
            size={200}
            icon="account-check"
            color="black"
            backgroundColor={"white"}
            style={{ shadowOpacity: 80, elevation: 15 }}
          />
        </View>

        <View style={styles.featureSettings}>
          <TouchableOpacity style={styles.buttonSettings}>
            <MaterialCommunityIcons
              name="account-circle-outline"
              size={24}
              color="black"
              style={{ marginRight: 5, marginLeft: 15 }}
            />
            <Text variant="titleMedium">Name: User</Text>
          </TouchableOpacity>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={closeModal}
          >
            <TouchableWithoutFeedback onPress={closeModal}>
              <View style={styles.modalContainer}>
                <View style={styles.modalContent} onPress={handleModalPress}>
                  <Text variant="titleLarge" style={styles.modalTitle}>
                    My Details:{" "}
                  </Text>
                  <View style={styles.modalTextnIconAligned}>
                    <EvilIcons
                      name="user"
                      size={24}
                      color="black"
                      style={styles.modalIcons}
                    />
                    <Text variant="titleMedium">Name: User</Text>
                  </View>
                  <View style={styles.modalTextnIconAligned}>
                    <MaterialIcons
                      name="place"
                      size={24}
                      color="black"
                      style={styles.modalIcons}
                    />
                    <Text variant="titleMedium">
                      Address: Cagayan De Oro City
                    </Text>
                  </View>
                  <View style={styles.modalTextnIconAligned}>
                    <MaterialIcons
                      name="phone"
                      size={24}
                      color="black"
                      style={styles.modalIcons}
                    />
                    <Text variant="titleMedium">Phone Number:</Text>
                  </View>
                  <View style={styles.modalTextnIconAligned}>
                    <Zocial
                      name="email"
                      size={24}
                      color="black"
                      style={styles.modalIcons}
                    />
                    <Text variant="titleMedium">Email: User@gmail.com</Text>
                  </View>
                  <TouchableOpacity onPress={closeModal}></TouchableOpacity>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
          <TouchableOpacity style={styles.buttonSettings} onPress={openModal}>
            <MaterialCommunityIcons
              name="account-details"
              size={24}
              color="black"
              style={{ marginRight: 5, marginLeft: 15 }}
            />
            <Text variant="titleMedium">My Details</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonSettings}>
            <MaterialCommunityIcons
              name="account-lock-open-outline"
              size={24}
              color="black"
              style={{ marginRight: 5, marginLeft: 15 }}
            />
            <Text variant="titleMedium">Reset Password</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logoutButton}>
            <MaterialIcons
              name="logout"
              size={24}
              color="black"
              style={{ marginRight: 5, marginLeft: 15 }}
            />
            <Text variant="titleMedium">Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#BAE8E8",
    marginBottom: 25,
  },
  titleMedium: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 5,
  },
  container: {
    flex: 1,
    backgroundColor: "#E6E6EA",
  },
  featureContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  featureSettings: {},
  userLogoSettings: {
    marginBottom: 40,
  },
  buttonSettings: {
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
    width: 250,
    paddingVertical: 10,
    borderRadius: 10,
    shadowOpacity: 80,
    elevation: 15,
    marginTop: 10,
  },
  logoutButton: {
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "flex-start",

    backgroundColor: "#fff",
    width: 250,
    paddingVertical: 10,
    borderRadius: 10,
    shadowOpacity: 80,
    elevation: 15,
    marginTop: 70,
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    gap: 10,
    elevation: 5,
  },
  modalTitle: {
    marginBottom: 10,
  },
  modalTextnIconAligned: {
    flexDirection: "row",
  },
  modalIcons: {
    marginRight: 5,
  },
});
