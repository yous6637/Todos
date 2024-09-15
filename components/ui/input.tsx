import React, { forwardRef } from 'react';
import { TextInput, TextInputProps, View } from 'react-native';

export interface InputProps extends TextInputProps {
  containerClassName?: string;
}

const Input = forwardRef<TextInput, InputProps>(
  ({ className, containerClassName, ...props }, ref) => {
    return (
      <View className={`my-2 ${containerClassName || ''}`}>
        <TextInput
          className={`h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder:text-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 ${className || ''}`}
          placeholderTextColor="#a1a1aa"
          ref={ref}
          {...props}
        />
      </View>
    );
  }
);

Input.displayName = "Input";

export { Input };
