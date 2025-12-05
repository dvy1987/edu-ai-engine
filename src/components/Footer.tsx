const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} EduContent AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
