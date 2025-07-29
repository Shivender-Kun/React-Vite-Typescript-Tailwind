const Footer: React.FC = () => {
  const CURRENT_YEAR = new Date().getFullYear();
  return (
    <footer className="accented-bg p-4 text-center">
      Copyright &copy; {CURRENT_YEAR} -{" "}
      <a href="https://github.com/Shivender-Kun">Shivender-Kun</a>
    </footer>
  );
};

export default Footer;
