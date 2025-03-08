import { GitTricksPage } from "@/components/git-tricks-page";

export default function Home() {
  return (
    <div
      className="flex flex-row justify-center bg-[#002734]"
      style={{
        backgroundImage:
          "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/builtt_personal_cover_without_logo-kkH3tDxwbYuPQef78SKUFE53nupNRF.png)",
        backgroundSize: "auto",
        backgroundRepeat: "repeat-y",
        backgroundPosition: "top right",
      }}
    >
      <GitTricksPage />
    </div>
  );
}
