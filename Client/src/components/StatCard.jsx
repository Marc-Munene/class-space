const StatCard = ({ title, value, icon: Icon, color }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md p-8 flex items-center gap-4 border-l-4 ${color}`}
    >
      <div className="bg-gray-100 p-2 rounded-full">
        <Icon className="text-gray-700 w-4 h-4" />
      </div>
      <div>
        <h4 className="text-gray-600 text-sm">{title}</h4>
        <p className="text-sm font-semibold">{value}</p>
      </div>
    </div>
  );
};

export { StatCard };
