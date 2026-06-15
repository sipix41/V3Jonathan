import { CITY_CONTENT as BASE_CONTENT } from './cityContent.ts';
import { SERVICES_BATCH_1 } from './src/services_batch1.ts';
import { SERVICES_BATCH_2 } from './src/services_batch2.ts';
import { SERVICES_BATCH_3 } from './src/services_batch3.ts';
import { SERVICES_BATCH_4 } from './src/services_batch4.ts';
import { SERVICES_BATCH_5 } from './src/services_batch5.ts';
import { SERVICES_BATCH_6 } from './src/services_batch6.ts';
import fs from 'fs';

const mergedContent: any = {};

for (const city of Object.keys(BASE_CONTENT)) {
    mergedContent[city] = {
        ...(BASE_CONTENT as any)[city],
    };
    if (SERVICES_BATCH_1[city]) {
        Object.assign(mergedContent[city], SERVICES_BATCH_1[city]);
    }
    if (SERVICES_BATCH_2[city]) {
        Object.assign(mergedContent[city], SERVICES_BATCH_2[city]);
    }
    if (SERVICES_BATCH_3[city]) {
        Object.assign(mergedContent[city], SERVICES_BATCH_3[city]);
    }
    if (SERVICES_BATCH_4[city]) {
        Object.assign(mergedContent[city], SERVICES_BATCH_4[city]);
    }
    if (SERVICES_BATCH_5[city]) {
        Object.assign(mergedContent[city], SERVICES_BATCH_5[city]);
    }
    if (SERVICES_BATCH_6[city]) {
        Object.assign(mergedContent[city], SERVICES_BATCH_6[city]);
    }
}

const contentString = `import React from 'react';\n\nexport const CITY_CONTENT = ${JSON.stringify(mergedContent, null, 2)};\n`;
fs.writeFileSync('./cityContent.ts', contentString);
console.log("Merge completed successfully!");
