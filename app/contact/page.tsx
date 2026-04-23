import type { Metadata } from "next";
import ClientInfoPage from "./client-page";

export const metadata: Metadata = {
  title: "Contact & Connect | Baatar-Ochir Sodbilegt",
  description:
    "Connect with Baatar-Ochir Sodbilegt - Full-Stack Developer. Find me on LinkedIn, GitHub, or download my resume.",
  keywords: [
    "contact Baatar-Ochir Sodbilegt",
    "full-stack developer contact",
    "hire full-stack developer",
    "Sodbilegt resume download",
    "developer social media",
  ],
  openGraph: {
    title: "Connect with Baatar-Ochir Sodbilegt | Full-Stack Developer",
    description:
      "Get in touch, view my social profiles, or download my resume.",
    url: "https://your-domain.com/contact",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Connect with Baatar-Ochir Sodbilegt",
    description:
      "Full-Stack Developer. Download my resume or connect on social media.",
  },
};

export default function InfoPage() {
  return <ClientInfoPage />;
}
