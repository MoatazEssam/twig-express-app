module.exports = {
  page: {
    title: 'طلب جديد - إنشاء طلب',
    url: '/neworder'
  },
  // Override menu to set neworder as active
  site: {
    menu: [
      { name: 'الرئيسية', link: '/', active: false, external: false, icon: 'fa fa-home' },
      { name: 'طلب جديد', link: '/neworder', active: true, external: false, icon: 'fa fa-plus' },
      { name: 'طلباتي', link: '/orders', active: false, external: false, icon: 'fa fa-list' }
    ]
  },
  categories: true,
  services_search: true,
  check_agreement: true,
  newOrderText: 'مرحباً بك في صفحة الطلبات الجديدة. يمكنك إنشاء طلبك بسهولة من خلال اختيار الخدمة المناسبة.',
  extended_categories: [
    {
      id: 1,
      name: 'إنستغرام',
      icon: {
        icon_type: 'icon',
        icon: 'fab fa-instagram'
      }
    },
    {
      id: 2,
      name: 'فيسبوك',
      icon: {
        icon_type: 'icon',
        icon: 'fab fa-facebook'
      }
    },
    {
      id: 3,
      name: 'يوتيوب',
      icon: {
        icon_type: 'icon',
        icon: 'fab fa-youtube'
      }
    },
    {
      id: 4,
      name: 'تيك توك',
      icon: {
        icon_type: 'icon',
        icon: 'fab fa-tiktok'
      }
    },
    {
      id: 5,
      name: 'تويتر',
      icon: {
        icon_type: 'icon',
        icon: 'fab fa-twitter'
      }
    }
  ],
  data: {
    category: '',
    termsofservice: false
  },
  service: {
    description: 'اختر الخدمة المناسبة لك من القائمة أعلاه'
  },
  order: {
    charge: '0.00 ريال'
  },
  error: false,
  errorMessage: '',
  success: 0,
  csrftoken: 'sample_csrf_token_12345'
};
