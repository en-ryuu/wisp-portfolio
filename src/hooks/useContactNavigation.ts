import { usePathname, useRouter } from "next/navigation";

/**
 * Hook to navigate to the contact section
 * - If on home page: scrolls to #contact
 * - If on other pages: navigates to /#contact
 */
export function useContactNavigation() {
  const router = useRouter();
  const pathname = usePathname();

  const navigateToContact = () => {
    if (pathname === "/") {
      // If on home page, scroll to contact section
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on other pages, navigate to home page with contact hash
      router.push("/#contact");
    }
  };

  return navigateToContact;
}
