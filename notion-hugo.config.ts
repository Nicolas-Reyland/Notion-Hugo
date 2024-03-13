import { UserConfig } from "./src/config"

const userConfig: UserConfig = {
    mount: {
        manual: false,
        page_url: 'https://www.notion.so/ARS-5b6fe304917443f89c1cda0d813cced3',
        pages: [
            // {
            //     page_id: '<page_id>',
            //     target_folder: 'path/relative/to/content/folder'
            // }
            {
                page_id: '5b6fe304917443f89c1cda0d813cced3',
                target_folder: '.'
            }
        ],
        databases: [
            // {
            //     database_id: '<database_id>',
            //     target_folder: 'path/relative/to/content/folder'
            // }
            {
                database_id: 'f8ba247b9b3d42dda79a4d8ae545d4c5',
                target_folder: '.'
            }
        ],
    },
    formatter: {
        equation: {
            // config how maths equations are rendered into markdown
            // there are three options (markdown, shortcode, html)
            // the markdown option renders the equations in default markdown flavor:
            //    \(inline equation\) \[displayed equation\]
            // the shortcode option renders the equations into the math shortcode 
            //    which relies on your Hugo theme to support and render the equations
            // the html option directly renders equations into HTML + MathML
            //    when converting your Notion page into the markdown file, 
            //    it makes the markdown file a lot less readable but it works for all themes. 
            //    `markup.goldmark.renderer.unsafe` needs to be set to true for the HTML tags to work,
            //    which is the default setting.
            //    https://gohugo.io/getting-started/configuration-markup///configure-markup
            style: 'html'
        }
    }
}

module.exports = userConfig
