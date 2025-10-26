import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

// Simple reusable classname you can drop into any Button via the `className` prop
// Slightly reduced vertical padding for less vertical bulk
export const BUTTON_SMALL = "text-xs px-3 py-1 rounded-full";
export const BUTTON_LARGE = "text-base px-6 py-2 rounded-full";

// Helper to compose full button classes (wraps the existing buttonVariants)
export function getButtonClass(variant?: any, size?: any, extra = "") {
  // buttonVariants accepts an object; pass only if provided
  const base = buttonVariants({
    ...(variant ? { variant } : {}),
    ...(size ? { size } : {}),
  } as any);
  return cn(base, extra);
}
