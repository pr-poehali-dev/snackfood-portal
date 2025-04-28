const Footer = () => {
  return (
    <footer id="contacts" className="bg-muted py-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">🌭 ФастФуд №1</h3>
            <p className="text-sm text-muted-foreground">
              Быстро, вкусно и недорого!
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <p className="text-sm text-muted-foreground mb-2">
              📞 +7 (123) 456-78-90
            </p>
            <p className="text-sm text-muted-foreground mb-2">
              📧 info@fastfood1.ru
            </p>
            <p className="text-sm text-muted-foreground">
              🏠 г. Москва, ул. Примерная, д. 123
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Часы работы</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Пн-Пт: 8:00 - 22:00
            </p>
            <p className="text-sm text-muted-foreground">
              Сб-Вс: 9:00 - 23:00
            </p>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} ФастФуд №1. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
