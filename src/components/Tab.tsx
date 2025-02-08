export default function Tabs({
  labelList,
  selected,
  onSelect,
}: {
  labelList: string[];
  selected: string;
  onSelect: (selectedTab: string) => void;
}) {
  return (
    <div className="w-full overflow-x-auto">
      <ul className="flex gap-0">
        {labelList.map((l, i) => (
          <Tab
            label={l}
            isActive={l === selected}
            key={i}
            onClick={() => onSelect(l)}
          />
        ))}
      </ul>
    </div>
  );
}

function Tab({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      className={`min-w-16 space-y-2 px-2 pt-2 font-bold hover:text-[#E5933A] ${
        isActive && "text-[#E5933A]"
      }`}
      onClick={onClick}
    >
      {label}
      {isActive ? (
        <img src="/images/tab-border.svg" className="mx-auto" alt="" />
      ) : null}
    </button>
  );
}
