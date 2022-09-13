# airlines-iata-code

airlines-iata-code

Search airline name by iata code 

![npm](https://img.shields.io/npm/v/airlines-iata-codes)
![npm](https://img.shields.io/npm/l/airlines-iata-codes?color=002350)
![npm](https://img.shields.io/bundlephobia/minzip/airlines-iata-codes)

## Install it via npm

```shell
npm i airlines-iata-codes
```

## Require the Module

```shell
const allData = require('airlines-iata-codes')
```

## To use

```shell

const data = allData(); // All Data
console.log(data);

const data = allData('BS'); // Filter by IATA Codes



```

## Output

```shell

All Data Print

[
  { Airline: '1Time Airline', IATACode: '1T' },
  { Airline: '40-Mile Air', IATACode: 'Q5' },
  { Airline: 'Ansett Australia', IATACode: 'AN' },
  { Airline: 'Abacus International', IATACode: '1B' },
  { Airline: 'Abelag Aviation', IATACode: 'W9' },
  { Airline: 'Aigle Azur', IATACode: 'ZI' },
  { Airline: 'Aloha Airlines', IATACode: 'AQ' },
  { Airline: 'American Airlines', IATACode: 'AA' },
  { Airline: 'Asiana Airlines', IATACode: 'OZ' },
  { Airline: 'Askari Aviation', IATACode: '4K' },
  { Airline: 'Afriqiyah Airways', IATACode: '8U' },
  { Airline: 'Afrinat International Airlines', IATACode: 'Q9' },
  { Airline: 'Allegiant Air', IATACode: 'G4' },
  { Airline: 'Aban Air', IATACode: 'K5' },
  { Airline: 'ABSA - Aerolinhas Brasileiras', IATACode: 'M3' },
  { Airline: 'Antrak Air', IATACode: '4' },
  { Airline: 'Airborne Express', IATACode: 'GB' },
  { Airline: 'ABX Air', IATACode: 'GB' },
  { Airline: 'Astral Aviation', IATACode: '8V' },
  { Airline: 'Aero Asia International', IATACode: 'E4' },
  { Airline: 'Air Togo', IATACode: 'YT' },
  { Airline: 'Advance Leasing Company', IATACode: '4G' },
  { Airline: 'Aztec Worldwide Airlines', IATACode: '7A' },
  { Airline: 'Air Tindi', IATACode: '8T' },
  { Airline: 'Ada Air', IATACode: 'ZY' },
  { Airline: 'ADC Airlines', IATACode: 'Z7' },
  { Airline: 'Adria Airways', IATACode: 'JP' },
  { Airline: 'Air Europa', IATACode: 'UX' },
  { Airline: 'Aero Benin', IATACode: 'EM' },
  { Airline: 'Aegean Airlines', IATACode: 'A3' },
  { Airline: 'Air Atlantique', IATACode: 'KI' },
  { Airline: 'Air Europe', IATACode: 'PE' },
  { Airline: 'Alaska Central Express', IATACode: 'KO' },
  { Airline: 'Astraeus', IATACode: '5W' },
  { Airline: 'Aerosvit Airlines', IATACode: 'VV' },
  { Airline: 'Air Italy', IATACode: 'I9' },
  { Airline: 'American Falcon', IATACode: 'WK' },
  { Airline: 'Alliance Airlines', IATACode: 'QQ' },
  { Airline: 'Ariana Afghan Airlines', IATACode: 'FG' },
  { Airline: 'Aeroflot Russian Airlines', IATACode: 'SU' },
  { Airline: 'Air Bosna', IATACode: 'JA' },
  { Airline: 'Air France', IATACode: 'AF' },
  { Airline: 'Air Caledonie International', IATACode: 'SB' },
  { Airline: 'Air Gabon', IATACode: 'GN' },
  { Airline: 'Air Salone', IATACode: '2O' },
  { Airline: 'Air Cargo Carriers', IATACode: '2Q' },
  { Airline: 'Air Senegal International', IATACode: 'V7' },
  { Airline: 'Air Namibia', IATACode: 'SW' },
  { Airline: 'Air Service Gabon', IATACode: 'G8' },
  { Airline: 'Aerolitoral', IATACode: '5D' },
  { Airline: 'Amadeus Global Travel Distribution', IATACode: '1A' },
  { Airline: 'Air Glaciers', IATACode: '7T' },
  { Airline: 'Aeroper', IATACode: 'PL' },
  { Airline: 'Atlas Blue', IATACode: '8A' },
  { Airline: 'Air Alpha Greenland', IATACode: 'GD' },
  { Airline: 'Air Hong Kong', IATACode: 'LD' },
  { Airline: 'Aeromist-Kharkiv', IATACode: 'HT' },
  { Airline: 'Azerbaijan Airlines', IATACode: 'J2' },
  { Airline: 'Avies', IATACode: 'U3' },
  { Airline: 'Airbus Industrie', IATACode: 'AP' },
  { Airline: 'Alpine Air Express', IATACode: '5A' },
  { Airline: 'Airblue', IATACode: 'ED' },
  { Airline: 'Air Berlin', IATACode: 'AB' },
  { Airline: 'Air Contractors', IATACode: 'AG' },
  { Airline: 'Air India Limited', IATACode: 'AI' },
  { Airline: 'Air Bourbon', IATACode: 'ZB' },
  { Airline: 'Air Atlanta Icelandic', IATACode: 'CC' },
  { Airline: 'Air Srpska', IATACode: 'RB' },
  { Airline: 'Air Tahiti Nui', IATACode: 'TN' },
  { Airline: 'Aero Services Executive', IATACode: 'W4' },
  { Airline: 'Arkia Israel Airlines', IATACode: 'IZ' },
  { Airline: 'Air Jamaica', IATACode: 'JM' },
  { Airline: 'Air One', IATACode: 'AP' },
  { Airline: 'Air Sahara', IATACode: 'S2' },
  { Airline: 'Air Malta', IATACode: 'KM' },
  { Airline: 'Amerijet International', IATACode: 'M6' },
  { Airline: 'Air Japan', IATACode: 'NQ' },
  { Airline: 'Air Kiribati', IATACode: '4A' },
  { Airline: 'Air Nippon Network Co. Ltd.', IATACode: 'EH' },
  { Airline: 'America West Airlines', IATACode: 'HP' },
  { Airline: 'Air Wisconsin', IATACode: 'ZW' },
  { Airline: 'Tatarstan Airlines', IATACode: 'U9' },
  { Airline: 'Air Libert', IATACode: 'VD' },
  { Airline: 'Air Lithuania', IATACode: 'TT' },
  { Airline: 'Air Malawi', IATACode: 'QM' },
  { Airline: 'Air Sicilia', IATACode: 'BM' },
  { Airline: 'Air Macau', IATACode: 'NX' },
  { Airline: 'Air Midwest', IATACode: 'ZV' },
  { Airline: 'Air Seychelles', IATACode: 'HM' },
  { Airline: 'AeroM├⌐xico', IATACode: 'AM' },
  { Airline: 'All Nippon Airways', IATACode: 'NH' },
  { Airline: 'Air Nostrum', IATACode: 'YW' },
  { Airline: 'Air Niugini', IATACode: 'PX' },
  { Airline: 'Air Arabia', IATACode: 'G9' },
  { Airline: 'Air Canada', IATACode: 'AC' },
  { Airline: 'Air Baltic', IATACode: 'BT' },
  { Airline: 'Air Nippon', IATACode: 'EL' },
  { Airline: 'Airnorth', IATACode: 'TL' },
  { Airline: 'Air North Charter - Canada', IATACode: '4N' },
  { Airline: 'AOM French Airlines', IATACode: 'IW' },
  ... 1433 more items
]

```
## To use Filtering using IATA Code

```shell


const data = allData('BS'); // Filter by IATA Codes

console.log(data);


```

## Output2

```shell

[ { Airline: 'US-Bangla Airlines', IATACode: 'BS' } ]

```

## License

The MIT License (MIT)

Copyright (c)2022 arifkhan-silicornya

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:


THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.