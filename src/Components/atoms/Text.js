export default function Text({ variant, children }) {
  const styles = {
    h1: "text-5xl font-bold leading-tight",
    h3: "text-2xl font-bold text-[#00abf0]",
    p: "mt-5 mb-10 text-base leading-relaxed",
  };
  return <div className={styles[variant]}>{children}</div>;
}
