import CardNav, { CardNavItem } from "@/components/reactbits/CardNav";
import logo from "../../../public/wisp_logo.png";

const Navbar = () => {
  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "About Company", href: "#" },
        { label: "Careers", ariaLabel: "About Careers" },
      ],
    },
    {
      label: "Projects",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects", href: "#" },
        { label: "Case Studies", ariaLabel: "Project Case Studies" },
      ],
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us", href: "#" },
        { label: "Twitter", ariaLabel: "Twitter", href: "#" },
        { label: "LinkedIn", ariaLabel: "LinkedIn", href: "#" },
      ],
    },
  ] as CardNavItem[];

  return (
    <CardNav
      logo={logo?.src}
      logoAlt="Company Logo"
      items={items}
      baseColor="#fff"
      menuColor="#000"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
    />
  );
};

export default Navbar;
