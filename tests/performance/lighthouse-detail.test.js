import { generatePerformanceReports } from './run-performance.mjs';

console.log('Running article detail Lighthouse performance check...');

await generatePerformanceReports();
