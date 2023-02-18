import { Pressable, StyleSheet, Text, View } from "react-native";

export default function GoalItem({ itemData, setGoals }) {
  const deleteGoalHandler = (id) => {
    setGoals((prevState) => prevState.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.goalItemContainer}>
      <Pressable
        android_ripple={{ color: "#818cf8" }}
        style={styles.goalItem}
        onPress={deleteGoalHandler.bind(this, itemData.item.id)}
      >
        <Text style={styles.goalText}>
          {itemData.item.id}. {itemData.item.text}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItemContainer: {
    overflow: "hidden",
    margin: 6,
    borderRadius: 8,
  },
  goalItem: {
    backgroundColor: "#4f46e5",
    padding: 8,
  },
  goalText: {
    color: "#ffffff",
  },
});
