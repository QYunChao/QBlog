const nav = require('./nav');
const sidebar = require('./sidebar');

module.exports = {
    title: '学无止，爱无涯',
    base: '/QBlog/',
    dest: 'dist',
    description: 'Just playing around',
    themeConfig: {
        sidebarDepth: 2,
        nav,
        sidebar,
        lastUpdated: "最后更新时间",
        docsDir: 'docs',
        repo: "https://qyunchao.github.io/QBlog"
    },
    extraWatchFiles: [
        "./nav.js",
        "./sidebar.js"
    ],
    markdown: {
        lineNumbers: true
    }
}