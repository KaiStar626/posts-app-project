export const getComments = async () => {
    return [
    {
    id: "1",
    userId: "1",
    comment: "first comment",
    username: "Egypt",
    parentId: null
    },
        {
        id: "2",
        userId: "2",
        comment: "second comment",
        username: "book",
        parentId: null
        },
            {
            id: "3",
            userId: "3",
            comment: "third comment",
            username: "painting",
            parentId: "1"
            },
 ];
};
