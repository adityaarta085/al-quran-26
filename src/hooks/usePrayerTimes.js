import { useEffect, useState } from 'react';
import { Coordinates, CalculationMethod, PrayerTimes, SunnahTimes } from 'adhan';

export const usePrayerTimes = (latitude = -6.2088, longitude = 106.8456) => {
  const [prayerData, setPrayerData] = useState(null);

  useEffect(() => {
    const coords = new Coordinates(latitude, longitude);
    const date = new Date();
    const params = CalculationMethod.MuslimWorldLeague();
    const prayerTimes = new PrayerTimes(coords, date, params);
    const sunnahTimes = new SunnahTimes(prayerTimes);

    setPrayerData({
      fajr: prayerTimes.fajr,
      dhuhr: prayerTimes.dhuhr,
      asr: prayerTimes.asr,
      maghrib: prayerTimes.maghrib,
      isha: prayerTimes.isha,
      next: prayerTimes.nextPrayer(),
      timeForNext: prayerTimes.timeForPrayer(prayerTimes.nextPrayer()),
      imsak: new Date(prayerTimes.fajr.getTime() - 10 * 60 * 1000), // 10 mins before fajr
      sunrise: prayerTimes.sunrise,
      lastThird: sunnahTimes.lastThirdOfTheNight,
    });
  }, [latitude, longitude]);

  return prayerData;
};
