const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles'), 'node_modules'],
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    config.resolve.alias['~'] = path.resolve(__dirname, 'node_modules');

    // Добавьте правило для обработки mp4 файлов
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[hash].[ext]',
          outputPath: 'public/videos/', // Папка для сохранения видео
        },
      },
    });

    return config;
  },
};

module.exports = nextConfig;