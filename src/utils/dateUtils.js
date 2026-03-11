import { format } from 'date-fns';
import { id } from 'date-fns/locale';

export const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 11) return 'Selamat Pagi';
  if (hour < 15) return 'Selamat Siang';
  if (hour < 18) return 'Selamat Sore';
  return 'Selamat Malam';
};

export const getHijriDate = () => {
  // Simplistic Hijri conversion for demonstration
  // In a real app, use a library like 'intl' or 'moment-hijri'
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  return new Intl.DateTimeFormat('id-TN-u-ca-islamic-uma', options).format(new Date());
};

export const getFormattedDate = () => {
  return format(new Date(), 'EEEE, d MMMM yyyy', { locale: id });
};
