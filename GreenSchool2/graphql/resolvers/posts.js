const Post = require ('../../models/Post');
const checkAuth = require('../../util/check-auth');
const { AuthenticationError, UserInputError} = require('apollo-server');




module.exports = {
    Query: {
        async getPosts(){
            try{
                const posts = await Post.find().sort({ createdAt: -1});
                return posts;
            }catch(err){
                throw new Error(err);
            }
        },
        async getPost(_, { postId }){
            try{
                const post = await Post.findById(postId);
                if(post){
                    return post;
                }else{
                    throw new Error('Post not found');
                }
            }catch(err){
                throw new Error(err);
            }
        }
    },
    Mutation: {
        async createPost(_, { description , image}, context){
            const user = checkAuth(context);
            const newPost = new Post({
                description,
                creator: user.id,
                image:image,
                username: user.username,
                name: user.name,
                createdAt: new Date().toISOString()
            });

            const post = await newPost.save();
            return post;

        }
    },
    Subscription: {
        newLike:{
            subscribe: (_,__,{pubsub}) =>  pubsub.asyncIterator('NEW_LIKE')
        }
    }
}