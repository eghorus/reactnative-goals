import { useState } from "react";
import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native";

export default function AddGoalForm({ setGoals, isModalVisible, closeModal }) {
  const [goalInput, setGoalInput] = useState({});

  const goalInputChangeHandler = (textInput) => {
    setGoalInput(textInput);
  };
  const addGoalHandler = () => {
    setGoals((prevState) => [...prevState, { text: goalInput, id: prevState.length + 1 }]);
    setGoalInput("");
  };

  return (
    <Modal visible={isModalVisible} animationType="slide" transparent={true}>
      <View style={styles.modalContent}>
        <Image source={require("../assets/goal.png")} style={styles.image} />
        <TextInput
          placeholder="My course goal is ..."
          style={styles.goalTextInput}
          value={goalInput}
          onChangeText={goalInputChangeHandler}
        />
        <View style={styles.buttonsContainer}>
          <Button title="Add Goal" color="#ec4899" onPress={addGoalHandler} />
          <Button title="Cancel" color="#10b981" onPress={closeModal} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(67,56,202,0.9)",
    paddingHorizontal: 24,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 24,
  },
  goalTextInput: {
    width: "100%",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 6,
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "55%",
  },
});
