import bekcargoImage from './assets/projects/bekcargo-512.png'
import spkImage from './assets/projects/spk.png'
import kitepKgImage from './assets/projects/kitepkg-1024.jpg'
import kerbenImage from './assets/projects/kerben.png'
import showGoUzImage from './assets/projects/showgo-uz.svg'
import basiliccoImage from './assets/projects/basilicco-qr.jpg'
import somgKgImage from './assets/projects/som-kg-684x301.png'
import kassirKgImage from './assets/projects/kassir-logo.png'

import bekCargoScreen1 from './assets/projects/bekcargo-screen-1.png'
import bekCargoScreen2 from './assets/projects/bekcargo-screen-2.png'
import bekCargoScreen3 from './assets/projects/bekcargo-screen-3.png'
import bekCargoScreen4 from './assets/projects/bekcargo-screen-4.png'

import kerbenScreen1 from './assets/projects/kerben-screen-1.png'
import kerbenScreen2 from './assets/projects/kerben-screen-2.png'

import spkScreen1 from './assets/projects/spk-screen-1.png'
import spkScreen2 from './assets/projects/spk-screen-2.png'

import appStoreSvg from './assets/download-on-the-app-store.svg'
import googlePlayPng from './assets/google-play.png'

import basiliccoScreen1 from './assets/projects/IMG_DDB53127650B-1.jpeg'

const BEKCARGO_SCREENS = [
  bekCargoScreen1,
  bekCargoScreen2,
  bekCargoScreen3,
  bekCargoScreen4,
]

const SPK_SCREENS = [
  spkImage,
  spkScreen1,
  spkScreen2,
]

const KERBEN_SCREENS = [
  kerbenImage,
  kerbenScreen1,
  kerbenScreen2,
]

const BASILICCO_SCREENS = [
  basiliccoScreen1,
]

