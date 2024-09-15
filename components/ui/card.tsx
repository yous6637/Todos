import React from "react";
import { View, Text, type ViewProps, TextProps } from "react-native";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils"; // Assuming you have a `cn` utility function

const cardVariants = cva("rounded-lg border bg-white shadow-sm", {
  variants: {
    // Basic styles
    variant: {
      default: "border-gray-200",
      outline: "border-gray-200 bg-white hover:border-gray-300",
      inverse: "bg-gray-800 border-gray-700 text-white",
      primary: "bg-blue-500 border-blue-400 text-white",
      secondary: "bg-gray-200 border-gray-200 text-gray-700",
      success: "bg-green-200 border-green-200 text-green-700",
      danger: "bg-red-200 border-red-200 text-red-700",
      warning: "bg-yellow-200 border-yellow-200 text-yellow-700",
      info: "bg-blue-200 border-blue-200 text-blue-700",
      light: "bg-gray-100 border-gray-100 text-gray-700",
      dark: "bg-gray-800 border-gray-700 text-white",
    },
    size: {
      sm: "rounded-md p-3",
      md: "rounded-lg p-4",
      lg: "rounded-xl p-6",
    },
    shadow: {
      elevated: "shadow-md",
      outlined: "border-gray-200",
      shadowless: "shadow-none",
    },
  },
  defaultVariants: {
    shadow: "elevated",
    variant: "primary",
    size: "md",
  },
});

export interface CardProps
  extends ViewProps,
    VariantProps<typeof cardVariants> {
  asChild?: boolean;
}

const Card = React.forwardRef<View, CardProps>(
  ({ className, variant, size, shadow, ...props }, ref) => (
    <View
      ref={ref}
      className={cn(cardVariants({ variant, size, shadow }), className)} // Apply card variants if defined
      {...props}
    >
      {props.children}
    </View>
  )
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<View, ViewProps>(
  ({ className, ...props }, ref) => (
    <View
      ref={ref}
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    >
      {props.children}
    </View>
  )
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<Text, TextProps>(
  ({ className, ...props }, ref) => (
    <Text
      ref={ref}
      className={cn(
        "text-2xl font-semibold leading-none tracking-tight",
        className
      )}
      {...props}
    >
      {props.children}
    </Text>
  )
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<Text, TextProps>(
  ({ className, ...props }, ref) => (
    <Text
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    >
      {props.children}
    </Text>
  )
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<View, ViewProps>(
  ({ className, ...props }, ref) => (
    <View ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<View, ViewProps>(
  ({ className, ...props }, ref) => (
    <View
      ref={ref}
      className={cn("flex items-center p-6 pt-0", className)}
      {...props}
    >
      {props.children}
    </View>
  )
);
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
};
