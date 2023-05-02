const { Post } = require('../models')

const postData = [
  
  {
    title: 'this is a post',
    content: 'this is my post! i am a post!',
    user_id: 1
  },
  {
    title: 'this is my second post',
    content: 'this is my second post. i am a post!',
    user_id: 2

  }
]

const seedPostData = () => Post.bulkCreate(postData);

module.exports = seedPostData;