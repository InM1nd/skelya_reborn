// pages/api/payment-callback.ts
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

// Определим тип данных, которые мы ожидаем в запросе
interface PaymentNotification {
  transactionStatus: string;  // Статус транзакции (например, 'Approved')
  customerEmail: string;      // Email клиента
  // Добавьте другие поля, которые вам могут быть полезны из уведомления
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Типизируем тело запроса
    const paymentData: PaymentNotification = req.body;

    // Проверка, что уведомление о статусе успешной оплаты
    if (paymentData.transactionStatus === 'Approved') {
      // Настройка отправки письма
      const transporter = nodemailer.createTransport({
        service: 'gmail', // или другой почтовый сервис
        auth: {
          user: process.env.EMAIL_USER, // ваш email
          pass: process.env.EMAIL_PASS, // пароль или специальный app password
        },
      });

      // Письмо клиенту
      const mailOptions = {
        from: 'skelya.careers@gmail.com',  // Ваш email
        to: paymentData.customerEmail,   // Email клиента
        subject: 'Ссылка на ваш Telegram бот',
        text: 'Спасибо за оплату! Вот ваша ссылка на Telegram бот: https://t.me/yourbot',
      };

      try {
        // Отправка письма
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Письмо отправлено' });
      } catch (error) {
        console.error('Ошибка при отправке письма:', error);
        res.status(500).json({ message: 'Ошибка при отправке письма' });
      }
    } else {
      // Платеж не подтвержден
      res.status(200).json({ message: 'Платеж не подтвержден' });
    }
  } else {
    // Для других HTTP методов возвращаем ошибку
    res.status(405).json({ message: 'Метод не поддерживается' });
  }
}