export const PROJECTS = [
  {
    title: 'BekCargo', slug: 'bekcargo', platforms: ['ios', 'android', 'web'], content: (
      <>
        <div className={'text-center my-2 text-gray-700'}>Автоматизация и мобильные приложения для логистической
          компании BekCargo.
        </div>
        <div className={'grid md:grid-cols-2 gap-4 grid-cols-1'}>
          <div className={'text-right font-medium'}>Основные моменты</div>
          <div>
            <ul>
              <li>Работа со сканером</li>
              <li>Работа с вебсокет (pusher)</li>
              <li>Авторизация через тел. номер (SMS verification)</li>
              <li>Язык интерфейса русский и китайский</li>
              <li>Firebase Cloud Messaging (PUSH уведомление)</li>
            </ul>

            <div className={'mt-3 flex gap-2'}>
              <a href={'https://apps.apple.com/kg/app/bekcargo/id6474660949'} target={'_blank'}><img className={'h-12'}
                                                                                                     alt={'Download on the App Store'}
                                                                                                     src={appStoreSvg}/></a>
              <a href={'https://play.google.com/store/apps/details?id=kg.besoft.bekcargo.mobile'} target={'_blank'}><img
                className={'h-12'} alt={'Get it on Google Play'} src={googlePlayPng}/></a>
            </div>
          </div>
        </div>

        <div className={'my-5 flex gap-3 flex-col'}>
          {BEKCARGO_SCREENS.map(g => <img src={g} alt={''}/>)}
        </div>
      </>
    ), image: bekcargoImage
  },
  {
    title: 'SPK', slug: 'spk', platforms: ['web'], content: (
      <>
        <div className={'text-center my-2 text-gray-700'}>Внутренняя программа для автоматизации расчетов с клиентами.
        </div>
        <div className={'grid md:grid-cols-2 gap-4 grid-cols-1'}>
          <div className={'text-right font-medium'}>Основные моменты</div>
          <ul>
            <li>Работа с Excel (экспорт отчетов)</li>
            <li>Мобильная версия</li>
          </ul>
        </div>

        <div className={'my-5 flex gap-3 flex-col'}>
          {SPK_SCREENS.map(g => <img src={g} alt={''}/>)}
        </div>
      </>
    ), image: spkImage
  },
  {
    title: 'Kitep.KG', slug: 'kitep-kg', platforms: ['ios', 'android', 'web'], content: (
      <>
        <div className={'text-center my-2 text-gray-700'}>Приложение электронных книг.</div>
        <div className={'grid md:grid-cols-2 gap-4 grid-cols-1'}>
          <div className={'text-right font-medium'}>Основные моменты</div>
          <div>
            <ul>
              <li>Работа с PDF</li>
              <li>Работа с Local Storage (офлайн читение книг)</li>
            </ul>

            <div className={'mt-3 flex gap-2'}>
              <a href={'https://apps.apple.com/kg/app/%D0%BA%D0%B8%D1%82%D0%B5%D0%BF-kg/id6448975741'}
                 target={'_blank'}><img className={'h-12'}
                                        alt={'Download on the App Store'}
                                        src={appStoreSvg}/></a>
              <a href={'https://play.google.com/store/apps/details?id=kg.kitep.mobile'} target={'_blank'}><img
                className={'h-12'} alt={'Get it on Google Play'} src={googlePlayPng}/></a>
            </div>
          </div>
        </div>
      </>
    ), image: kitepKgImage
  },
  {
    title: 'Kerben', slug: 'kerben', platforms: ['ios', 'android', 'web'], content: (
      <>
        <div className={'text-center my-2 text-gray-700'}>Приложение для логистической компании для отслеживания
          водителей.
        </div>
        <div className={'grid md:grid-cols-2 gap-4 grid-cols-1'}>
          <div className={'text-right font-medium'}>Основные моменты</div>
          <div>
            <ul>
              <li>Работа с GPS tracking</li>
              <li>Работа с вебсокет (pusher)</li>
              <li>Работа с QR Code (camera)</li>
              <li>Язык интерфейса русский, китайский и английский</li>
              <li>Firebase Cloud Messaging (PUSH уведомление)</li>
              <li>Трекинг в фоновом режиме</li>
              <li>Google Maps</li>
            </ul>

            <div className={'mt-3 flex gap-2'}>
              <a href={''} target={'_blank'}><img className={'h-12'}
                                                  alt={'Download on the App Store'}
                                                  src={appStoreSvg}/></a>
              <a href={'https://play.google.com/store/apps/details?id=kg.besoft.kerben'} target={'_blank'}><img
                className={'h-12'} alt={'Get it on Google Play'} src={googlePlayPng}/></a>
            </div>
          </div>
        </div>

        <div className={'my-5 flex gap-3 flex-col'}>
          {KERBEN_SCREENS.map(g => <img src={g} alt={''}/>)}
        </div>
      </>
    ), image: kerbenImage
  },
  {
    title: 'ShowGo.UZ', slug: 'showgo-uz', platforms: ['ios', 'android', 'web'], content: (
      <>
        <div className={'text-center my-2 text-gray-700'}>Билетный оператор для Узбекстана.</div>
        <div className={'grid md:grid-cols-2 gap-4 grid-cols-1'}>
          <div className={'text-right font-medium'}>Основные моменты</div>
          <div>
            <ul>
              <li>Работа с SVG, PDF</li>
              <li>Работа с вебсокет (pusher)</li>
              <li>Работа с QR Code (camera)</li>
              <li>Работа с SMTP</li>
              <li>Язык интерфейса русский, узбекский и английский</li>
              <li>Яндекс Карты</li>
              <li>Firebase Auth (тел. номер)</li>
              <li>Интеграция с платежными системами</li>
            </ul>

            <div className={'mt-3'}>
              <a className={'text-blue-700'} href={'https://showgo.uz'} target={'_blank'}>Веб сайт https://showgo.uz</a>
            </div>

            <div className={'mt-3 flex gap-2'}>
              <a href={'https://apps.apple.com/kg/app/showgo/id6454899255'} target={'_blank'}><img className={'h-12'}
                                                                                                   alt={'Download on the App Store'}
                                                                                                   src={appStoreSvg}/></a>
              <a href={'https://play.google.com/store/apps/details?id=com.kassirKg.showGoUz'} target={'_blank'}><img
                className={'h-12'} alt={'Get it on Google Play'} src={googlePlayPng}/></a>
            </div>
          </div>
        </div>
      </>
    ), image: showGoUzImage
  },
  {
    title: 'Basilicco', slug: 'basilicco', platforms: ['web'], content: (
      <>
        <div className={'text-center my-2 text-gray-700'}>Электронное меня для ресторана Basilicco.</div>

        <div className={'mt-3 text-center'}>
          <a className={'text-blue-700'} href={'https://food.besoft.kg/emenu/fsggqq'} target={'_blank'}>Веб сайт
            https://food.besoft.kg/emenu/fsggqq</a>
        </div>

        <div className={'my-5 flex items-center gap-3 flex-col'}>
          {BASILICCO_SCREENS.map(g => <img width={400} src={g} alt={''}/>)}
        </div>
      </>
    ), image: basiliccoImage
  },
  {
    title: 'Som.kg', slug: 'som-kg', platforms: ['web', 'android'], content: (
      <>
        <div className={'text-center my-2 text-gray-700'}>Бесплатные доска объявления в Кыргызстане.</div>
        <div className={'grid md:grid-cols-2 gap-4 grid-cols-1'}>
          <div className={'text-right font-medium'}>Основные моменты</div>
          <div>
            <ul>
              <li>Работа с Image mask</li>
              <li>Язык интерфейса русский и кыргызский</li>
              <li>Firebase Cloud Messaging (PUSH уведомление)</li>
              <li>Google Реклама</li>
            </ul>

            <div className={'mt-3'}>
              <a className={'text-blue-700'} href={'https://som.kg'} target={'_blank'}>Веб сайт https://som.kg</a>
            </div>

            <div className={'mt-3 flex gap-2'}>
              <a href={'https://play.google.com/store/apps/details?id=kg.vista.som1'} target={'_blank'}><img
                className={'h-12'} alt={'Get it on Google Play'} src={googlePlayPng}/></a>
            </div>
          </div>
        </div>
      </>
    ), image: somgKgImage
  },
  {
    title: 'Kassir.kg', slug: 'kassir-kg', platforms: ['web'], content: (
      <>
        <div className={'text-center my-2 text-gray-700'}>Билетный оператор в Кыргызстане.</div>
        <div className={'grid md:grid-cols-2 gap-4 grid-cols-1'}>
          <div className={'text-right font-medium'}>Основные моменты</div>
          <div>
            <ul>
              <li>Работа с SVG, PDF</li>
              <li>Работа с QR Code (camera)</li>
              <li>Работа с SMTP</li>
              <li>Язык интерфейса русский и кыргызский</li>
              <li>Яндекс Карты</li>
              <li>Firebase Auth (тел. номер)</li>
              <li>Интеграция с платежными системами</li>
            </ul>

            <div className={'mt-3'}>
              <a className={'text-blue-700'} href={'https://kassir.kg'} target={'_blank'}>Веб сайт https://kassir.kg</a>
            </div>
          </div>
        </div>
      </>
    ), image: kassirKgImage
  },
]
