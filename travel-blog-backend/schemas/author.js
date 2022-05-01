export default{
name: "",
type: "",
title: "",
fields: [
    {
        name: "username",
        type: "string",
        title: "Username ", 
    },
    {
        name: "avatar",
        type: "image",
        title: "Avatar",
        options: {
            hotspot: true,
        }
    },
    {
        name: "slug",
        type: "slug",
        title: "Slug",
        options: {
            source: 'username',
            maxlength: 96,
        }
    },
    {
        name: "bio",
        type: "text",
        title: "Bio",
    },
],
    preview: {
        select: {
            title: "username",
            media: "avatar"
        }
    }
}