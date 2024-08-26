export default function SectionTitleRedBlack({ black, red }) {
  return (
    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
      {black} <span className="text-[#d81033]">{red}</span>
    </h3>
  );
}
