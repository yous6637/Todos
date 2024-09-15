import React, { useState } from "react";
import { TouchableOpacity, Text, Pressable, PressableProps, View, PressableStateCallbackType, Linking } from "react-native";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils"; // Assuming you have a `cn` utility function
import ReactElement from 'react';

import { Link, LinkProps } from 'expo-router';
import { LinkComponent } from "expo-router/build/link/Link";


const NavLinkVariants = cva(
  "inline-flex dark:text-white gap-2 items-center  whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        primary:
          "bg-sky-500 text-white text-accent-foreground hover:bg-sky-600",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10 hover:text-blue-400",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface NavLinkProps
  extends LinkProps<string>,
    VariantProps<typeof NavLinkVariants> {
  asChild?: boolean;
  Icon? : React.ReactNode
  label? : string
}



const NavLink = React.forwardRef<typeof Link, NavLinkProps>(
    ({ className, variant,href ,size, Icon, label, ...props }, ref) => {
      const [state, setState] = useState<PressableStateCallbackType>({pressed: false})
      return (
        <Link
          className={cn(NavLinkVariants({ variant, size }), className)}
          href={href}


          {...props}
        >
          {Icon} {label}
        </Link>
      );
    }
  );
  NavLink.displayName = 'NavLink';



  export { NavLink };

  function isReactNode(value: any): value is React.ReactNode {
    return React.isValidElement(value);
  }