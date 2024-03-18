export const config = {
    entryPoints: [
        'src/login.ts',
    ],
    bundle: true,
    minify: true,
    sourcemap: true,
    format: 'esm',
    target: ['esnext'],
    outdir: 'dist',
};