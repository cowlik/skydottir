const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants');

module.exports = (phase) => {
	const isDevelopment = phase === PHASE_DEVELOPMENT_SERVER;
	const isPreview = phase === PHASE_PRODUCTION_BUILD && process.env.PREVIEW === '1';
	const basePath = isPreview ? process.env.BASE_PATH_PREVIEW : process.env.BASE_PATH;

	return {
		env: {
			baseDomain: isDevelopment || isPreview ? 'http://preview.cowlik.com/skydottir' : 'https://www.skydottir.com',
			imgsPath: basePath + process.env.IMGS_FOLDER,
			pdfsPath: basePath + process.env.PDFS_FOLDER,
			contentPath: basePath + process.env.CONTENT_FOLDER,
			facebookId: isDevelopment || isPreview ? '458322142284070' : '879542552903109',
			googleAnalyticsId: isDevelopment || isPreview ? '' : 'UA-75288809-1',
		},
		basePath,
		reactStrictMode: true,
	};
};
