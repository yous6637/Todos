import { cn } from '@/lib/utils';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';


interface TaskProps {
  task: string
  time?: string
  isDone?: boolean
}

const TaskItem = ({ task, time, isDone }: TaskProps) => (
  <View className="flex-row items-center justify-between py-3 border-b border-gray-200">
    <View>
      <Text className="text-base font-medium">{task}</Text>
      {time && <Text className="text-sm text-gray-500">Usually completed at {time}</Text>}
      {isDone && <Text className="text-sm text-gray-500">Done</Text>}
    </View>
    <TouchableOpacity className={`w-6 h-6 rounded-full border-2 ${isDone ? 'bg-gray-400 border-gray-400' : 'border-gray-400'} flex items-center justify-center`}>
      {isDone && <View className="w-3 h-3 bg-white rounded-full" />}
    </TouchableOpacity>
  </View>
);

const TaskMasterTaskList = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const currentDay = 3; // Assuming Wednesday is the current day

  const theme = useTheme( )

  return (
    <ScrollView className= {cn({"dark": theme.dark, "light": !theme.dark})}>
    <View className="flex-1 bg-white">
      <View className="p-4 border-b border-gray-200">
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-xl font-bold">Today,    August 2</Text>
          <TouchableOpacity>
            <MaterialCommunityIcons name="star" size={24} color="#000" />
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="flex-row space-x-4">
            {days.map((day, index) => (
              <View key={day} className={`items-center ${index + 1 === currentDay ? 'bg-gray-200 rounded-full' : ''}`}>
                <Text className="text-sm">{day}</Text>
                <Text className="text-lg font-bold">{index + 2}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>

      <ScrollView className="flex-1 px-4">
        <Text className="text-lg font-bold my-4">My tasks</Text>
        <TaskItem task="Read 10 pages of a book" time="10.15PM" />
        <TaskItem task="Meditate for 5 minutes" isDone />
        <TaskItem task="Have fruits for breakfast" isDone />
        <TaskItem task="Have nutritious lunch" time="12.15PM" />
        <TaskItem task="HIIT workout" time="10.15PM" />
        <TaskItem task="Sleep before 10 PM" time="10.15PM" />
      </ScrollView>

      
    </View>
    </ScrollView>
  );
};

export default TaskMasterTaskList;