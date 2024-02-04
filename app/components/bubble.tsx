export function Bubble({ content }: { content: string }) {
  return (
    <div className="py-3 px-5 border-2 rounded-md border-neutral-700/75 text-center text-neutral-300/90">
      {content}
    </div>
  );
}
