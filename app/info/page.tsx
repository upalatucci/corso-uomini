import Features from "@/components/Features";

export const metadata = {
  title: "Info | 3º Corso nazionale uomini 2026",
  description:
    "Informazioni sul corso: luogo, date, orari, costi, parcheggio, contatti e come prepararsi.",
};

export default function InfoPage() {
  return (
    <div className="min-h-screen bg-defaultBg">
      <div className="pt-[80px]">
        <Features />
      </div>
    </div>
  );
}
