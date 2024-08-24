export function PrimaryButton({ text }) {
  return (
    <button className="mt-8 inline-block bg-[#d81033] hover:bg-[#9b181b] text-white font-medium py-3 px-6 rounded-md transition duration-300">
      {text}
    </button>
  );
}

export function WhiteButton({ text }) {
  return (
    <button className="mt-8 inline-block bg-white hover:bg-slate-50 text-[#d81033] font-medium py-3 px-6 rounded-md transition duration-300">
      {text}
    </button>
  );
}
