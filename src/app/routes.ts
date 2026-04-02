import { createBrowserRouter } from "react-router";
import HomePage from "./pages/home-page";
import HowItWorksPage from "./pages/how-it-works-page";
import AboutPage from "./pages/about-page";
import ContactPage from "./pages/contact-page";
import ProductIncubationPage from "./pages/product-incubation-page";
import ProgramsPage from "./pages/programs-page";
import PrivacyPage from "./pages/privacy-page";
import TermsPage from "./pages/terms-page";
import NotFoundPage from "./pages/not-found-page";
import VendorNetworkPage from "./pages/vendor-network-page";
import BecomeAMemberPage from "./pages/become-a-member-page";
import ImpactPage from "./pages/impact-page";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/how-it-works",
    Component: HowItWorksPage,
  },
  {
    path: "/about",
    Component: AboutPage,
  },
  {
    path: "/programs",
    Component: ProgramsPage,
  },
  {
    path: "/contact",
    Component: ContactPage,
  },
  {
    path: "/product-incubation",
    Component: ProductIncubationPage,
  },
  {
    path: "/vendor-network",
    Component: VendorNetworkPage,
  },
  {
    path: "/become-a-member",
    Component: BecomeAMemberPage,
  },
  {
    path: "/impact",
    Component: ImpactPage,
  },
  {
    path: "/privacy",
    Component: PrivacyPage,
  },
  {
    path: "/terms",
    Component: TermsPage,
  },
  {
    path: "*",
    Component: NotFoundPage,
  },
]);