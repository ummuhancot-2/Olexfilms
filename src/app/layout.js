import { lexend, nunito, mooLahLah, barriecito } from "@/helpers/font";
import "../styles/index.scss";
import { config } from "@/helpers/config";
import { Topbar } from "@/components/common/header/Topbar";
import { MainMenuBar } from "@/components/common/header/MainMenuBar";
import { Footer } from "@/components/common/footer/Footer";
import { ButtonCallNow } from "@/components/common/footer/ButtonCallNow";
import { Spacer } from "@/components/spacer/Spacer";

export const metadata = {
  title: {
    template: `%s | ${config.project.name}`,
    default: `${config.project.name} - ${config.project.slogan}`,
  },
  description: config.project.description,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${lexend.variable} ${nunito.variable} ${mooLahLah.variable} ${barriecito.variable}`}
    >
      <body>
        <Topbar />
        <MainMenuBar />
        <Spacer size={20} />
       {children}
        <Footer />
        <ButtonCallNow className="button-actions-fixed" />
      </body>
    </html>
  );
}
