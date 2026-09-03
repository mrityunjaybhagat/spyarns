// Signature decorative motif: an interlaced warp/weft thread pattern,
// referencing the loom structure underlying every yarn & fabric product.
export default function ThreadWeave({ className = "", variant = "light" }) {
  const stroke = variant === "light" ? "#f6f3ec" : "#7a1f2b";
  return (
    <svg
      className={className}
      viewBox="0 0 600 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {[0, 20, 40, 60, 80, 100].map((y, i) => (
        <path
          key={y}
          d={`M0 ${y} Q 75 ${y - 18}, 150 ${y} T 300 ${y} T 450 ${y} T 600 ${y}`}
          stroke={stroke}
          strokeOpacity={0.14 + (i % 2) * 0.08}
          strokeWidth="1.4"
        />
      ))}
    </svg>
  );
}
