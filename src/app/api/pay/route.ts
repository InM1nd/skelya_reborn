import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(request: Request) {
  const { amount, productName } = await request.json();

  const merchantAccount = process.env.WFP_MERCHANT_ACCOUNT;
  if (!merchantAccount) {
    throw new Error('Merchant account is not defined');
  }
  const merchantKey = process.env.WFP_MERCHANT_KEY;
  const orderReference = `order_${Date.now()}`;
  const orderDate = Math.floor(Date.now() / 1000);
  const currency = 'UAH';

  const signatureString = `${merchantAccount};${orderReference};${amount};${currency}`;
  if (!merchantKey) {
    throw new Error('Merchant key is not defined');
  }
  const merchantSignature = crypto.createHmac('md5', merchantKey).update(signatureString).digest('hex');

  const paymentData = {
    merchantAccount,
    merchantDomainName: 'skelya.careers',
    orderReference,
    orderDate: orderDate.toString(),
    amount: amount.toString(),
    currency,
    productName: [productName].toString(),
    productPrice: [amount].toString(),
    productCount: '1',
    merchantSignature,
    returnUrl: 'https://skelya-reborn.vercel.app/success', // Замените на ваш URL
    serviceUrl: 'https://skelya-reborn.vercel.app/api/payment-response', // URL для обработки ответов
  };

  const url = `https://secure.wayforpay.com/pay?${new URLSearchParams(paymentData).toString()}`;

  return NextResponse.json({ url });
}