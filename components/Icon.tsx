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
