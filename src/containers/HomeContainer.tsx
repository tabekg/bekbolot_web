import photo from '../assets/photo.jpg'
import {SocialIcon} from "react-social-icons";
import {Link} from "react-router-dom";

const LINKS = [
  {label: 'Обо мне', link: '/about-me'},
  {label: 'Проекты', link: '/projects'},
  {label: 'Навыки', link: '/skills'},
]

function HomeContainer() {
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center flex-col gap-5">
        <img src={photo} alt={'Bekbolot Tazhibaev'} className={'rounded-full w-32 border'}/>
        <h1 className="text-3xl text-center text-gray-800 drop-shadow">
          Бекболот Тажибаев
        </h1>
        <div className={'text-center text-gray-600'}>Full Stack разработчик с опытом более 6 лет.</div>
        <div>
          {LINKS.map((g, i) => (
            <>
              <Link className={'text-[#C68E52] hover:bg-amber-50 transition-colors p-2 rounded'} to={g.link}>{g.label}</Link>
              {i + 1 !== LINKS.length ? <span className={'mx-2 text-gray-500'}>•</span> : ''}
            </>
          ))}
        </div>
        <div className={'flex flex-row gap-3'}>
          <SocialIcon url="https://github.com/tabekg" />
          <SocialIcon url="https://instagram.com/bekaaakg" />
          <SocialIcon url="mailto:tabekg@gmail.com" />
          <SocialIcon url="https://wa.me/996777171171" network={'whatsapp'} />
        </div>
      </div>
    </>
  )
}

export default HomeContainer
