
import i18next from 'i18next';

i18next
    .init({
        interpolation: {
            // React already does escaping
            escapeValue: false,
        },
        // lng: 'vn', // 'en' | 'es'
        // Using simple hardcoded resources for simple example
        resources: {
            en: {
                translation: {
                    'functional': 'Introduce',
                    'home_page': 'HOME PAGE',
                    'menu':'MENU',
                    'book': 'BOOK',
                    'address': 'ADDRESS',
                    'contact': 'CONTACT',
                    'admin' : 'ADMIN',
                    'create_bill' : 'CREATE BILL',
                    'product_statistics': 'Product Statistics',
                    'customers_number':'Customers number',
                    'customer_satisfaction': 'Customer Satisfaction',
                    'customers_number': 'Customers number',
                    'paid_bill_number': 'Paid bill number',
                    'lowest_rating' : 'Lowest rating',
                    'top_rated' : 'Top rated',
                }
            },
            vn: {
                translation: {
                    'functional': 'Giới thiệu',
                    'home_page': 'TRANG CHỦ',
                    'menu':'MÓN ĂN',
                    'book': 'ĐẶT BÀN',
                    'address': 'ĐỊA CHỈ',
                    'contact': 'LIÊN HỆ',
                    'admin' : 'QUẢN LÝ',
                    'create_bill' : 'HÓA ĐƠN',
                    'product_statistics': 'Thống kê sản phẩm',
                    'customers_number':'Số lượng khách hàng',
                    'customer_satisfaction': 'Độ hài lòng khách hàng',
                    'customers_number': 'Số lượng khách hàng',
                    'paid_bill_number': 'Số bill đã thanh toán',
                    'lowest_rating' : 'Đánh giá thấp nhất',
                    'top_rated' : 'Đánh giá cao nhất',
                }
            },
        },
    })

export default i18next