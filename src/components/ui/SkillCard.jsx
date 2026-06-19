export const SkillCard = ({ icon, name }) => {
  return (
    <div
      className="
      flex flex-col items-center justify-center
      p-4 rounded-xl
      border border-gray-700
      bg-[#0d1f2d]
      hover:border-primary
      hover:-translate-y-1
      transition-all duration-300
      "
    >
      <div className="text-4xl text-primary mb-2">{icon}</div>
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
};
