import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const DonationPage = () => {
  const [selectedAmount, setSelectedAmount] = useState(0);
  const [customAmount, setCustomAmount] = useState('');

  const donationAmounts = [5, 10, 20, 50, 100];

  return (
    <View className="flex-1 bg-white">
      <View className="flex-row items-center p-4 border-b border-gray-200">
        <TouchableOpacity className="mr-4">
          <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-xl font-semibold">Donate</Text>
      </View>

      <ScrollView className="flex-1 p-4">
        <Text className="text-xl font-bold mb-4">Select Donation Amount</Text>
        
        {donationAmounts.map((amount) => (
          <TouchableOpacity 
            key={amount}
            className={`flex-row items-center mb-3 p-3 border rounded-full ${selectedAmount === amount ? 'border-purple-600' : 'border-gray-300'}`}
            onPress={() => setSelectedAmount(amount)}
          >
            <View className={`w-5 h-5 rounded-full border-2 mr-3 ${selectedAmount === amount ? 'border-purple-600' : 'border-gray-300'}`}>
              {selectedAmount === amount && <View className="w-3 h-3 bg-purple-600 rounded-full m-auto" />}
            </View>
            <Text className="text-lg">${amount}</Text>
          </TouchableOpacity>
        ))}

        <Text className="text-xl font-bold mt-6 mb-4">Custom Amount</Text>
        <View className="flex-row items-center border border-gray-300 rounded-full p-3 mb-6">
          <Text className="text-lg mr-2">$</Text>
          <TextInput
            className="flex-1 text-lg"
            keyboardType="numeric"
            placeholder="Enter amount"
            value={customAmount}
            onChangeText={setCustomAmount}
          />
        </View>
      </ScrollView>

      <View className="p-4">
        <TouchableOpacity className="bg-purple-600 rounded-full py-4">
          <Text className="text-white text-center text-lg font-semibold">Donate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DonationPage;