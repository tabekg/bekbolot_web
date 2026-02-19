const ABOUT_ME: [string, string][] = [
  ["Полное имя", "Бекболот Тажибаев"],
  ["Дата рождения", "18.09.1999"],
  ["Семейное положение", "холост"],
];

function AboutMeContainer() {
  return (
    <div className={"container mx-auto"}>
      <h1 className="text-3xl my-5 text-center text-gray-800 drop-shadow">
        Обо мне
      </h1>

      <div className={"grid grid-cols-2 gap-y-3 gap-x-5 max-w-md mx-auto"}>
        {ABOUT_ME.map(([label, value]) => (
          <div key={label} className={"contents"}>
            <div className={"text-right text-gray-700"}>{label}</div>
            <div>{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutMeContainer;
