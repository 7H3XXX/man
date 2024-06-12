export type TimelineItemProps = {
  date: string;
  company?: string;
  school?: string;
  diploma?: string;
  activities?: string[];
  skills?: string[];
};

export function TimelineItem({
  itemData,
}: {
  itemData: TimelineItemProps;
  key: number;
}) {
  return (
    <div className="mb-16 flex gap-x-3 -ml-[4.15px]" data-desc="timeline-item">
      <div className="w-2 h-2 shrink-0 bg-neutral-400 rounded-full"></div>
      <div className="-mt-1">
        <h4 className="text-neutral-500/75 font-bold text-sm mb-1">
          {itemData.date}
        </h4>
        <h2 className="text-lg mb-2 font-semibold">
          {itemData.company ?? itemData.diploma}
        </h2>
        {itemData.company ? (
          <>
            <ul className={`text-neutral-400/80 list-[circle] sm:ml-6 ml-4`}>
              {itemData.activities?.map((activity: string, index: number) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>
            <div className="pt-4 flex flex-wrap">
              {itemData.skills?.map((tag, idx) => (
                <p
                  key={idx}
                  className={`leading-5 mb-2 border border-zinc-700 text-gray-300 bg-transparent rounded-md text-xs mr-2 px-1`}
                >
                  {tag}
                </p>
              ))}
            </div>
          </>
        ) : null}
        {itemData.school ? (
          <p className="text-sm text-neutral-400/80">{itemData.school}</p>
        ) : null}
      </div>
    </div>
  );
}
