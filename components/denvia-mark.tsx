export function DenviaMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="1.25" y="1.25" width="29.5" height="29.5" rx="8" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M11 9.5h4.4c4 0 6.8 2.7 6.8 6.5s-2.8 6.5-6.8 6.5H11V9.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M16 13.6v4.8M13.6 16h4.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}
