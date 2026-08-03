import {
  ArrowDown,
  ArrowDownLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Minus,
  Plus,
  X,
  type LucideIcon,
  type LucideProps,
} from "lucide-react";

type UiIconProps = Omit<LucideProps, "aria-hidden" | "focusable">;

function createUiIcon(Icon: LucideIcon) {
  return function UiIcon({ className, ...props }: UiIconProps) {
    return (
      <Icon
        className={["ui-icon", className].filter(Boolean).join(" ")}
        size="1em"
        strokeWidth={2}
        aria-hidden="true"
        focusable="false"
        {...props}
      />
    );
  };
}

export const ArrowRightIcon = createUiIcon(ArrowRight);
export const ArrowUpRightIcon = createUiIcon(ArrowUpRight);
export const ArrowDownIcon = createUiIcon(ArrowDown);
export const ArrowDownLeftIcon = createUiIcon(ArrowDownLeft);
export const CheckIcon = createUiIcon(Check);
export const ChevronDownIcon = createUiIcon(ChevronDown);
export const CloseIcon = createUiIcon(X);
export const PlusIcon = createUiIcon(Plus);
export const MinusIcon = createUiIcon(Minus);

export function DisclosureIcons() {
  return (
    <span className="disclosure-icons" aria-hidden="true">
      <PlusIcon className="disclosure-icons__plus" />
      <MinusIcon className="disclosure-icons__minus" />
    </span>
  );
}
