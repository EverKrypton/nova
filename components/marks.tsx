type MarkProps = {
  size?: number;
  className?: string;
};

export function ArrowUpRight({ size = 16, className }: MarkProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M3.5 12.5 12.5 3.5M5 3.5h7.5V11" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function ArrowDown({ size = 16, className }: MarkProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M8 3v10M3.5 8.5 8 13l4.5-4.5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function Tick({ size = 14, className }: MarkProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M2.5 8.5 6.2 12 13.5 4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function RegistrationMark({ size = 14, className }: MarkProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="10" cy="10" r="4.4" stroke="currentColor" strokeWidth="1" />
      <path d="M10 0v20M0 10h20" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export function Asterisk({ size = 18, className }: MarkProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M12 2.5v19M3.8 7.25l16.4 9.5M20.2 7.25l-16.4 9.5"
        stroke="currentColor"
        strokeWidth="1.3"
      />
    </svg>
  );
}

export function SpeechBubble({ size = 16, className }: MarkProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M2.5 5.2c0-1.1.9-2 2-2h11c1.1 0 2 .9 2 2v7c0 1.1-.9 2-2 2H8.2l-4.3 3.1c-.5.4-1.4 0-1.4-.7V5.2Z"
        stroke="currentColor"
        strokeWidth="1.3"
      />
    </svg>
  );
}

export function Barcode({ className }: { className?: string }) {
  const bars = [3, 1, 2, 1, 1, 4, 1, 2, 3, 1, 1, 2, 4, 1, 2, 1, 3, 1, 1, 3, 2, 1, 4, 1];
  return (
    <svg
      className={className}
      viewBox="0 0 120 28"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      {bars.reduce<{ x: number; nodes: React.ReactNode[] }>(
        (acc, width, index) => {
          if (index % 2 === 0) {
            acc.nodes.push(
              <rect key={index} x={acc.x} y="0" width={width} height="28" fill="currentColor" />,
            );
          }
          acc.x += width + 1.6;
          return acc;
        },
        { x: 0, nodes: [] },
      ).nodes}
    </svg>
  );
}
