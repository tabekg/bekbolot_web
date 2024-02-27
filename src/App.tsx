import './App.css'
import photo from './assets/photo.jpg'
import {SocialIcon} from "react-social-icons";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <div className="h-screen w-screen flex justify-center items-center flex-col gap-5">
        <img src={photo} alt={'Bekbolot Tazhibaev'} className={'rounded-full w-32 border'}/>
        <h1 className="text-3xl text-center drop-shadow">
          Bekbolot Tazhibaev
        </h1>
        <div className={'flex flex-row gap-3'}>
          <SocialIcon url="https://github.com/tabekg" />
          <SocialIcon url="https://instagram.com/bekaaakg" />
          <SocialIcon url="mailto:tabekg@gmail.com" />
          <SocialIcon url="https://wa.me/996777171171" network={'whatsapp'} />
        </div>
      </div>
      <div className="h-screen w-screen flex justify-center items-center">
        <h1 className="text-3xl text-center">
          Bekbolot Tazhibaev
        </h1>
      </div>
    </>
  )
}

export default App
