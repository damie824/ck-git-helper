export default function MainButtons({
  title,
  description,
  onClick,
}: {
  title: string;
  description: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full text-start group border-border border p-4 h-full rounded-lg hover:border-primary transition-colors duration-300"
    >
      <div className="flex gap-2 items-center">
        <p className="text-2xl font-bold">{title}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="size-4 group-hover:ml-2 transition-[margin] duration-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </div>
      <p className="text-sm text-white/40 mt-3">
        {description.split("\n").map((line, i) => (
          <span key={i}>
            {line}
            <br />
          </span>
        ))}
      </p>
    </button>
  );
}
