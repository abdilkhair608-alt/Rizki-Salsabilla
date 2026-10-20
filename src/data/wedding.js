export const couple = {
  groom: {
    name: 'Rizki Budiman',
    shortName: 'Rizki',
    initial: 'R',
    father: 'Bapak Saiful Bahri',
    mother: 'Ibu Fatimah (almarhumah)',
  },
  bride: {
    name: 'Salsabilla Rivalina',
    shortName: 'Salsabilla',
    initial: 'S',
    father: 'Bapak Amrizal Rivai (almarhum)',
    mother: 'Ibu Diana Dewi (almarhumah)',
  },
};
export const coupleNames = `${couple.groom.shortName} & ${couple.bride.shortName}`;

const dateFormatter = new Intl.DateTimeFormat('id-ID', {
  timeZone: 'Asia/Jakarta',
  weekday: 'long',
  day: '2-digit',
  month: 'long',
  year: 'numeric',
});

const timeFormatter = new Intl.DateTimeFormat('id-ID', {
  timeZone: 'Asia/Jakarta',
  hour: '2-digit',
  minute: '2-digit',
  hourCycle: 'h23',
});

function createEvent({ startsAt: startDate, showMap, ...event }) {
  const startsAt = Date.parse(startDate);
  const parts = Object.fromEntries(
    dateFormatter.formatToParts(startsAt).map(({ type, value }) => [type, value]),
  );

  return {
    ...event,
    startsAt,
    time: `${timeFormatter.format(startsAt)} WIB – Selesai`,
    day: parts.weekday,
    date: parts.day,
    month: parts.month,
    year: parts.year,
    mapUrl: showMap
      ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.address)}`
      : null,
  };
}

export const events = [
  createEvent({
    id: 'akad',
    number: '01',
    title: 'Akad Nikah',
    startsAt: '2026-10-30T14:00:00+07:00',
    place: 'Masjid Tabliqhiyah Garegeh',
    address:
      'P93R+7PQ Masjid Tablighiyah Garegeh, Jl. Soekarno Hatta, Garegeh, Mandiangin Koto Selayan, Bukittinggi City, West Sumatra 26117',
    showAddress: false,
    showMap: true,
  }),
  createEvent({
    id: 'reception',
    number: '02',
    title: 'Resepsi',
    startsAt: '2026-11-09T10:00:00+07:00',
    place: 'Jl. Dt. Mangkuto Ameh, Garegeh',
    address:
      'Jl. N.J.Dt.Mangkuto Ameh No.21, Koto Selayan, Kec. Mandiangin Koto Selayan, Kota Bukittinggi, Sumatera Barat 26131',
    showMap: true,
  }),
];

export const reception = events.find((event) => event.id === 'reception');
