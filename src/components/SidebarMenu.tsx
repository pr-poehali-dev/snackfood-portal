
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Coffee, 
  UtensilsCrossed, 
  Home, 
  ChevronRight, 
  Pizza, 
  Phone, 
  Info, 
  Map
} from 'lucide-react';

interface MenuItem {
  title: string;
  path: string;
  icon: React.ReactNode;
  subItems?: { title: string; path: string }[];
}

const SidebarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSubmenu, setExpandedSubmenu] = useState<number | null>(null);
  const location = useLocation();

  // Закрыть боковое меню при нажатии Escape или клике вне меню
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    const handleClickOutside = (e: MouseEvent) => {
      const sidebar = document.getElementById('sidebar-menu');
      const toggleButton = document.getElementById('sidebar-toggle');
      
      if (sidebar && 
          !sidebar.contains(e.target as Node) && 
          toggleButton && 
          !toggleButton.contains(e.target as Node) && 
          isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Закрыть боковое меню при смене маршрута
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const menuItems: MenuItem[] = [
    { 
      title: 'Главная', 
      path: '/', 
      icon: <Home className="w-5 h-5" /> 
    },
    { 
      title: 'Меню', 
      path: '/menu', 
      icon: <UtensilsCrossed className="w-5 h-5" />,
      subItems: [
        { title: 'Сосиски в тесте', path: '/menu#sosiska' },
        { title: 'Бутерброды', path: '/menu#buterbrod' },
        { title: 'Гречка с сосиской', path: '/menu#grechka' },
        { title: 'Макароны с сыром', path: '/menu#makarony' },
        { title: 'Овощной салат', path: '/menu#salat' }
      ]
    },
    { 
      title: 'Напитки', 
      path: '/menu#napitki', 
      icon: <Coffee className="w-5 h-5" />,
      subItems: [
        { title: 'Чай черный', path: '/menu#tea' },
        { title: 'Лимонад', path: '/menu#limonad' },
        { title: 'Вода', path: '/menu#voda' }
      ]
    },
    { 
      title: 'О нас', 
      path: '/#о-нас', 
      icon: <Info className="w-5 h-5" /> 
    },
    { 
      title: 'Где нас найти', 
      path: '/#карта', 
      icon: <Map className="w-5 h-5" /> 
    },
    { 
      title: 'Контакты', 
      path: '/#контакты', 
      icon: <Phone className="w-5 h-5" /> 
    }
  ];

  const toggleSubmenu = (index: number) => {
    if (expandedSubmenu === index) {
      setExpandedSubmenu(null);
    } else {
      setExpandedSubmenu(index);
    }
  };

  return (
    <>
      {/* Кнопка-гамбургер для открытия/закрытия меню */}
      <button 
        id="sidebar-toggle"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-4 top-20 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 transition-transform duration-300 hover:scale-110 md:hidden"
        aria-label="Открыть меню"
      >
        <div className="flex flex-col items-center justify-center gap-1.5">
          <span className={`block h-0.5 w-5 bg-white transition-transform duration-300 ${isOpen ? 'translate-y-2 rotate-45' : ''}`}></span>
          <span className={`block h-0.5 w-5 bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block h-0.5 w-5 bg-white transition-transform duration-300 ${isOpen ? '-translate-y-2 -rotate-45' : ''}`}></span>
        </div>
      </button>

      {/* Затемнение фона при открытом мобильном меню */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />
      
      {/* Боковое меню */}
      <aside 
        id="sidebar-menu"
        className={`fixed left-0 top-0 z-50 h-full w-64 bg-white shadow-xl transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } md:relative md:z-0 md:w-56 md:shadow-none md:transition-none`}
      >
        <div className="flex h-full flex-col overflow-y-auto">
          {/* Логотип и название */}
          <div className="flex items-center p-4 border-b">
            <div className="relative h-9 w-9 rounded-full bg-primary flex items-center justify-center mr-2">
              <Pizza className="h-5 w-5 text-white absolute animate-spin-slow" />
            </div>
            <h2 className="text-xl font-bold text-primary">БыстроЕда</h2>
          </div>
          
          {/* Пункты меню */}
          <nav className="flex-1 py-4">
            <ul className="space-y-1 px-2">
              {menuItems.map((item, index) => (
                <li key={item.title} className="rounded-md">
                  {/* Если есть подпункты */}
                  {item.subItems ? (
                    <div className="flex flex-col">
                      <button
                        onClick={() => toggleSubmenu(index)}
                        className={`group flex w-full items-center rounded-md p-2 text-sm font-medium transition-colors hover:bg-muted ${
                          location.pathname === item.path ? 'bg-muted text-primary' : 'text-foreground'
                        }`}
                      >
                        <span className="mr-2 text-primary">{item.icon}</span>
                        <span className="flex-1">{item.title}</span>
                        <ChevronRight 
                          className={`h-4 w-4 transition-transform duration-200 ${
                            expandedSubmenu === index ? 'rotate-90' : ''
                          }`} 
                        />
                      </button>
                      
                      {/* Подпункты */}
                      <div 
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          expandedSubmenu === index ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <ul className="mt-1 space-y-1 pl-9">
                          {item.subItems.map((subItem) => (
                            <li key={subItem.title}>
                              <Link
                                to={subItem.path}
                                className={`block rounded-md p-2 text-sm transition-colors hover:bg-muted ${
                                  location.hash === subItem.path.split('#')[1] ? 'text-primary' : 'text-foreground'
                                }`}
                              >
                                {subItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    // Обычные пункты без подпунктов
                    <Link
                      to={item.path}
                      className={`group flex items-center rounded-md p-2 text-sm font-medium transition-colors hover:bg-muted ${
                        location.pathname === item.path ? 'bg-muted text-primary' : 'text-foreground'
                      }`}
                    >
                      <span className="mr-2 text-primary">{item.icon}</span>
                      <span>{item.title}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Футер сайдбара */}
          <div className="border-t p-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} БыстроЕда
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SidebarMenu;
