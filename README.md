# Top Movies API

این یک API برای دسترسی به لیست 250 فیلم برتر با قابلیت احراز هویت است.

## نیازمندی‌ها

-   Node.js v14 یا بالاتر
-   MongoDB
-   npm یا yarn

## نصب و راه‌اندازی

1. نصب وابستگی‌ها:

```bash
npm install
```

2. ایجاد فایل `.env` و تنظیم متغیرهای محیطی:

```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/top-movies
JWT_SECRET=your-secret-key
COOKIE_SECRET=your-cookie-secret
```

3. کامپایل پروژه:

```bash
npm run build
```

4. اضافه کردن داده‌های اولیه به دیتابیس:

```bash
npx ts-node src/config/seedData.ts
```

5. اجرای سرور:

```bash
npm start
```

برای اجرا در محیط توسعه:

```bash
npm run dev
```

## API Endpoints

### احراز هویت

-   `POST /api/auth/register` - ثبت‌نام کاربر جدید
-   `POST /api/auth/login` - ورود کاربر
-   `POST /api/auth/logout` - خروج کاربر

### فیلم‌ها

-   `GET /api/movies` - دریافت تمام فیلم‌ها
-   `GET /api/movies/rank?start=1&limit=10` - دریافت فیلم‌ها بر اساس رتبه
-   `GET /api/movies/:id` - دریافت اطلاعات یک فیلم خاص

## امنیت

-   احراز هویت با JWT
-   ذخیره توکن در کوکی با تنظیمات `httpOnly`
-   CORS با تنظیمات امن
-   رمزنگاری پسورد با bcrypt
