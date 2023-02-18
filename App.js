import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import AddGoalForm from "./components/AddGoalForm";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  return (
    <View style={styles.appContainer}>
      <Button title="Add Goal" color="#ec4899" onPress={openModal} />
      <AddGoalForm setGoals={setGoals} isModalVisible={isModalVisible} closeModal={closeModal} />
      <View style={styles.listContainer}>
        <Text style={styles.listHeading}>MY GOALS</Text>
        <FlatList
          data={goals}
          renderItem={(itemData) => <GoalItem itemData={itemData} setGoals={setGoals} />}
          keyExtractor={(item, index) => item.id}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  listContainer: {
    flex: 1,
    justifyContent: "flex-start",
    marginTop: 20,
  },
  listHeading: {
    marginBottom: 14,
    fontSize: 24,
    textAlign: "center",
  },
});
