import data from '../../data.json';
import SocialButtons from '../Socials';
import CustomLink from '../ui/CustomLink';
import Logo from '../ui/Logo';

const Footer = () => {
  const { links } = data['section-nav'];
  const { text } = data['section-footer'];

  return (
    <footer className="footer footer-center p-10 bg-custom-neutral text-base-content rounded">
      <div>
        <Logo colorText="text-custom-silver" />
      </div>
      <nav className="flex flex-wrap gap-4 justify-center">
        {links.map((link) => (
          <CustomLink
            text={link.text}
            href={link.href}
            key={link.id}
            isExternal={link.isExternal}
            colorText="text-custom-silver"
          />
        ))}
      </nav>

      <div>
        <SocialButtons />
      </div>

      <aside>
        <p>
          {new Date().getFullYear()} - {text}
        </p>
      </aside>
    </footer>
  );
};
export default Footer;
