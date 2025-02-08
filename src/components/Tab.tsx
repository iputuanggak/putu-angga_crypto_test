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
    <ul>
      <li>
        {labelList.map((l, i) => (
          <Tab
            label={l}
            isActive={l === selected}
            key={i}
            onClick={() => onSelect(l)}
          />
        ))}
      </li>
    </ul>
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
      className={`px-2 pt-2 space-y-2 font-bold hover:text-[#E5933A] w-16 ${
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
