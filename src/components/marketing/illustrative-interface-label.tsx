type IllustrativeInterfaceLabelProps = {
  className?: string;
};

export function IllustrativeInterfaceLabel({
  className,
}: IllustrativeInterfaceLabelProps) {
  return (
    <p
      className={[
        "m-0 max-w-[34ch] text-[0.65rem] leading-[1.35] text-[var(--text-muted)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      Illustrative product interface; not customer results.
    </p>
  );
}
