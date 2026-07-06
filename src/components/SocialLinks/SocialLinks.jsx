import styles from "./SocialLinks.module.css";

const socialLinks = [
  {
    id: "youtube",
    name: "Youtube",
    icon: "/src/assets/icon-youtube.png",
    href: "#",
  },
  {
    id: "discord",
    name: "Discord",
    icon: "/src/assets/icon-discord.png",
    href: "https://discord.com/invite/MvtgmhPSrx",
  },
  {
    id: "instagram",
    name: "Instagram",
    icon: "/src/assets/icon-instagram.png",
    href: "https://www.instagram.com/codando.community/",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: "/src/assets/icon-linkedin.png",
    href: "https://www.linkedin.com/company/codando-community/posts/?feedView=all",
  },
  {
    id: "even3",
    name: "Even3",
    icon: "/src/assets/icon-even3.png",
    href: "https://even3.com.br",
  },
];

const SocialLinks = ({ variant = "hero" }) => {
  return (
    <div
      className={`${styles.socialLinks} ${
        variant === "footer" ? styles.footer : styles.hero
      }`}
    >
      {socialLinks.map((link) => (
        <a
          key={link.id}
          className={styles.socialLink}
          href={link.href}
          target={link.href?.startsWith("http") ? "_blank" : undefined}
          rel={link.href?.startsWith("http") ? "noreferrer" : undefined}
        >
          <img className={styles.socialIcon} src={link.icon} alt={link.name} />
          <span>{link.name}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
