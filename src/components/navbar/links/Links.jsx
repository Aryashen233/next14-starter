import Link from "next/link";
const Links = () => {
    const linksConfig = [
    { href: '/', title: 'Homepage' },
    { href: '/about', title: 'About' },
    { href: '/contact', title: 'Contact' },
    { href: '/blog', title: 'Blog' },
    { href: '/admin', title: 'Admin' },
    { href: '/login', title: 'Login' },
    ];
    return (
        <div>
            {linksConfig.map((link) => (
                <Link href={link.href} key={link.title} >
                    {link.title}
                </Link>
            ))}
        </div>
    );
};
export default Links;