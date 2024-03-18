export const esbuildConfig = {
    entryPoints: [
        'src/login.ts',
        'src/designList.ts',
        'src/designEdit.ts'
    ],
    bundle: true,
    minify: true,
    sourcemap: true,
    format: 'esm',
    target: ['esnext'],
    outdir: 'dist',
};