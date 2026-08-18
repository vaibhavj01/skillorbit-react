export default function ReviewStars({ rating = 5, size = 16, className = "" }) {
  return (
    <span className={`inline-flex items-center gap-0.5 ${className}`} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          aria-hidden="true"
          className={index < rating ? "text-[#7CFF00]" : "text-white/20"}
        >
          <path
            fill="currentColor"
            d="M12 3.4l2.47 5.01 5.53.8-4 3.9.94 5.5L12 16.9 7.06 18.61l.94-5.5-4-3.9 5.53-.8L12 3.4z"
          />
        </svg>
      ))}
    </span>
  );
}
