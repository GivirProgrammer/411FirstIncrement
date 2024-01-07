// InputPersonalInformation.js
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from "@react-navigation/native";
import { SelectList } from 'react-native-dropdown-select-list'
import { Dropdown } from 'rn-simple-dropdown-picker';

const InputPersonalInformation = () => {
  const navigation = useNavigation();
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('Male'); // Default to Male
  const [exerciseLevel, setExerciseLevel] = useState(''); // Default to Male
  const [fitnessLevel, setFitnessLevel] = useState('beginner'); // Default to Male


  const savePersonalInfo = () => {
    const genderValue = gender === 'Male' ? 0 : 1;

    const user_info = {
      age,
      weight,
      height,
      gender: genderValue,
      exerciseLevel,
      fitnessLevel,
    };

    console.log("Saved Personal Info:", user_info);
    navigation.navigate("CreateWorkOut", { user_info });
  };
  console.log(exerciseLevel);
  return (
    <View style={styles.container}>
      <Text>Enter Personal Information:</Text>

      <TextInput
        style={styles.input}
        placeholder="Age"
        keyboardType="numeric"
        value={age}
        onChangeText={(text) => setAge(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Weight (kg)"
        keyboardType="numeric"
        value={weight}
        onChangeText={(text) => setWeight(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Height (cm)"
        keyboardType="numeric"
        value={height}
        onChangeText={(text) => setHeight(text)}
      />

      <Text>Gender:</Text>
      <RNPickerSelect
        value={gender}
        onValueChange={(value) => setGender(value)}
        items={[
          { label: 'Male', value: 'Male',color:'black' },
          { label: 'Female', value: 'Female',color:'black' },
        ]}
      />

    <Text>Exercise Level:</Text>
      <RNPickerSelect
        value={exerciseLevel}
        onValueChange={(value) => setExerciseLevel(value)}
        items={[
          { label: 'Sedentary (little or no exercise)', value: 1.2 },
          { label: 'Lightly active (light exercise/sports 1-3 days/week)', value: 1.375,color:'black' },
          { label: 'Moderately active (moderate exercise/sports 3-5 days/week)', value: 1.55,color:'black'},
          { label: 'Very active (hard exercise/sports 6-7 days a week)', value: 1.725,color:'black' },
          { label: 'If you are extra active (very hard exercise/sports & a physical job)', value: 1.9,color:'black'},
        ]}
      />
     
      <Text>Fitness Level:</Text>
      <RNPickerSelect
        value={fitnessLevel}
        onValueChange={(value) => setFitnessLevel(value)}
        items={[
          { label: 'Beginner', value: 'beginner',color:'black' },
          { label: 'Intermediate', value: 'intermediate',color:'black' },
          { label: 'Advanced', value: 'advanced',color:'black' },
        ]}
      />

      <Button onPress={savePersonalInfo} title="Save Personal Info" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default InputPersonalInformation;
