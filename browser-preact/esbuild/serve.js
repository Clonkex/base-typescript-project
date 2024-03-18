import * as esbuild from 'esbuild';
import { config } from './config.js';

const ctx = await esbuild.context(config);
await ctx.watch();
const { host, port } = await ctx.serve({
    servedir: '.',
});