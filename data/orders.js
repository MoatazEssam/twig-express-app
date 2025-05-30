module.exports = {
  page: {
    title: 'الطلبات - إدارة الطلبات',
    url: '/orders'
  },
  // Override menu to set orders as active
  site: {
    menu: [
      { name: 'الرئيسية', link: '/', active: false, external: false, icon: 'fa fa-home' },
      { name: 'طلب جديد', link: '/neworder', active: false, external: false, icon: 'fa fa-plus' },
      { name: 'طلباتي', link: '/orders', active: true, external: false, icon: 'fa fa-list' }
    ]
  },
  task: 1,
  status: 'all',
  search: '',
  orderList: [
    {
      id: '12345',
      date: '2024-01-15 14:30:00',
      link: 'https://instagram.com/example_account',
      charge: '25.50 ريال',
      start_count: '1,250',
      quantity: '1,000',
      service: 'متابعين إنستغرام عرب حقيقيين',
      status: 'مكتمل',
      remains: '0',
      refill: 1,
      cancel: 0,
      refilling: 0,
      orderDetails: [
        {
          label: 'تفاصيل الطلب',
          details: [
            {
              label: 'الرابط المستهدف',
              type: 'input',
              value: 'https://instagram.com/example_account'
            },
            {
              label: 'ملاحظات إضافية',
              type: 'textarea',
              value: 'طلب متابعين عرب حقيقيين بجودة عالية'
            }
          ]
        }
      ]
    },
    {
      id: '12346',
      date: '2024-01-14 10:15:00',
      link: 'https://youtube.com/watch?v=example',
      charge: '15.75 ريال',
      start_count: '500',
      quantity: '2,000',
      service: 'مشاهدات يوتيوب عربية',
      status: 'قيد التنفيذ',
      remains: '750',
      refill: 0,
      cancel: 1,
      refilling: 0
    },
    {
      id: '12347',
      date: '2024-01-13 16:45:00',
      link: 'https://facebook.com/example_page',
      charge: '30.00 ريال',
      start_count: '2,100',
      quantity: '1,500',
      service: 'إعجابات فيسبوك خليجية',
      status: 'معلق',
      remains: '1,500',
      refill: 0,
      cancel: 1,
      refilling: 0,
      cancelReason: 'الرابط غير صحيح'
    }
  ],
  searchList: [],
  pagination: {
    current: 1,
    pages: 1,
    count: 3,
    next: 2,
    last: 0
  }
};
