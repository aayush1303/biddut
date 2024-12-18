const markdownIt = require("markdown-it");
const markdownItFootnote = require("markdown-it-footnote");


module.exports = function (eleventyConfig) {

    const markdownItInstance = markdownIt({
        html: true, 
        breaks: true, 
        linkify: true,
        typographer: true
    }).use(markdownItFootnote);

    eleventyConfig.setLibrary("md", markdownItInstance);



    eleventyConfig.addFilter("markdown", (content) => {
        return markdownItInstance.render(content || "");
    });


    eleventyConfig.addPassthroughCopy('src/resources/assets');
    eleventyConfig.addPassthroughCopy('src/resources/css');
    eleventyConfig.addPassthroughCopy('src/resources/scripts');


    eleventyConfig.addWatchTarget('./src/resources/css/');
    eleventyConfig.addWatchTarget('./src/resources/scripts/');

    eleventyConfig.addCollection("blogPosts", function (collectionApi) {
        return collectionApi.getFilteredByGlob("./src/blogs/*.md").sort((a, b) => {
            if (a.data.recent && !b.data.recent) {
                return -1;
            } else if (!a.data.recent && b.data.recent) {
                return 1;
            }
            if (a.data.recent && b.data.recent) {
                return (a.data.order || 0) - (b.data.order || 0);
            }
            return 0;
        });
    });

    return {
        dir: {
        input: 'src',
        includes: '_includes',
        output: '_site',
        },
        templateFormats: ['md', 'njk' , 'html' ],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',  
    };
}