import { Roboto_Mono } from 'next/font/google'

const RobotoMono = Roboto_Mono()

export default function Home() {
  return (
    <h1 className={`m-auto text-white text-4xl ${RobotoMono.className}`}>Stupid Git Tricks</h1>
  );
}
