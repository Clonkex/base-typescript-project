import * as esbuild from 'esbuild';
import { esbuildConfig } from './esbuildConfig.js';

await esbuild.build(esbuildConfig);