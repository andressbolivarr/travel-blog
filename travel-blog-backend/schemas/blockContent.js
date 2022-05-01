export default{
    name: "blockContent",
    type: "array",
    title: "Block Content",
    of: [
        {
        title: "Block",
        type: "block",
        styles:[
            {title: "Normal", value:"Normal"},
            {title: "H1", value:"h1"},
            {title: "H2", value:"h2"},
            {title: "H3", value:"h3"},
            {title: "H4", value:"h4"},
            {title: "Quote", value:"blockquote"},
        ],
        lists: [{title: "Bullet", value:"bullet" }],
        marks: { 
            decorators:[
            {title: 'Strong', value:"bullet"},
            {title: 'Emphasis', value:"em"},
        ],
        annotations: [
            {title: "URL", name: "link", type: "object",
            fields:[
                {
                    name: "href",
                    type: "url",
                    title: "URL"
                            },
                        ],
                    },
                ],
            },
        },
        {
            type: "image",
            options: {
                hotspot: true,
            }
        },
    ],
}