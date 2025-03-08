import { Roboto_Mono } from 'next/font/google'

const RobotoMono = Roboto_Mono()

export default function Home() {
  return (
    <h1 className={`m-auto text-white text-4xl ${RobotoMono.className}`}>Stupid Git Tricks</h1>
    // <div
    //   className="flex h-screen bg-[#002734]"
    //   style={{
    //     backgroundImage:
    //       "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/builtt_personal_cover_without_logo-kkH3tDxwbYuPQef78SKUFE53nupNRF.png)",
    //     backgroundSize: "auto",
    //     backgroundRepeat: "repeat-y",
    //     backgroundPosition: "top right",
    //   }}
    // >
      
    // </div>
  );
}
