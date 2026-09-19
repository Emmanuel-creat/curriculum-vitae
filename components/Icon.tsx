import { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement> & { size?: number };

function Base({ size = 20, children, ...rest }: Props & { children: React.ReactNode }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  );
}

export function IconPin(props: Props) {
  return (
    <Base {...props}>
      <path d="M12 22s7-7.5 7-13a7 7 0 1 0-14 0c0 5.5 7 13 7 13Z" />
      <circle cx="12" cy="9" r="2.5" />
    </Base>
  );
}

export function IconAcademic(props: Props) {
  return (
    <Base {...props}>
      <path d="M2 9.5 12 4.5l10 5-10 5-10-5Z" />
      <path d="M6 11.5v4.2c0 1.2 2.7 2.3 6 2.3s6-1.1 6-2.3v-4.2" />
      <path d="M20 10v5" />
    </Base>
  );
}

export function IconSearch(props: Props) {
  return (
    <Base {...props}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m20 20-3.6-3.6" />
    </Base>
  );
}

export function IconTools(props: Props) {
  return (
    <Base {...props}>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-6 6a1.5 1.5 0 0 0 0 2.1l.9.9a1.5 1.5 0 0 0 2.1 0l6-6a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.1-2.1 2.7-2.5Z" />
    </Base>
  );
}

export function IconDna(props: Props) {
  return (
    <Base {...props}>
      <path d="M6 3c0 4 12 5 12 9s-12 5-12 9" />
      <path d="M18 3c0 4-12 5-12 9s12 5 12 9" />
      <path d="M8.5 6h7" />
      <path d="M8.5 18h7" />
      <path d="M9.5 9h5" />
      <path d="M9.5 15h5" />
    </Base>
  );
}

export function IconCode(props: Props) {
  return (
    <Base {...props}>
      <path d="m8 8-4 4 4 4" />
      <path d="m16 8 4 4-4 4" />
      <path d="m14 5-4 14" />
    </Base>
  );
}

export function IconCube(props: Props) {
  return (
    <Base {...props}>
      <path d="M12 3 3 7.5v9L12 21l9-4.5v-9L12 3Z" />
      <path d="M3 7.5 12 12l9-4.5" />
      <path d="M12 12v9" />
    </Base>
  );
}

export function IconWrench(props: Props) {
  return (
    <Base {...props}>
      <path d="M16.5 3a4.5 4.5 0 0 0-4.4 5.6L3 17.7 6.3 21l9.1-9.1A4.5 4.5 0 1 0 16.5 3Zm0 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
    </Base>
  );
}

export function IconChart(props: Props) {
  return (
    <Base {...props}>
      <path d="M3 3v18h18" />
      <rect x="6.5" y="12" width="2.5" height="6" rx="0.6" />
      <rect x="11" y="8" width="2.5" height="10" rx="0.6" />
      <rect x="15.5" y="4.5" width="2.5" height="13.5" rx="0.6" />
    </Base>
  );
}

export function IconChip(props: Props) {
  return (
    <Base {...props}>
      <rect x="6" y="6" width="12" height="12" rx="1.5" />
      <rect x="9" y="9" width="6" height="6" rx="0.6" />
      <path d="M9 3v3M12 3v3M15 3v3M9 18v3M12 18v3M15 18v3M3 9h3M3 12h3M3 15h3M18 9h3M18 12h3M18 15h3" />
    </Base>
  );
}

export function IconSparkle(props: Props) {
  return (
    <Base {...props}>
      <path d="M12 3c0 4 2 6 6 6-4 0-6 2-6 6 0-4-2-6-6-6 4 0 6-2 6-6Z" />
      <path d="M19 15c0 1.5.8 2.3 2 2.5-1.2.2-2 1-2 2.5 0-1.5-.8-2.3-2-2.5 1.2-.2 2-1 2-2.5Z" />
    </Base>
  );
}
