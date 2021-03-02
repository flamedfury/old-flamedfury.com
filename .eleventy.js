module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("src/recordshelf/covers/");
    eleventyConfig.addPassthroughCopy("src/bookshelf/covers/");
    eleventyConfig.addPassthroughCopy("src/bookshelf/comics/covers/");

    return {
        passthroughFileCopy: true,
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        templateFormats: ["html", "njk", "md", "liquid"],
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes",
            layouts: "_layouts",
            data: "_data"
        }
    }

}