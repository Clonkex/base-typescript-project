import * as esbuild from 'esbuild';
import { esbuildConfig } from './esbuildConfig.js';

const ctx = await esbuild.context(esbuildConfig);
await ctx.watch()
const { host, port } = await ctx.serve({
    servedir: '.',
    keyfile: 'local.key',
    certfile: 'local.cert',
});