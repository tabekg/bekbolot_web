const ABOUT_ME: {[keyof: string]: string} = {
  'Полное имя': 'Бекболот Тажибаев',
  'Дата рождения': '18.09.1999',
  'Семейное положение': 'холост'
}

function AboutMeContainer() {
  return (
    <>
      <div className={'container mx-auto'}>
        <h1 className="text-3xl my-5 text-center text-gray-800 drop-shadow">
          Обо мне
        </h1>

        <div className={'columns-2 gap-5'}>
          {Object.keys(ABOUT_ME).map(g => <div className={'text-right text-gray-700'}>{g}</div>)}
          {Object.values(ABOUT_ME).map(g => <div>{g}</div>)}
        </div>
      </div>
    </>
  )
}

export default AboutMeContainer
