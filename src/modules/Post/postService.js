let posts = []

export const createPost = (data, user) => {
    postspush({
        createBy: user.email,
        ...data

    })
}