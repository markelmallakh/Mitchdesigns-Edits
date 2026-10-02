import * as React from "react";

/**
 * Minimal Slot — merges props (incl. className + ref) onto a single child element.
 * Used by Button for the `asChild` pattern.
 */
type SlotProps = {
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

export const Slot = React.forwardRef<HTMLElement, SlotProps>(
  ({ children, ...props }, ref) => {
    if (!React.isValidElement(children)) {
      return <>{children}</>;
    }

    const child = children as React.ReactElement<
      React.HTMLAttributes<HTMLElement> & { ref?: React.Ref<HTMLElement> }
    >;

    return React.cloneElement(child, {
      ...props,
      ...child.props,
      className: [props.className, child.props.className]
        .filter(Boolean)
        .join(" "),
      ref,
    });
  },
);

Slot.displayName = "Slot";
