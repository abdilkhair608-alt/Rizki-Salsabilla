import assert from 'node:assert/strict';
import { test } from 'node:test';
import { events, reception } from '../src/data/wedding.js';
import { getRemainingTime } from '../src/utils/countdown.js';

test('countdown breaks remaining time into days, hours, minutes, and seconds', () => {
  assert.deepEqual(getRemainingTime(reception.startsAt, reception.startsAt - 90061000), {
    days: 1,
    hours: 1,
    minutes: 1,
    seconds: 1,
    finished: false,
  });
});

test('countdown finishes at the event and never becomes negative', () => {
  for (const now of [reception.startsAt, reception.startsAt + 86400000]) {
    assert.deepEqual(getRemainingTime(reception.startsAt, now), {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      finished: true,
    });
  }
});

test('countdown does not stop during the final fraction of a second', () => {
  assert.equal(getRemainingTime(reception.startsAt, reception.startsAt - 500).finished, false);
});

test('event timestamps use WIB regardless of the host timezone', () => {
  assert.equal(new Date(reception.startsAt).toISOString(), '2026-11-09T03:00:00.000Z');
  assert.equal(reception.day, 'Senin');
  assert.equal(reception.date, '09');
  assert.equal(reception.month, 'November');
  assert.equal(reception.year, '2026');
  assert.equal(reception.time, '10.00 WIB – Selesai');
  assert.equal(events[0].day, 'Jumat');
});

test('map points to the same full address displayed for the reception', () => {
  const map = new URL(reception.mapUrl);
  assert.equal(map.hostname, 'www.google.com');
  assert.equal(map.searchParams.get('query'), reception.address);
  assert.equal(new URL(events[0].mapUrl).searchParams.get('query'), events[0].address);
});

test('new couple and akad use supplied details', () => {
  assert.equal(new Date(events[0].startsAt).toISOString(), '2026-10-30T07:00:00.000Z');
  assert.equal(events[0].date, '30');
  assert.equal(events[0].month, 'Oktober');
  assert.equal(events[0].time, '14.00 WIB – Selesai');
  assert.equal(events[0].place, 'Masjid Tabliqhiyah Garegeh');
});
