"use client";

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { View, ViewProps  } from "react-native"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        success : "border-transparent bg-green-400 text-green-500-foreground hover:bg-green-500/80",
        warning : "border-transparent bg-yellow-400 text-yellow-500-foreground hover:bg-yellow-500/80",
        error : "border-transparent bg-red-400 text-red-500-foreground hover:bg-red-500/80",
        info : "border-transparent bg-blue-400 text-blue-500-foreground hover:bg-blue-500/80",
        blue : "inline-block bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded",
        green : "inline-block bg-green-100 text-green-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded",
        red : "inline-block bg-red-100 text-red-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends ViewProps,
    VariantProps<typeof badgeVariants> {rounded ?: boolean}

function Badge({ className, variant,rounded, ...props }: BadgeProps) {
  return (
    <View className={cn(badgeVariants({ variant }), className, {"rounded-full": rounded})} {...props} />
  )
}

export { Badge, badgeVariants }
