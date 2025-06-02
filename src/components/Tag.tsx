export interface TagProps {
  title: string;
  color?: string;
  className?: string;
}

const Tag: React.FC<TagProps> = ({ title, color, className }) => {
  return (
    <span
      className={`tag relative px-4 py-1 rounded-full text-center text-sm before:absolute before:inset-0 before:rounded-full before:bg-[var(--tag-color)] dark:before:bg-[var(--tag-color-dark)] before:opacity-10 dark:saturate-[0.8] ${className}`}
      style={
        {
          '--tag-color': color || 'oklch(44.6% 0.03 256.802)',
          '--tag-color-dark': color || 'oklch(98.5% 0.002 247.839)',
          color: color,
        } as React.CSSProperties
      }
    >
      {title}
    </span>
  );
};

export default Tag;
