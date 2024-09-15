import React, { createContext, useContext, useId } from 'react';
import { View, Text, TextInput, TextInputProps } from 'react-native';
import { useForm, Controller, UseFormReturn } from 'react-hook-form';

// Form Context
const FormContext = createContext<UseFormReturn | null>(null);

export const Form = ({ children, ...formProps }) => {
  const methods = useForm(formProps);
  return <FormContext.Provider value={methods}>{children}</FormContext.Provider>;
};

// Form Field Context
const FormFieldContext = createContext<{ name: string } | null>(null);

export const FormField = ({ name, ...props }) => {
  const form = useContext(FormContext);
  if (!form) throw new Error('FormField must be used within a Form');

  return (
    <FormFieldContext.Provider value={{ name }}>
      <Controller
        control={form.control}
        name={name}
        {...props}
      />
    </FormFieldContext.Provider>
  );
};

// Custom hook to use form field
const useFormField = () => {
  const fieldContext = useContext(FormFieldContext);
  const form = useContext(FormContext);

  if (!fieldContext) throw new Error('useFormField must be used within a FormField');
  if (!form) throw new Error('useFormField must be used within a Form');

  const { name } = fieldContext;
  const { formState } = form;

  return {
    name,
    formState,
    error: formState.errors[name],
  };
};

// Form Item
export const FormItem = ({ children, className, ...props }) => {
  return (
    <View className={`space-y-2 ${className || ''}`} {...props}>
      {children}
    </View>
  );
};

// Form Label
export const FormLabel = ({ children, className, ...props }) => {
  const { error } = useFormField();
  return (
    <Text
      className={`text-sm font-medium ${error ? 'text-red-500' : ''} ${className || ''}`}
      {...props}
    >
      {children}
    </Text>
  );
};

// Form Control
export const FormControl = ({ className, ...props }: TextInputProps) => {
  const { error } = useFormField();
  return (
    <TextInput
      className={`p-2 border rounded ${error ? 'border-red-500' : 'border-gray-300'} ${className || ''}`}
      {...props}
    />
  );
};

// Form Description
export const FormDescription = ({ children, className, ...props }) => {
  return (
    <Text className={`text-sm text-gray-500 ${className || ''}`} {...props}>
      {children}
    </Text>
  );
};

// Form Message
export const FormMessage = ({ children, className, ...props }) => {
  const { error } = useFormField();
  if (!error) return null;
  return (
    <Text className={`text-sm text-red-500 ${className || ''}`} {...props}>
      {error.message || children}
    </Text>
  );
};

export { useForm, useFormField };
