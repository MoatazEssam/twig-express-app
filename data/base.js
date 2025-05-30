module.exports = {
  site: {
    name: 'منصة التسويق الرقمي',
    language: 'ar',
    rtl: true,
    seo_key: 'تسويق، سوشيال ميديا، متابعين، إعجابات، مشاهدات',
    seo_desc: 'أفضل منصة للحصول على خدمات التسويق الرقمي وزيادة المتابعين والتفاعل',
    favicon: '/images/favicon.ico',
    logo: '/images/logo.png',
    custom_header: '',
    custom_footer: '',
    styles: [
      { href: 'https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css' },
      { href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css' },
      { href: '/css/orders.css' },
      { href: '/css/neworder.css' },
      { href: '/css/layout.css' },
      { href: '/css/custom.css' }
    ],
    scripts: [
      { src: 'https://code.jquery.com/jquery-3.6.0.min.js' },
      { src: 'https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/js/bootstrap.min.js' },
    ],
    menu: [
      { name: 'الرئيسية', link: '/', active: false, external: false, icon: 'fa fa-home' },
      { name: 'طلب جديد', link: '/neworder', active: false, external: false, icon: 'fa fa-plus' },
      { name: 'طلباتي', link: '/orders', active: false, external: false, icon: 'fa fa-list' }
    ],
    account_menu: [
      { name: 'الرصيد: 150.00 ريال', link: '', active: false, external: false },
      { name: 'الملف الشخصي', link: '/profile', active: false, external: false },
      { name: 'تسجيل الخروج', link: '/logout', active: false, external: false }
    ],
    languages: [
      { name: 'العربية', url: '/?lang=ar', active: true },
      { name: 'English', url: '/?lang=en', active: false }
    ],
    currencies: {
      'SAR': { symbol: 'ريال' },
      'USD': { symbol: '$' },
      'EUR': { symbol: '€' }
    }
  },
  lang: function(key) {
    const translations = {
      'orders.all': 'جميع الطلبات',
      'orders.status.pending': 'في الانتظار',
      'orders.status.inprogress': 'قيد التنفيذ',
      'orders.status.completed': 'مكتمل',
      'orders.status.partial': 'جزئي',
      'orders.status.processing': 'قيد المعالجة',
      'orders.status.canceled': 'ملغي',
      'orders.id': 'رقم الطلب',
      'orders.date': 'التاريخ',
      'orders.link': 'الرابط',
      'orders.charge': 'التكلفة',
      'orders.startcount': 'العدد الابتدائي',
      'orders.quantity': 'الكمية',
      'orders.service': 'الخدمة',
      'orders.status': 'الحالة',
      'orders.remains': 'المتبقي',
      'orders.refilling': 'جاري إعادة التعبئة',
      'orders.button.refill': 'إعادة تعبئة',
      'orders.button.cancel': 'إلغاء',
      'neworder.category': 'الفئة',
      'neworder.service': 'الخدمة',
      'neworder.description': 'الوصف',
      'neworder.charge': 'التكلفة',
      'neworder.button': 'إرسال الطلب',
      'neworder.message.success': 'تم إنشاء الطلب بنجاح!',
      'neworder.id': 'رقم الطلب',
      'neworder.link': 'الرابط',
      'neworder.quantity': 'الكمية',
      'neworder.balance': 'الرصيد المتبقي',
      'neworder.subscription_id': 'رقم الاشتراك',
      'neworder.username': 'اسم المستخدم',
      'neworder.new_posts': 'المنشورات الجديدة',
      'neworder.old_posts': 'المنشورات القديمة',
      'neworder.delay': 'التأخير',
      'general.search.placeholder': 'البحث...',
      'signup.accept_terms_text': 'أوافق على',
      'terms.signup_checkbox': 'الشروط والأحكام'
    };
    return translations[key] || key;
  },
  page_url: function(page) {
    const urls = {
      'terms': '/terms'
    };
    return urls[page] || '/' + page;
  }
};
