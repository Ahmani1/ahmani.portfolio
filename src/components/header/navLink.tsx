/* eslint-disable react/jsx-no-comment-textnodes */

interface NavLinkProps {
  id: string;
  label: string;
  activeLink: string;
  onClick: (key: string) => void;
  ariaLabel?: string;
}

const NavLink = ({ id, label, activeLink, onClick, ariaLabel }: NavLinkProps) => {
  return (
    <button
      onClick={() => onClick(id)}
      className={`capitalize font-medium transition-all w-fit text-base ${
        activeLink === id
          ? "text-accent dark:text-white dark:hover:text-white"
          : "hover:text-accent dark:hover:text-white dark:text-accent text-primary"
      }`}
      aria-label={ariaLabel ?? label}
    >
      // {label}
    </button>
  );
};

export default NavLink;