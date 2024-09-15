"use client";
import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  Pressable,
  PressableProps,
  View,
  PressableStateCallbackType,
} from "react-native";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils"; // Assuming you have a `cn` utility function
import ReactElement from "react";

const buttonTextVariants = cva(
  "dark:text-white whitespace-nowrap text-sm font-medium",
  {
    variants: {
      variant: {
        default: "text-primary-foreground hover:bg-primary/90",
        destructive: "text-destructive-foreground",
        outline: "hover:text-accent-foreground",
        secondary: "text-secondary-foreground",
        ghost: "hover:text-accent-foreground",
        link: "text-primary",
        primary: "text-white text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
const buttonVariants = cva(
  "inline-flex  items-center justify-center ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        primary:
          "bg-purple-600 text-white text-accent-foreground hover:bg-purple-700",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "px-8 leading-6 h-14",
        icon: "h-10 w-10 hover:text-blue-400",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends PressableProps,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<View, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    const [state, setState] = useState<PressableStateCallbackType>({
      pressed: false,
    });
    const children = props.children;
    return (
      <Pressable
        className={cn(className, buttonVariants({ variant, size }))}
        ref={ref}
        onPressIn={(e) => {
          setState({ pressed: true });
        }}
        onPressOut={(e) => {
          setState({ pressed: false });
        }}
        {...props}
      >
        <Text className={buttonTextVariants({ variant })}>
          {isReactNode(children) ? children : children(state)}{" "}
        </Text>
      </Pressable>
    );
  }
);
Button.displayName = "Button";

export { Button };

function isReactNode(value: any): value is React.ReactNode {
  return React.isValidElement(value) || typeof value === "string";
}
