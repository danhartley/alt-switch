import { formatUrl, formatWiki, } from './wikipedia.js';
import { utils } from '../utils/utils.js';

it('Expect to return binomial name in url', () => {    
  const url = formatUrl('Sus scrofa', 'http://', utils.encodeQuery);
  expect(url).toBe('http://Sus%20scrofa');
});

it('Expect to return simplified binomial name in url', () => {    
  const url = formatUrl('Lysimachia foemina (Mill.) U.Manns & Anderb., 2009', 'http://', utils.encodeQuery);
  expect(url).toBe('http://Lysimachia%20foemina');
});

it('Expect to return genus in url', () => {    
  const url = formatUrl('Sus', 'http://', utils.encodeQuery);
  expect(url).toBe('http://Sus');
});