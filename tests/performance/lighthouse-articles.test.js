import { generatePerformanceReports } from './run-performance.mjs';

console.log('Running articles Lighthouse performance check...');

await generatePerformanceReports();
