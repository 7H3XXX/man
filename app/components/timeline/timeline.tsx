import { TimelineItem, TimelineItemProps } from "./timeline-item";


export function Timeline({ data }: {data: TimelineItemProps[]}) {
  return (
    data.length > 0 && (
      <div data-desc="timeline-container" className="mb-16 border-l-[1.5px] border-l-neutral-400">
        {data.map((itemData, idx) => (
          <TimelineItem itemData={itemData} key={idx} />
        ))}
      </div>
    )
  );
}
