import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { Feather } from '@expo/vector-icons';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';

export default function TaskDetailsScreen() {
  const [taskDetails, setTaskDetails] = useState('');
  const [category, setCategory] = useState('Work');
  const [deadline, setDeadline] = useState(new Date());
  const [tags, setTags] = useState(['Work']);
  const [newTag, setNewTag] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showCategoryPicker, setShowCategoryPicker] = useState(false);

  const categories = ['Work', 'Personal', 'Shopping', 'Health', 'Education'];

  const addTag = () => {
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
      setNewTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const onDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate || deadline;
    setShowDatePicker(false);
    setDeadline(currentDate);
  };

  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-lg font-semibold mb-2">Enter task details</Text>
      <TextInput
        className="border border-gray-300 rounded-lg p-2 mb-4"
        value={taskDetails}
        onChangeText={setTaskDetails}
        placeholder="Enter task details"
      />

      <View className="flex-row justify-between items-center mb-4">
        <Text className="font-semibold">Task list</Text>
        <TouchableOpacity 
          className="flex-row items-center border border-gray-300 rounded-lg px-3 py-2"
          onPress={() => setShowCategoryPicker(true)}
        >
          <Text>{category}</Text>
          <Feather name="chevron-down" size={16} color="black" className="ml-2" />
        </TouchableOpacity>
      </View>

      <View className="flex-row justify-between items-center mb-4">
        <Text className="font-semibold">Deadline</Text>
        <TouchableOpacity 
          className="flex-row items-center border border-gray-300 rounded-lg px-3 py-2"
          onPress={() => setShowDatePicker(true)}
        >
          <Text>{deadline.toLocaleDateString()}</Text>
          <Feather name="calendar" size={16} color="black" className="ml-2" />
        </TouchableOpacity>
      </View>

      <Text className="font-semibold mb-2">Task tags</Text>
      <View className="flex-row flex-wrap mb-4">
        {tags.map((tag, index) => (
          <TouchableOpacity 
            key={index} 
            className="bg-purple-100 rounded-full px-3 py-1 mr-2 mb-2 flex-row items-center"
            onPress={() => removeTag(tag)}
          >
            <Text className="text-purple-800 mr-1">{tag}</Text>
            <Feather name="x" size={12} color="#553C9A" />
          </TouchableOpacity>
        ))}
        <View className="flex-row items-center bg-gray-200 rounded-full px-3 py-1">
          <TextInput
            className="flex-1"
            value={newTag}
            onChangeText={setNewTag}
            placeholder="Add Tag"
            onSubmitEditing={addTag}
          />
          <TouchableOpacity onPress={addTag}>
            <Feather name="plus" size={16} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <Text className="font-semibold text-lg mb-2">Subtask:</Text>
      <TouchableOpacity className="flex-row items-center border border-gray-300 rounded-lg p-3 mb-4">
        <Feather name="plus" size={20} color="black" className="mr-2" />
        <Text>Add New Subtask</Text>
      </TouchableOpacity>

      <TouchableOpacity className="flex-row justify-between items-center bg-purple-100 rounded-lg p-3 mb-4">
        <View className="flex-row items-center">
          <View className="w-6 h-6 rounded-full bg-purple-500 mr-3" />
          <Text>Subtask details</Text>
        </View>
        <Feather name="chevron-right" size={20} color="black" />
      </TouchableOpacity>

      <View className="flex-row justify-between mt-4">
        <TouchableOpacity className="px-4 py-2">
          <Text className="text-gray-600">Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-purple-600 rounded-lg px-8 py-2">
          <Text className="text-white font-semibold">Save</Text>
        </TouchableOpacity>
      </View>

      {showDatePicker && (
        <DateTimePicker
          value={deadline}
          mode="datetime"
          display="default"
          onChange={onDateChange}
        />
      )}

      <Modal
        visible={showCategoryPicker}
        transparent={true}
        animationType="slide"
      >
        <View className="flex-1 justify-end bg-transparent bg-opacity-50">
          <View className="bg-white rounded-t-lg">
            <Picker
              selectedValue={category}
              onValueChange={(itemValue) => {
                setCategory(itemValue);
                setShowCategoryPicker(false);
              }}
            >
              {categories.map((cat, index) => (
                <Picker.Item key={index} label={cat} value={cat} />
              ))}
            </Picker>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}